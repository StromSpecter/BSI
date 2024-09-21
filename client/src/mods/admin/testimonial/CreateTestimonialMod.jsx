import { useState, useEffect } from "react";
import { RiCloseLine } from "react-icons/ri";
import axios from "axios";

const CreateTestimonialModal = ({ isOpen, onClose, onAddTestimonial }) => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [error, setError] = useState("");

  // Close the modal when clicking outside of the modal content
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.id === "modal-overlay") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("click", handleOutsideClick);
    }

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !review) {
      setError("Please fill out both the name and review fields.");
      return;
    }

    // Reset error
    setError("");

    // Send POST request to the API
    axios
      .post("http://localhost:3000/api/testimonials", {
        name,
        review,
      })
      .then((response) => {
        console.log("Testimonial added:", response.data);
        // Add the new testimonial to the state in the parent component
        onAddTestimonial(response.data);

        // Reset form fields
        setName("");
        setReview("");
        // Close modal after successful submission
        onClose();
      })
      .catch((error) => {
        console.error("Error adding testimonial:", error);
        setError("Failed to add testimonial. Please try again.");
      });
  };

  if (!isOpen) return null;

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="relative w-full max-w-lg p-8 bg-white rounded-lg shadow-lg md:p-10">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute text-gray-600 top-3 right-3 hover:text-gray-800"
        >
          <RiCloseLine size={24} />
        </button>

        {/* Modal Content */}
        <h2 className="mb-4 text-2xl font-bold text-center text-green-600">
          Add Testimonial
        </h2>

        {/* Error message */}
        {error && (
          <p className="mb-4 text-sm text-red-500">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-600">
              Review
            </label>
            <textarea
              rows="4"
              placeholder="Write your review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            ></textarea>
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTestimonialModal;
