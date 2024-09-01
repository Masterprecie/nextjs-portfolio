"use client";
import { useEffect, useRef } from "react";

type BookingModalProps = {
  show: boolean;
  onClose: () => void;
  url: string;
};

const BookingModal = ({ show, onClose, url }: BookingModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show, onClose]);
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999]">
      <div
        ref={modalRef}
        className="bg-white p-4 rounded overflow-clip shadow-lg max-w-5xl w-full h-[90vh] relative"
      >
        <h2 className="text-xl font-bold text-[#101140] mb-4">
          Google Calendar
        </h2>

        <iframe
          src={url}
          style={{ border: 0, width: "100%", height: "100%" }}
          frameBorder="0"
          allowFullScreen
          title="Google Calendar"
        ></iframe>

        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-[#101140] text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};
export default BookingModal;
