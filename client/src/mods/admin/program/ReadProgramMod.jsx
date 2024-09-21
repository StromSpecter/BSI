import { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../../utils/constant";

const ReadProgramMod = ({ isOpen, close, programId }) => {
  const [program, setProgram] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isOpen && programId) {
      const fetchProgram = async () => {
        try {
          const response = await axios.get(
            `${API_BASE_URL}/programs/${programId}`
          );
          setProgram(response.data);
          setLoading(false);
        } catch (err) {
          console.error("Error fetching program:", err);
          setError("Failed to fetch program details.");
          setLoading(false);
        }
      };

      fetchProgram();
    }
  }, [isOpen, programId]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed top-0 right-0 w-full sm:w-1/3 h-full bg-white border-l-2 transform transition-transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="relative h-full p-4 overflow-y-auto">
        <button
          onClick={close}
          className="absolute text-xl text-gray-600 hover:text-gray-900 top-4 right-4"
        >
          &times;
        </button>
        <h2 className="mb-4 text-2xl font-bold text-green-500">
          Program Details
        </h2>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          program && (
            <div className="space-y-4">
              <div>
                <strong className="text-gray-700">Title:</strong>{" "}
                <span>{program.title}</span>
              </div>
              <div>
                <strong className="text-gray-700">Author:</strong>{" "}
                <span>{program.author}</span>
              </div>
              <div>
                <strong className="text-gray-700">Date:</strong>{" "}
                <span>{program.date}</span>
              </div>
              <div>
                <strong className="text-gray-700">Description:</strong>
                {/* Use dangerouslySetInnerHTML to render HTML */}
                <div
                  className="mt-2"
                  dangerouslySetInnerHTML={{ __html: program.description }}
                />
              </div>
              {program.icon && (
                <div>
                  <strong className="text-gray-700">Icon:</strong>
                  <div className="p-3 bg-green-500 rounded-full h-fit w-fit">
                    <img
                      src={`http://localhost:3000/uploads/${program.icon}`}
                      alt="Icon"
                      className="object-cover w-24 h-24 mt-2"
                    />
                  </div>
                </div>
              )}
              {program.image1 && (
                <div>
                  <strong className="text-gray-700">Image 1:</strong>
                  <img
                    src={`http://localhost:3000/uploads/${program.image1}`}
                    alt="Image 1"
                    className="w-full h-auto mt-2"
                  />
                </div>
              )}
              {program.image2 && (
                <div>
                  <strong className="text-gray-700">Image 2:</strong>
                  <img
                    src={`http://localhost:3000/uploads/${program.image2}`}
                    alt="Image 2"
                    className="w-full h-auto mt-2"
                  />
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ReadProgramMod;
