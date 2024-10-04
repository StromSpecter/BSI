import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import banner from "../../assets/banner.svg";
import logo from "../../assets/logo.svg";
import kemitraan1 from "../../assets/kemitraans/Frame 207.svg";
import kemitraan2 from "../../assets/kemitraans/Frame 207-2.svg";
import kemitraan3 from "../../assets/kemitraans/Frame 207-1.svg";
import kemitraan4 from "../../assets/kemitraans/Frame 207-3.svg";
import sampah1 from "../../assets/sampah/cbi_garbage-plastic.svg";
import sampah2 from "../../assets/sampah/icon-park-solid_setting-two.svg";
import sampah3 from "../../assets/sampah/cbi_garbage-plastic.svg";
import sampah4 from "../../assets/sampah/mdi_paper.svg";
import sampah5 from "../../assets/sampah/mingcute_bottle-glass-fill.svg";
import sampah6 from "../../assets/sampah/ri_oil-fill.svg";
import partnerts from "../../assets/partnerts/Group 12723.svg";
import Slider from "react-slick"; // Import Slider dari react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { API_BASE_URL } from "../../utils/constant";

const Home = () => {
  const [programs, setPrograms] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Fetch the programs data
    axios
      .get(`${API_BASE_URL}/programs`)
      .then((response) => {
        setPrograms(response.data);
      })
      .catch((error) => {
        console.error("Error fetching programs data:", error);
      });
  }, []);

  useEffect(() => {
    // Fetch the testimonals data
    axios
      .get(`${API_BASE_URL}/testimonials`)
      .then((response) => {
        setTestimonials(response.data);
      })
      .catch((error) => {
        console.error("Error fetching testimonials data:", error);
      });
  });

  const navigate = useNavigate(); // Inisialisasi navigate

  const handleClickAboutus = () => {
    navigate("/about-us"); // Arahkan ke halaman /aboutus
  };

  // Pengaturan slider
  const settings = {
    dots: true, // Menampilkan titik indikator
    infinite: true, // Looping
    speed: 500,
    slidesToShow: 3, // Menampilkan 3 slide per tampilan
    slidesToScroll: 1, // Berpindah 1 slide setiap kali scroll
    responsive: [
      {
        breakpoint: 1024, // Untuk layar ukuran medium
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Untuk layar ukuran kecil
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full h-full">
      <section
        className="flex flex-col items-center justify-center w-full h-screen px-5 md:px-0"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center justify-center px-6 py-3 bg-white rounded-3xl h-fit w-fit">
          <p className="text-5xl font-bold text-center text-green-700">
            BSI Rumah Harum
          </p>
          <p className="text-2xl font-semibold text-green-500">
            {"- "}Depok{" -"}
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="w-full h-full py-10">
        <div className="container flex flex-col w-full h-full gap-10 px-5 mx-auto md:px-0">
          <p className="text-5xl font-bold text-center text-green-700">
            Programs
          </p>
          <div className="grid w-full h-full grid-cols-1 gap-10 md:grid-cols-3">
            {programs.map((program) => (
              <div
                key={program.id}
                className="flex flex-col w-full p-5 bg-green-500 shadow-lg rounded-3xl"
              >
                <img
                  src={`http://localhost:3000/uploads/${program.icon}`}
                  alt={program.title}
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-xl font-bold text-white">
                  {program.title}
                </h3>
                <p className="text-sm text-gray-200 line-clamp-2">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full h-full py-10">
        <div className="container flex flex-col w-full h-full gap-10 px-5 mx-auto md:px-0 md:flex-row">
          <div className="flex flex-col items-center justify-center w-full grow rounded-3xl">
            <div className="w-32 h-32">
              <img
                src={logo}
                alt="logo"
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-green-500">Bank Sampah Induk </p>
            <p className="text-4xl font-bold text-green-600">Rumah Harum</p>
          </div>
          <div className="flex flex-col justify-center w-full gap-2 px-5 py-10 h-fit rounded-3xl">
            <p className="text-2xl text-red-500">Bank Sampah Induk</p>
            <p className="text-5xl font-bold text-green-600">Rumah Harum</p>
            <p className="text-xl text-gray-400">
              Bank Sampah Induk Rumah Harum berdiri pada tahun 2013 hingga
              sekarang. Kami memiliki 105 titik Bank Sampah Unit yang tersebar
              di Wilayah Jabodetabek, khususnya Wilayah Depok.
            </p>
            <p className="text-2xl font-bold text-green-600">
              Berpengalaman selama 10 tahun
            </p>
            <p className="text-2xl font-bold text-green-600">
              Konsep Zero Waste
            </p>
            <button
              onClick={handleClickAboutus}
              className="px-4 py-2 text-white transition bg-green-500 rounded-full w-fit hover:bg-green-600"
            >
              Selengkapnya
            </button>
          </div>
        </div>
      </section>
      <section className="w-full h-full py-10">
        <div className="container flex flex-col w-full h-full gap-10 px-5 mx-auto md:px-0">
          <p className="text-5xl font-bold text-center text-green-700">
            Kemitraans
          </p>
          <div className="grid w-full h-full grid-cols-1 gap-10 md:grid-cols-4">
            <div className="flex flex-col items-center justify-center w-full h-40 bg-green-500 rounded-3xl">
              <img src={kemitraan1} alt="icon" className="size-14" />
              <p className="text-2xl font-light text-white">100</p>
              <p className="text-xl font-bold text-white">BSU</p>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-40 bg-green-500 rounded-3xl">
              <img src={kemitraan3} alt="icon" className="size-14" />
              <p className="text-2xl font-light text-white">100</p>
              <p className="text-xl font-bold text-white">Perorangan</p>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-40 bg-green-500 rounded-3xl">
              <img src={kemitraan2} alt="icon" className="size-14" />
              <p className="text-2xl font-light text-white">100</p>
              <p className="text-xl font-bold text-white">Perusahaan</p>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-40 bg-green-500 rounded-3xl">
              <img src={kemitraan4} alt="icon" className="size-14" />
              <p className="text-2xl font-light text-white">100</p>
              <p className="text-xl font-bold text-white">Akademis</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-full py-10">
        <div className="container flex flex-col w-full h-full gap-10 px-5 mx-auto md:px-0">
          <p className="text-5xl font-bold text-center text-green-700">
            Sampah Terkumpul
          </p>
          <div className="grid w-full h-full grid-cols-1 gap-10 md:grid-cols-3">
            <div className="flex flex-col items-center justify-center w-full h-40 bg-green-500 rounded-3xl">
              <img src={sampah1} alt="icon" className="size-14" />
              <p className="text-2xl font-light text-white">100</p>
              <p className="text-xl font-bold text-white">Perorangan</p>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-40 bg-green-500 rounded-3xl">
              <img src={sampah2} alt="icon" className="size-14" />
              <p className="text-2xl font-light text-white">100</p>
              <p className="text-xl font-bold text-white">Perorangan</p>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-40 bg-green-500 rounded-3xl">
              <img src={sampah3} alt="icon" className="size-14" />
              <p className="text-2xl font-light text-white">100</p>
              <p className="text-xl font-bold text-white">Perorangan</p>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-40 bg-green-500 rounded-3xl">
              <img src={sampah4} alt="icon" className="size-14" />
              <p className="text-2xl font-light text-white">100</p>
              <p className="text-xl font-bold text-white">Perorangan</p>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-40 bg-green-500 rounded-3xl">
              <img src={sampah5} alt="icon" className="size-14" />
              <p className="text-2xl font-light text-white">100</p>
              <p className="text-xl font-bold text-white">Perorangan</p>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-40 bg-green-500 rounded-3xl">
              <img src={sampah6} alt="icon" className="size-14" />
              <p className="text-2xl font-light text-white">100</p>
              <p className="text-xl font-bold text-white">Perorangan</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col w-full h-full gap-10 py-10">
        <p className="text-5xl font-bold text-center text-green-700">
          Testimoni
        </p>
        <div className="container flex flex-col w-full h-full px-5 mx-auto md:px-0">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-3">
                <div className="flex flex-col justify-center w-full h-full p-5 py-10 text-white bg-green-500 shadow-lg rounded-3xl">
                  <p className="text-lg italic">{testimonial.review}</p>
                  <p className="mt-3 font-bold text-right">
                    - {testimonial.name}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <section className="flex flex-col w-full h-full gap-10 py-10">
        <p className="text-5xl font-bold text-center text-green-700">
          Partners
        </p>
        <div className="flex flex-row items-center justify-center w-full py-10 bg-green-700 h-fit">
          <p className="px-5 text-3xl font-bold text-center text-white md:px-0">
            Kita Jaga Alam, Alam Jaga Kita
          </p>
        </div>
        <div className="container flex flex-col w-full h-full gap-10 px-5 mx-auto md:px-0">
          <div className="flex flex-row w-full h-full gap-10">
            <img src={partnerts} alt="partners" className="w-full" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
