import { useState, useEffect, useRef } from "react";
import { RiCloseFill } from "react-icons/ri";
import axios from "axios"; // Import Axios
import { API_BASE_URL } from "../../../utils/constant";

const CreateProgramMod = ({ closeCreateModal, onProgramAdded }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    date: "",
    icon: null,
    img1: null,
    img2: null,
    description: "",
  });

  const modalRef = useRef(null); // Create a reference for the modal container

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleNextStep = () => setStep(2);
  const handlePrevStep = () => setStep(1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data for submission using FormData
    const submissionData = new FormData();
    submissionData.append("title", formData.title);
    submissionData.append("author", formData.author);
    submissionData.append("date", formData.date);
    submissionData.append("icon", formData.icon);
    submissionData.append("image1", formData.img1);
    submissionData.append("image2", formData.img2);
    submissionData.append("description", formData.description);

    try {
      // Send POST request using Axios
      const response = await axios.post(`${API_BASE_URL}/programs`, submissionData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log("Program created successfully:", response.data);

      // Close the modal after successful submission
      onProgramAdded(response.data);
      closeCreateModal();
    } catch (error) {
      console.error("Error creating program:", error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeCreateModal(); // Close modal when clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeCreateModal]); // 'closeCreateModal' can be included in the dependency array

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        ref={modalRef}
        className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Create Programs</h2>
          <button
            onClick={closeCreateModal}
            className="text-red-500 hover:text-red-600"
          >
            {" "}
            {/* Close modal button */}
            <RiCloseFill size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Icon
                </label>
                <input
                  type="file"
                  name="icon"
                  onChange={handleFileChange}
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
                  accept="image/*"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Author
                </label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <button
                type="button"
                onClick={handleNextStep}
                className="w-full px-4 py-2 mt-4 text-white transition bg-green-500 rounded-md hover:bg-green-600"
              >
                Next
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Image 1
                </label>
                <input
                  type="file"
                  name="img1"
                  onChange={handleFileChange}
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
                  accept="image/*"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Image 2
                </label>
                <input
                  type="file"
                  name="img2"
                  onChange={handleFileChange}
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
                  accept="image/*"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
                  rows="3"
                  required
                />
              </div>
              <div className="flex justify-between gap-4">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="w-full px-4 py-2 text-white transition bg-gray-500 rounded-md hover:bg-gray-600"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-white transition bg-green-500 rounded-md hover:bg-green-600"
                >
                  Submit
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreateProgramMod;
