import React from 'react';

function SuccessModal({ onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Checked Out Successfully!</h2>
        <p>Thank you for your purchase. Your order has been placed.</p>
        <div className='text-center checkout-btn'><button onClick={onClose}>Close</button></div>
      </div>
    </div>
  );
}

export default SuccessModal;
