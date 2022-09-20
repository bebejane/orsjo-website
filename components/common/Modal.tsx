import styles from './Modal.module.scss'
import cn from 'classnames'
import ReactDOM from 'react-dom';
import React from 'react'

type ModalProps = { 
  children: React.ReactElement | React.ReactElement[]
  className?: string
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>((props, ref) => {
  
  const modalDiv = (
    <div ref={ref} className={cn(styles.modal)}>
      {props.children}
    </div>
  )
  return ReactDOM.createPortal(modalDiv, document.body)
})

Modal.displayName = 'Modal'

export default Modal;
