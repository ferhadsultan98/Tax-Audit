import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaExclamationCircle, FaQuestionCircle } from 'react-icons/fa';
import './ToastNotification.scss';

const ToastNotification = ({ message, type = 'success', duration = 3000, onClose, onConfirm }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (type !== 'confirm') {
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onClose) onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose, type]);

  const handleConfirm = (response) => {
    setIsVisible(false);
    if (onConfirm) onConfirm(response);
    if (onClose) onClose();
  };

  if (!isVisible) return null;

  const toastClass = `toastContainer toast${type.charAt(0).toUpperCase() + type.slice(1)} ${type === 'confirm' ? 'modal' : ''}`;

  return (
    <div className={toastClass}>
      <div className="toastIcon">
        {type === 'success' && <FaCheckCircle />}
        {type === 'error' && <FaExclamationCircle />}
        {type === 'confirm' && <FaQuestionCircle />}
      </div>
      <div className="toastMessage">{message}</div>
      {type === 'confirm' ? (
        <div className="confirmButtons">
          <button className="confirmButton yes" onClick={() => handleConfirm(true)}>
            Yes
          </button>
          <button className="confirmButton no" onClick={() => handleConfirm(false)}>
            No
          </button>
        </div>
      ) : (
        <button className="toastClose" onClick={() => setIsVisible(false)}>
          ×
        </button>
      )}
    </div>
  );
};

const ToastContainer = ({ toasts }) => {
  return (
    <div className="toastWrapper">
      {toasts.map((toast) => (
        <ToastNotification
          key={toast.id}
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
          onClose={toast.onClose}
          onConfirm={toast.onConfirm}
        />
      ))}
    </div>
  );
};

export default ToastContainer;