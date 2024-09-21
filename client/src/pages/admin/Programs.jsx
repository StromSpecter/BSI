import { useState, useEffect } from "react";
import { RiEyeLine, RiEdit2Line, RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";
import CreateProgramMod from "../../mods/admin/program/CreateProgramMod";
import UpdateProgramMod from "../../mods/admin/program/UpdateProgramMod";
import ReadProgramMod from "../../mods/admin/program/ReadProgramMod"; // Import ReadProgramMod

const Program = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isReadModalOpen, setIsReadModalOpen] = useState(false); // State for ReadProgramMod
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/programs");
        setPrograms(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching programs:", err);
        setError(`Failed to fetch programs: ${err.message}`);
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  const openCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  const closeCreateModal = () => {
    setIsCreateModalOpen(false);
  };

  const openUpdateModal = (program) => {
    setSelectedProgram(program);
    setIsUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    setSelectedProgram(null);
    setIsUpdateModalOpen(false);
  };

  const openReadModal = (program) => {
    setSelectedProgram(program);
    setIsReadModalOpen(true);
  };

  const closeReadModal = () => {
    setSelectedProgram(null);
    setIsReadModalOpen(false);
  };

  const deleteProgram = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/programs/${id}`);
      setPrograms(programs.filter((program) => program.id !== id));
    } catch (err) {
      console.error("Error deleting program:", err);
      setError(`Failed to delete program: ${err.message}`);
    }
  };

  const handleProgramAdded = (newProgram) => {
    setPrograms((prevPrograms) => [...prevPrograms, newProgram]);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-col w-full h-full p-5">
      <div className="flex flex-row items-center justify-between w-full mb-5 h-fit">
        <h1 className="text-3xl font-bold text-green-500">Program</h1>
        <button
          className="px-4 py-2 text-white transition bg-green-500 rounded-full hover:bg-green-600"
          onClick={openCreateModal}
        >
          Add Program
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead className="text-white bg-green-500">
            <tr>
              <th className="px-6 py-3 text-left">Title</th>
              <th className="px-6 py-3 text-left">Author</th>
              <th className="px-6 py-3 text-left">Date</th>
              <th className="px-6 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {programs.map((program, index) => (
              <tr
                key={index}
                className="transition border-t border-gray-300 hover:bg-gray-100"
              >
                <td className="px-6 py-4">{program.title}</td>
                <td className="px-6 py-4">{program.author}</td>
                <td className="px-6 py-4">{new Date(program.createdAt).toLocaleDateString()}</td>
                <td className="flex justify-center px-6 py-4 space-x-4">
                  <button
                    className="text-blue-500 transition hover:text-blue-600"
                    onClick={() => openReadModal(program)} // Open ReadModal with selected program
                  >
                    <RiEyeLine size={20} />
                  </button>
                  <button
                    className="text-green-500 transition hover:text-green-600"
                    onClick={() => openUpdateModal(program)}
                  >
                    <RiEdit2Line size={20} />
                  </button>
                  <button
                    className="text-red-500 transition hover:text-red-600"
                    onClick={() => deleteProgram(program.id)}
                  >
                    <RiDeleteBin6Line size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isCreateModalOpen && (
        <CreateProgramMod
          closeCreateModal={closeCreateModal}
          onProgramAdded={handleProgramAdded}
        />
      )}

      {isUpdateModalOpen && (
        <UpdateProgramMod
          program={selectedProgram}
          closeUpdateModal={closeUpdateModal}
        />
      )}

      {isReadModalOpen && (
        <ReadProgramMod
          isOpen={isReadModalOpen}
          close={closeReadModal}
          programId={selectedProgram?.id} // Pass the ID of the selected program
        />
      )}
    </div>
  );
};

export default Program;
