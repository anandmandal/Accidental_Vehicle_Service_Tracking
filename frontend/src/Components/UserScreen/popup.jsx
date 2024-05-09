import React, { useRef } from 'react';
import './Popup.css'; // Import CSS file for styling
import { RxCross1 } from "react-icons/rx";


const Popup = ({ isOpen, onClose, children,shareLink }) => {
  const contentRef = useRef(null);

   const handleCopyLink = () => {
    navigator.clipboard.writeText(shareLink).then(() => {
      alert('Link copied to clipboard!');
    });
  };

  return (
    isOpen && (
      <div className="popup-overlay">
        <div className="popup">
          <button className="close-button" onClick={onClose}><RxCross1/></button>
          <div className="popup-content" ref={contentRef}>
            {children}
          </div>
          <button className="share-button" onClick={handleCopyLink}>Share Link</button>
        </div>
      </div>
    )
  );
};

export default Popup;
