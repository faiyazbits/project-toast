import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';

function ToastShelf({toasts}) {
  const {dismissToast} = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({id, message, variant}) => (
        <li key={id} className={styles.toastWrapper}>
        <Toast variant={variant} onDismiss={() => dismissToast(id)}>{message}</Toast>
      </li>
      ))}
      
    </ol>
  );
}

export default ToastShelf;
