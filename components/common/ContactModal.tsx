
import styles from './ContactModal.module.scss'
import cn from 'classnames'
import { Modal } from '/components'
import { useEffect, useRef, useState, useCallback } from 'react';
import { useForm } from "react-hook-form";

export default function ContactModal({ onClose, show = false }) {

  const { register, handleSubmit, reset, setFocus } = useForm();
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<Error | string | undefined>()
  const ref = useRef<HTMLInputElement>()

  const [data, setData] = useState("");

  const resetForm = useCallback(() => {
    setSuccess(false)
    setError(undefined)
    setLoading(false)
    reset();
  }, [setSuccess, setError, setLoading, reset])

  useEffect(() => {

    if (!data) return

    setLoading(true)

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: data
    }).then(async (res) => {
      if (res.status !== 200)
        setError(await res.json())
      else
        setSuccess(true)
    }).catch((err) => {
      setError(err)
    }).finally(() => {
      setLoading(false)
    })

  }, [data])

  useEffect(() => {
    if (!show)
      setTimeout(resetForm, 300)
  }, [show, ref, resetForm, setFocus])

  return (
    <Modal>
      <div className={cn(styles.contactModal, show && styles.show)}>
        <div className={styles.wrap}>
          <h1>Contact us</h1>
          <form id="contact-form" onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>

            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Name..." {...register("name", { required: true, minLength: 3 })} />

            <label htmlFor="email">E-mail</label>
            <input id="email" type="text" name="email" placeholder="E-mail..." {...register("email", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })} />

            <label htmlFor="subject">Subject</label>
            <input id="subject" type="text" name="subject" placeholder="Subject..." {...register("subject", { required: true })} />

            <label htmlFor="text">Message</label>
            <textarea name="text" {...register("text", { required: true })}></textarea>

            <button type="submit">Send</button>
          </form>

          {error &&
            <div className={styles.error}>
              {typeof error === 'string' ? error : error.message}
            </div>
          }
          {loading &&
            <div className={styles.loading}>
              Sending message...
            </div>
          }
          {success &&
            <div className={styles.success}>
              Message sent!<br />
              <button onClick={onClose}>Close</button>
            </div>
          }
        </div>
        <div className={styles.close} onClick={onClose}>×</div>
      </div>
    </Modal>
  )
}