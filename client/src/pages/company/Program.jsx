import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../../utils/constant";

const ProgramDetail = () => {
  const { menuId } = useParams(); // menuId dari URL
  const [program, setProgram] = useState(null); // Menyimpan data program
  const [loading, setLoading] = useState(true); // Menyimpan status loading
  const [error, setError] = useState(null); // Menyimpan status error

  // Mapping antara menuId dan ID program di database
  const programMapping = {
    "minyak-jelantah": 5,
    "angkut-gratis": 6,
    menabung: 7,
    edukasi: 8,
    dokumen: 9,
    industri: 10,
  };

  useEffect(() => {
    const fetchProgram = async () => {
      const programId = programMapping[menuId]; // Ambil ID berdasarkan menuId

      if (!programId) {
        setError("Program tidak ditemukan.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        // Ambil data program berdasarkan ID dari API
        const response = await axios.get(
          `${API_BASE_URL}/programs/${programId}`
        );
        setProgram(response.data); // Set data program yang diambil
      } catch (err) {
        console.error("Error fetching program:", err);
        setError(`Gagal memuat program: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchProgram();
  }, [menuId]);

  if (loading) {
    return <p>Loading...</p>; // Tampilkan pesan loading saat data sedang diambil
  }

  if (error) {
    return <p>{error}</p>; // Tampilkan pesan error jika ada
  }

  return (
    <div>
      {program ? (
        <div className="w-screen h-full">
          <section className="container flex flex-col-reverse items-center justify-center w-full min-h-screen gap-20 px-5 py-10 mx-auto md:flex-row md:px-0 md:py-0 md:gap-0">
            <div className="flex flex-col justify-center w-full h-full gap-5">
              <p className="text-5xl font-bold text-red-500">
                {program.title}
              </p>
              <p className="text-xl text-justify text-gray-600">
                {program.description}
              </p>
            </div>
            <div className="relative flex items-center justify-center w-full h-full">
              <div className="relative transition-all duration-500 ease-in-out transform w-96 h-96 group active:scale-95 active:rotate-3">
                {/* Kartu Biru dengan animasi hover */}
                <div className="absolute bottom-0 w-60 h-60 transition-all duration-500 ease-in-out transform group-hover:translate-y-[-40px] group-hover:translate-x-[-40px] group-hover:rotate-12 hover:scale-110">
                  <img
                    src={`http://localhost:3000/uploads/${program.image1}`}
                    alt="banner"
                    className="object-cover w-full h-full rounded-3xl"
                  />
                </div>
                {/* Kartu Merah dengan animasi hover */}
                <div className="absolute top-0 right-0 w-60 h-60 transition-all duration-500 ease-in-out transform group-hover:translate-y-[40px] group-hover:translate-x-[40px] group-hover:rotate-12 hover:scale-110">
                  <img
                    src={`http://localhost:3000/uploads/${program.image2}`}
                    alt="banner"
                    className="object-cover w-full h-full rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <p>Program tidak ditemukan.</p>
      )}
    </div>
  );
};

export default ProgramDetail;
