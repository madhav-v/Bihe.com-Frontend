import React, { useState } from "react";
import Rating from "react-rating-stars-component";
import feedBackSvc from "../../services/feedback.service";
import { toast } from "react-toastify";
import { FaWindowClose } from "react-icons/fa";

const Modal = ({ isOpen, onClose }) => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = async () => {
    const data = { rating, feedback };
    const response = await feedBackSvc.sendFeedback(data);
    if (response) {
      toast.success(response.msg);
    }
    onClose();
  };

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? "block" : "hidden"}`}>
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative bg-white p-6 w-96 rounded-lg shadow-lg">
          <FaWindowClose
            className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-700 cursor-pointer"
            size={20}
            color="#ef4444"
            onClick={onClose}
          />
          <h2 className="text-xl font-semibold mb-4">Give Rating & Feedback</h2>
          <div className="mb-4">
            <label className="block mb-2">
              How satisfied are you with our recommendations :
            </label>
            <Rating
              count={5}
              size={40}
              value={rating}
              onChange={handleRatingChange}
              activeColor="#ef4444"
              emptyIcon={<i className="far fa-star"></i>}
              fullIcon={<i className="fas fa-star"></i>}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Feedback:</label>
            <textarea
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              rows="4"
              value={feedback}
              onChange={handleFeedbackChange}
              placeholder="Your feedback helps us to improve..."
            ></textarea>
          </div>
          <div className="text-right">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
