import { useState, useEffect } from "react";
import { RiEyeLine, RiEdit2Line, RiDeleteBin6Line } from "react-icons/ri";
import CreateTestimonialModal from "../../mods/admin/testimonial/CreateTestimonialMod";
import axios from "axios";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch the testimonials data
    axios
      .get("http://localhost:3000/api/testimonials")
      .then((response) => {
        setTestimonials(response.data);
      })
      .catch((error) => {
        console.error("Error fetching testimonials data:", error);
      });
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Function to add new testimonial to the state
  const addTestimonial = (newTestimonial) => {
    setTestimonials((prevTestimonials) => [newTestimonial, ...prevTestimonials]);
  };

  // Function to delete testimonial
  const handleDeleteTestimonial = (id) => {
    // Confirm before deleting
    if (window.confirm("Are you sure you want to delete this testimonial?")) {
      // Send DELETE request to the API
      axios
        .delete(`http://localhost:3000/api/testimonials/${id}`)
        .then(() => {
          // Remove the deleted testimonial from state
          setTestimonials((prevTestimonials) =>
            prevTestimonials.filter((testimonial) => testimonial.id !== id)
          );
        })
        .catch((error) => {
          console.error("Error deleting testimonial:", error);
        });
    }
  };

  return (
    <div className="flex flex-col w-full h-full p-5">
      <div className="flex flex-row items-center justify-between w-full mb-5 h-fit">
        <h1 className="text-3xl font-bold text-green-500">Testimonials</h1>
        <button
          onClick={openModal}
          className="px-4 py-2 text-white transition bg-green-500 rounded-full hover:bg-green-600"
        >
          Add Testimonial
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead className="text-white bg-green-500">
            <tr>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Review</th>
              <th className="px-6 py-3 text-left">Date</th>
              <th className="px-6 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {testimonials.map((testimonial) => (
              <tr
                key={testimonial.id}
                className="transition border-t border-gray-300 hover:bg-gray-100"
              >
                <td className="px-6 py-4">{testimonial.name}</td>
                <td className="px-6 py-4">{testimonial.review}</td>
                <td className="px-6 py-4">
                  {new Date(testimonial.createdAt).toLocaleDateString()}
                </td>
                <td className="flex justify-center px-6 py-4 space-x-4">
                  <button className="text-blue-500 transition hover:text-blue-600">
                    <RiEyeLine size={20} />
                  </button>
                  <button className="text-green-500 transition hover:text-green-600">
                    <RiEdit2Line size={20} />
                  </button>
                  <button
                    onClick={() => handleDeleteTestimonial(testimonial.id)}
                    className="text-red-500 transition hover:text-red-600"
                  >
                    <RiDeleteBin6Line size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Component */}
      <CreateTestimonialModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onAddTestimonial={addTestimonial}
      />
    </div>
  );
};

export default Testimonials;
