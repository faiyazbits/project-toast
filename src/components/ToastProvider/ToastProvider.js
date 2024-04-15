import React from 'react';
import useEscapeKey from '../../hooks/useEscapeKey';
export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  useEscapeKey(() => {
    setToasts([]);
  })

  function createToast(message, variant) {
    const newToast = { id: crypto.randomUUID(), message: message, variant: variant };
    setToasts([newToast, ...toasts]);
  }

  function dismissToast(toastId) {
    const nextToasts = toasts.filter((toast) => toast.id !== toastId);
    setToasts(nextToasts);
  }
  return (
    <ToastContext.Provider value={{ toasts, createToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
