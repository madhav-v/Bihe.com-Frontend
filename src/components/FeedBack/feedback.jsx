import React, { useState } from "react";
import Modal from "./modal";

const Feedback = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-md mx-auto mt-1 bg-white rounded-md shadow-md p-1">
      <div
        className="mb-4 cursor-pointer text-blue-500 text-center"
        onClick={handleOpenModal}
      >
        Any Feedback?
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Feedback;
