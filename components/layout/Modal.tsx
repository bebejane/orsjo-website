import styles from './Modal.module.scss'
import cn from 'classnames'
import ReactDOM from 'react-dom';
import React from 'react'
import { isServer } from '/lib/utils';
import classNames from 'classnames';

type ModalProps = { 
  children: React.ReactElement | React.ReactElement[]
  className?: string
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>((props, ref) => {
  
  if(isServer) return null

  return ReactDOM.createPortal(props.children, document.body)
})

Modal.displayName = 'Modal'

export default Modal;
