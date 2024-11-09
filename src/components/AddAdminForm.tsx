import { ModalState } from "@/context/ModalContext";
import TextInput from "./TextInput";
import CrownIcon from "./DashboardIcons/CrownIcon";
import StarIcon from "./DashboardIcons/StarIcon";
import Button from "./Button";

const AddAdminForm = ({ closeModal, openModal }: ModalState) => {
  return (
    <div
      className={`w-full  h-full custom-bg-rgba md:absolute xl:fixed top-0 left-0 bottom-0 right-0 flex justify-center z-50 ${
        openModal ? "block" : "hidden"
      }`}
      onClick={closeModal}
    >
      <div
        className=" absolute xl:fixed  bg-white custom-rounded  w-full md:max-w-[700px] z-20 p-[30px] shadow-sm top-[88px] xl:top-[10rem]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="font-semibold mb-3">
          Add Admin
          <span className="font-[400] text-[14px] block mt-1">
            Enter details to create admin
          </span>
        </div>

        <form
          action="
      "
          className="flex flex-col gap-4"
        >
          <label className="" htmlFor="adminName">
            Full Name <span className="text-red-400">*</span>
            <TextInput placeholder="Enter Admin Name" />
          </label>
          <label className="" htmlFor="adminName">
            Email Address <span className="text-red-400">*</span>
            <TextInput placeholder="Enter Admin Name" />
          </label>
          <label className="" htmlFor="adminName">
            Mobile Number <span className="text-red-400">*</span>
            <TextInput placeholder="Enter Admin Name" />
          </label>
          <label className="" htmlFor="adminName">
            Password <span className="text-red-400">*</span>
            <TextInput placeholder="Enter Admin Name" />
          </label>

          <div className="bg-[#DDDFE1] border border-[#E6E9EC] h-[50px] px-[25px] py-[10px] flex items-center rounded-[10px]">
            <CrownIcon />
            <div className="ml-4">
              <p className="text-[14px] text-[#525F6C] font-semibold">
                Super Admin
              </p>
              <p className="text-[#B1BAC3] text-[14px] font-[400]">
                Grant Complete Access
              </p>
            </div>
          </div>
          <div className="bg-white border border-[#4EBA6F] h-[50px] px-[25px] py-[10px] flex items-center rounded-[10px]">
            <StarIcon />
            <div className="ml-4">
              <p className="text-[14px] text-[#4EBA6F] font-semibold">
                Sub Admin
              </p>
              <p className="text-[#4EBA6F]  text-[14px] font-[400]">
                Limited Access with customizable permission
              </p>
            </div>
          </div>
          <div className="flex  md:justify-end">
            <Button
              className="text-white w-full md:w-[163px] h-[55px]"
              type={"submit"}
              label="Add"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAdminForm;
