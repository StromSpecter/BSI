import { RiFacebookFill, RiInstagramFill, RiTiktokFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="w-screen h-full bg-green-700 py-14">
      <section className="container grid grid-cols-1 gap-5 px-5 mx-auto md:gap-20 md:grid-cols-3 md:px-0">
        <div className="flex flex-col">
          <p className="mb-5 text-xl font-semibold text-white">
            BSI Rumah Harum
          </p>
          <p className="text-base text-white">
            Jln. Merdeka Raya No. 1 RT05/RW01, Kel. Abadijaya, Kec. Sukmajaya,
            Kota Depok
          </p>
        </div>
        <div className="flex flex-col">
          <p className="mb-5 text-xl font-semibold text-white">Quick Link</p>
          <p className="text-base text-white">Home</p>
          <p className="text-base text-white">About Us</p>
          <p className="text-base text-white">Program</p>
          <p className="text-base text-white">Publikasi</p>
        </div>
        <div className="flex flex-col">
          <p className="mb-5 text-xl font-semibold text-white">Kontak</p>
          <p className="text-base text-white">bsirumahharum@gmail.com</p>
          <p className="text-base text-white">marketing.rumaharum@gmail.com</p>
          <p className="text-base text-white">0813-1086-2475</p>
          <div className="flex flex-row gap-2 mt-2">
            <div className="p-2.5 bg-green-500 rounded-full h-fit w-fit">
              <RiFacebookFill className="text-xl text-white" />
            </div>
            <div className="p-2.5 bg-green-500 rounded-full h-fit w-fit">
              <RiInstagramFill className="text-xl text-white" />
            </div>
            <div className="p-2.5 bg-green-500 rounded-full h-fit w-fit">
              <RiTiktokFill className="text-xl text-white" />
            </div>
          </div>
        </div>
      </section>
      <div className="pt-5 mt-5 border-t-4">
        <p className="text-center text-white">
          Copyright 2024 - BSI Rumah Harum
        </p>
      </div>
    </div>
  );
};

export default Footer;
