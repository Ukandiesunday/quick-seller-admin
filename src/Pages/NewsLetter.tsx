import Button from "@/components/Button";
import UploadDropZone from "@/components/UploadDropZone";

const NewsLetter = () => {
  return (
    <form className="p-[40px] custom-rounded bg-white">
      <h2 className="font-[700] text-[20px] mb-3">News Letter</h2>
      <div className="w-fit mx-auto">
        <UploadDropZone />
      </div>
      <div className="flex flex-col gap-[20px] mt-7 border border-[#E6E9EC] max-w-[500px] mx-auto p-[40px] custom-rounded">
        <div className="">
          <label className="font-[600] mb-3 " htmlFor="header">
            Subject
          </label>
          <input
            className="border border-[#E6E9EC] outline-none block w-full  h-[48px] rounded-[7px] py-[10px] px-[20px]  placeholder-[#B1BAC3] mt-2"
            type="text"
            name=""
            id="header"
            placeholder="Enter Subject"
          />
        </div>
        <div className="">
          <label className="font-[600]" htmlFor="header">
            Heading
          </label>
          <input
            className="border border-[#E6E9EC] outline-none block mt-2 w-full  h-[48px] rounded-[7px] py-[10px] px-[20px]  placeholder-[#B1BAC3]"
            type="text"
            name=""
            id="header"
            placeholder="Enter Mail Heading"
          />
        </div>
        <div>
          <label className="font-[600] mb-1" htmlFor="description">
            Body
          </label>
          <textarea
            className="border border-[#E6E9EC] mt-2 outline-none block w-full placeholder-[#B1BAC3] rounded-[7px] px-[20px] py-[10px] h-[84px]"
            name=""
            id="description"
            cols={30}
            placeholder="Enter Mail body"
          ></textarea>
        </div>
      </div>

      <div className="flex  md:justify-end mt-[30px]">
        <Button
          className="text-white w-full md:w-[192px] h-[55px]"
          type={"submit"}
          label="Send Mail"
        />
      </div>
    </form>
  );
};

export default NewsLetter;
