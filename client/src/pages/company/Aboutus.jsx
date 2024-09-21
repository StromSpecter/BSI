import karungtanah from "../../assets/Assorted-color sack lot.jpg";
import {
  RiMedal2Fill,
  RiWebhookFill,
  RiBuilding4Fill,
  RiShakeHandsFill,
} from "react-icons/ri";
import banner from "../../assets/banner.svg";
import banner1 from "../../assets/banner1.svg";
const Aboutus = () => {
  return (
    <div className="w-screen h-full">
      <section className="container flex flex-col-reverse items-center justify-center w-full min-h-screen gap-20 px-5 py-10 mx-auto md:flex-row md:px-0 md:py-0 md:gap-0">
        <div className="flex flex-col justify-center w-full h-full gap-5">
          <p className="text-2xl text-orange-500">Tentang BSI Rumah Harum</p>
          <p className="text-5xl font-bold text-green-900">
            Memberi Kehidupan Baru Untuk Barang Bekas
          </p>
          <p className="text-xl text-justify text-gray-600">
            Bank Sampah Induk Rumah Harum berdiri pada tahun 2013 hingga
            sekarang. Dibentuknya bank sampah ini dimulai dari kepedulian kami
            tentang masalah lingkungan khusus nya masalah sampah dan limbah di
            kota depok yang seakan akan tidak pernah ada penyelesaian. Awalnya
            Bank Sampah Induk Rumah Harum hanya memiliki 1 titik pengumpulan
            sampah atau Bank Sampah Unit. Namun, saat ini kami telah memiliki
            sekitar 105 titik Bank Sampah Unit. <br /> <br /> Bank sampah yang
            kami kelola berfokus pada konsep zero waste. BSI Rumah Harum
            memiliki beberapa program yang bertujuan untuk mengubah sampah hari
            ini menjadi bahan baku di masa depan. Kami memberikan kehidupan baru
            pada bahan bekas. Kami berkomitmen untuk bersinergi dengan program
            lingkungan pemerintah dan terus mengedukasi masyarakat tentang cara
            mengelola sampah selama hampir 10 tahun.
          </p>
        </div>
        <div className="relative flex items-center justify-center w-full h-full">
          <div className="relative transition-all duration-500 ease-in-out transform w-96 h-96 group active:scale-95 active:rotate-3">
            {/* Kartu Biru dengan animasi hover */}
            <div className="absolute bottom-0 w-60 h-60 transition-all duration-500 ease-in-out transform group-hover:translate-y-[-40px] group-hover:translate-x-[-40px] group-hover:rotate-12 hover:scale-110">
              <img
                src={banner}
                alt="banner"
                className="object-cover w-full h-full rounded-3xl"
              />
            </div>
            {/* Kartu Merah dengan animasi hover */}
            <div className="absolute top-0 right-0 w-60 h-60 transition-all duration-500 ease-in-out transform group-hover:translate-y-[40px] group-hover:translate-x-[40px] group-hover:rotate-12 hover:scale-110">
              <img
                src={banner1}
                alt="banner"
                className="object-cover w-full h-full rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className="flex flex-col items-center justify-center w-full h-full gap-10 py-20 md:flex-row"
        style={{
          backgroundImage: `url(${karungtanah})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center justify-center gap-5 bg-white h-60 w-60 rounded-2xl">
          <RiMedal2Fill className="text-green-500 size-14" />
          <div className="flex flex-col items-center justify-center">
            <p className="text-3xl font-bold">{">"} 10+</p>
            <p className="text-xl">Pengalaman</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 bg-white w-60 h-60 rounded-2xl">
          <RiBuilding4Fill className="text-green-500 size-14" />
          <div className="flex flex-col items-center justify-center">
            <p className="text-3xl font-bold">105+</p>
            <p className="text-xl">Bank Sampah Unit</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 bg-white w-60 h-60 rounded-2xl">
          <RiWebhookFill className="text-green-500 size-14" />
          <div className="flex flex-col items-center justify-center">
            <p className="text-3xl font-bold">0 Waste</p>
            <p className="text-xl">
              Konsep {"'"}Zero Waste{"'"}
            </p>
          </div>
        </div>
      </section>
      <section className="container flex flex-col w-full h-full gap-10 px-5 py-10 mx-auto md:px-0">
        <p className="text-5xl font-bold text-green-900">Penghargaan</p>
        <div className="flex flex-col w-full h-full gap-10 md:flex-row">
          <div className="flex flex-col items-center justify-center w-full h-full px-10 py-10 border-2 rounded-3xl">
            <RiShakeHandsFill className="text-green-700 size-20" />
            <p className="text-3xl font-bold text-center text-green-500">
              Anugrah Raksa Persada
            </p>
            <p className="text-xl font-semibold text-center">
              Dari Dinas Lingkungan Hidup Provinsi Jawa Barat
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full px-10 py-10 border-2 rounded-3xl">
            <RiShakeHandsFill className="text-green-700 size-20" />
            <p className="text-3xl font-bold text-center text-green-500">
              Terbaik Ketiga Business Pitching
            </p>
            <p className="text-xl font-semibold text-center">
              Dari PPM Bussiness School dan WWF
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
