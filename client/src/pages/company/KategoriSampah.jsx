import organik from "../../assets/sampah/Rectangle 140.svg";
import minyak from "../../assets/sampah/Rectangle 140-1.svg";
import karung1 from "../../assets/sampah/Rectangle 140-2.svg";
import karung2 from "../../assets/sampah/Rectangle 140-3.svg";

const KategoriSampah = () => {
  return (
    <div className="w-full h-full py-20">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <p className="text-4xl font-bold text-green-900">
          Jenis Sampah Yang Diterima BSI Rumah Harum
        </p>
        <p className="text-xl font-normal text-gray-900">
          Berikut merupakan jenis/kategori sampah yang diterima oleh BSI Rumah
          Harum
        </p>
      </div>
      <section className="container flex flex-col gap-20 mx-auto">
        <div className="flex flex-col w-full h-full gap-2.5">
          <p className="text-xl font-bold text-green-500">Organik</p>
          <div className="bg-blue-500 w-60 h-60"></div>
        </div>
        <div className="flex flex-col w-full h-full gap-2.5">
          <p className="text-xl font-bold text-green-500">Minyak</p>
          <div className="bg-blue-500 w-60 h-60"></div>
        </div>
        <div className="flex flex-col w-full h-full gap-2.5">
          <p className="text-xl font-bold text-green-500">Karung</p>
          <div className="flex flex-row gap-4">
            <div className="bg-blue-500 w-60 h-60"></div>
            <div className="bg-blue-500 w-60 h-60"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KategoriSampah;
