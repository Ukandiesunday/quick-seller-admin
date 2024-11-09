import Button from "@/components/Button";
import singleVendor1 from "../assets/Images/categoryImg/premiumuser1.png";
import singleVendor2 from "../assets/Images/categoryImg/premiumuser1.png";
import { useState } from "react";

const SingleVendor = () => {
  const [tap, setTaps] = useState(1);

  return (
    <div className="">
      <div className="w-full h-fit bg-white custom-rounded flex justify-between p-[70px] gap-5 flex-col md:flex-row md:items-center ">
        <div className="w-full  md:size-[100px] mb-5 md:mb-0">
          <img className="" src={singleVendor1} alt="" />
        </div>
        <ul className="flex flex-col gap-5">
          <li>
            <span className="font-[700] space-x-1">Name</span> : Eni-Ofem Esther
            Ubi
          </li>
          <li>
            <span className="font-[700] space-x-1">Email :</span>{" "}
            estherubi@gmail.com
          </li>

          <li>
            <span className="font-[700] space-x-1 ">Phone Number : </span>{" "}
            07069682025
          </li>

          <li>
            <span className="font-[700] space-x-1 "> Address : </span>
            Badagry-Eko Paliamentary Hotel, Victoria Island, Lagos
          </li>
        </ul>
        <div className="flex flex-col gap-5">
          <div>Registered: December, 17th 2023</div>
          <div> Latest Activity: April, 14th 2024</div>
          <div className="flex gap-2 items-center">
            <span>Verified:</span>
            <select
              className="border border-[#E6E9EC] px-[16px] py-[5px] ml-3 h-[40px] outline-none rounded-[6px] w-full max-w-[200px]"
              name=""
              id=""
            >
              <option defaultValue="">Yes</option>
              <option value="">No</option>
            </select>
          </div>
          <div className="flex gap-2 items-center">
            <span className="">Status:</span>
            <select
              name=""
              id=""
              className="border border-[#E6E9EC] px-[16px] py-[5px] ml-5 h-[40px] outline-none rounded-[6px] w-full max-w-[200px]"
            >
              <option defaultValue="">Active</option>
              <option value="">Inactive</option>
              <option value="">Suspended</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white mt-[30px] py-[40px] px-[60px] custom-rounded">
        <div className="flex justify-between gap-4">
          <div className="flex gap-4 items-center">
            <div className=" w-full md:size-[100px] ">
              <img src={singleVendor2} alt="premium user" />
            </div>
            <div>
              <p className="font-[600] mb-1">Farmers Store</p>
              <p>farmerstore@gmail.com</p>
            </div>
          </div>

          <Button
            label={"Preview Shop"}
            className="px-[70px] h-[70px] py-3 text-white font-[600]"
          />
        </div>

        <div className="mt-[20px]">
          <div className="flex gap-[100px] py-[35px] ">
            <button
              onClick={() => setTaps(1)}
              className={` bg-transparent pb-3 text-nowrap text-[18px] font-[600]${
                tap === 1
                  ? " border-b-green-400 border-b-[3px] text-green-400"
                  : ""
              }`}
            >
              Shop Details
            </button>
            <button
              onClick={() => setTaps(2)}
              className={` bg-transparent pb-3 text-nowrap text-[18px] font-[600]${
                tap === 2
                  ? " border-b-green-400 border-b-[3px] text-green-400"
                  : ""
              }`}
            >
              Employee Details
            </button>
          </div>
          <hr />

          <div
            className={`flex flex-col md:flex-row justify-between mt-6 ${
              tap === 1 ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col gap-5">
              <li>
                <span className="font-[700] space-x-1">Shop Name</span> :
                Farmers Store
              </li>
              <li>
                <span className="font-[700] space-x-1">Phone No. :</span> +234
                7069682025
              </li>

              <li>
                <span className="font-[700] space-x-1">Shop City : </span> Lagos
              </li>

              <li>
                <span className="font-[700] space-x-1 "> Shop Id : </span>
                Farmers Store
              </li>
            </ul>

            <ul className="flex flex-col gap-5">
              <li>
                <span className="font-[700] space-x-1">Shop Email</span> :
                farmerstore@gmail.com
              </li>
              <li>
                <span className="font-[700] space-x-1">Shop Address. :</span>
                Badagry-Eko Parliamentary Hotel, Victoria Island, Lagos
              </li>

              <li>
                <span className="font-[700] space-x-1">Shop State : </span>{" "}
                Lagos
              </li>

              <li>
                <span className="font-[700] space-x-1 "> Shop Type : </span>
                Food
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleVendor;
