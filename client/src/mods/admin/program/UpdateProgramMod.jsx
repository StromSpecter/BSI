import { useState, useEffect, useRef } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import axios from 'axios'; // Import axios
import { API_BASE_URL } from '../../../utils/constant';

const UpdateProgramMod = ({ program, closeUpdateModal }) => {
  const [step, setStep] = useState(1); // Step state
  const [formData, setFormData] = useState({
    title: program.title,
    author: program.author,
    date: program.date,
    icon: null,
    img1: null,
    img2: null,
    description: program.description || '',
  });

  const modalRef = useRef(null); // Reference to the modal container

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleNextStep = () => setStep(2); // Move to step 2
  const handlePrevStep = () => setStep(1); // Move back to step 1

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = new FormData();
    data.append('title', formData.title);
    data.append('author', formData.author);
    data.append('date', formData.date);
    data.append('description', formData.description);
    if (formData.icon) data.append('icon', formData.icon);
    if (formData.img1) data.append('image1', formData.img1);
    if (formData.img2) data.append('image2', formData.img2);

    try {
      const response = await axios.put(`${API_BASE_URL}/programs/${program.id}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Updated Program:', response.data);
      closeUpdateModal(); // Close the modal after submission
    } catch (error) {
      console.error('Error updating program:', error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeUpdateModal(); // Close modal when clicking outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeUpdateModal]); // Dependency array

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div ref={modalRef} className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Update Program</h2>
          <button onClick={closeUpdateModal} className="text-red-500 hover:text-red-600">
            <RiCloseFill size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Title</label>
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
                <label className="block text-sm font-medium text-gray-700">Author</label>
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
                <label className="block text-sm font-medium text-gray-700">Date</label>
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
                className="w-full px-4 py-2 mt-4 text-white bg-green-500 rounded-md hover:bg-green-600"
              >
                Next
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Image 1</label>
                <input
                  type="file"
                  name="img1"
                  onChange={handleFileChange}
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
                  accept="image/*"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Image 2</label>
                <input
                  type="file"
                  name="img2"
                  onChange={handleFileChange}
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
                  accept="image/*"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
                  rows="3"
                />
              </div>
              <div className="flex justify-between gap-4">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="w-full px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
                >
                  Update
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default UpdateProgramMod;
