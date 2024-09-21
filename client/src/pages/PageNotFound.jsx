import notfoundtree from "../assets/Bank Sampah Project.svg";

const PageNotFound = () => {
  return (
    <div className="flex flex-row items-center justify-center w-screen h-screen bg-green-700">
      <div className=" w-80 h-80">
        <img
          src={notfoundtree}
          alt="notfoundt"
          className="object-cover w-full h-full"
        />
      </div>
      <button className="absolute px-5 py-3 mt-5 text-white bg-green-500 rounded-2xl bottom-[210px] md:bottom-60">
        Back To Home
      </button>
    </div>
  );
};

export default PageNotFound;
