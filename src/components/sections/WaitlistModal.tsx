import React, { useEffect } from 'react';
import Modal from '../ui/Modal';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="md">
      <div className="bg-white rounded-xl">
        <div
          id="getWaitlistContainer"
          data-waitlist_id="29105"
          data-widget_type="WIDGET_1"
        ></div>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"
        />
      </div>
    </Modal>
  );
};

export default WaitlistModal;
