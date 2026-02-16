import React, { useState, useEffect } from 'react';

import './toast.css';

export interface ToastProps {
  duration?: number;
  type?: 'success' | 'error' | 'info';
  message?: string;
}
export const Toast = ({ duration = 2000, type = 'info', message }: ToastProps) => {
  const [visible, setVisible] = useState(false);

  function onClose() {
    setVisible(false);
  }
  useEffect(() => {
    const showToast = requestAnimationFrame(() => setVisible(true));
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => {
      cancelAnimationFrame(showToast);
      clearTimeout(timer);
    };
  }, [duration]);

  return (
    <div className={`toast toast-${type}  ${visible ? 'visible' : 'invisible'}`}>
      <p className="message">{message}</p>
      <button type="button" className="close-btn" onClick={onClose}>
        x
      </button>
    </div>
  );
};
