import UploadIcon from "./DashboardIcons/UploadIcon";

const UploadDropZone = ({ className }: any) => {
  return (
    <div>
      <div
        className={`bg-white flex flex-col  justify-center  items-center border border-[#E6E9EC] custom-rounded p-[40px] ${className}`}
      >
        <label htmlFor="upload">
          <input hidden type="file" name="" id="upload" />
          <UploadIcon />
        </label>

        <p className="">
          Drag & Drop image or{" "}
          <label htmlFor="upload" className="text-green-400 cursor-pointer">
            Upload image
          </label>{" "}
          here
        </p>
        <p>Maximum image size 5MB</p>
      </div>
    </div>
  );
};

export default UploadDropZone;
