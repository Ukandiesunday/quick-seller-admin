import { IoMdCheckmark } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaPlayCircle } from "react-icons/fa";
import Button from "../Button";
import IdCard from "../DashboardIcons/IdCard";
import { useState } from "react";
import Pagination from "../Pagination";
import TableFilter from "../TableFilter";
import Video from "../Video";
import PendingProducts from "../PendingProducts";

const VendorCardsTable = ({ data, tableTitle }: any) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [buttonTap, setButtonTaps] = useState(1);
  const [status, setStatus] = useState("");
  const [openVideo, setOpenVideo] = useState(false);
  const [openPending, setOpenPending] = useState(false);

  const toggleVideo = () => {
    setOpenVideo((prev) => !prev);
  };
  const togglePending = () => {
    setOpenPending((prev) => !prev);
  };
  // Filter data based on both status and search term
  const filteredData = data.filter((vendor: any) => {
    const matchesStatus =
      status === "" || vendor.status?.toLowerCase() === status.toLowerCase();

    const matchesSearchTerm =
      searchTerm === "" ||
      vendor.name?.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesStatus && matchesSearchTerm;
  });

  // search bar function to filter table info
  const handleTableFilter = (e: any) => {
    setSearchTerm(e.target.value);
    if (status !== "") {
      setStatus(""); //reset clicked status when filtering with search term
    }
  };

  // change button taps
  const setButton = (e: any, tap: number) => {
    setButtonTaps(tap);
    setStatus(e.target.dataset.value);
    setSearchTerm(""); //reset search term when filtering with status
  };

  const itemsPerPage = 4;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Paginate filtered data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Checking total page navigation
  const totalItems = data.length;
  // const startItem = startIndex + 1;
  const endItem = Math.min(startIndex + itemsPerPage, totalItems);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  const buttonItems = [
    { id: 1, status: "", label: "New" },
    { id: 2, status: "Approved", label: "Approved" },
    { id: 3, status: "Declined", label: "Declined" },
  ];

  return (
    <div className="bg-white  p-[20px] md:p-[30px] custom-rounded">
      <h2 className="text-[21px] p-4 font-[600] text-[#333333] mb-2">
        {tableTitle}
      </h2>
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-[20px] w-full">
        {/* Vendor status button taps */}
        <div className="flex gap-[20px]">
          {buttonItems.map((item: any) => (
            <Button
              key={item.id}
              label={item.label}
              value={item.status}
              onClick={(e) => setButton(e, item.id)}
              className={`${
                item.id === buttonTap
                  ? "bg-[#4EBA6F]"
                  : "bg-[#E6E9EC] text-gray-400"
              }`}
            />
          ))}
        </div>

        {/* table filter */}
        <div className="">
          <TableFilter handleFilter={handleTableFilter} />
        </div>
      </div>
      <div className="grid grid-cols-1  sm:grid-cols-2 gap-[30px] xl:grid-cols-2 xxl:grid-cols-2 mt-[20px] md:w-full justify-between">
        {paginatedData.map((vendor: any) => (
          <div
            key={vendor.id}
            className="bg-white w-full custom-border p-[20px] custom-rounded"
          >
            <div className="flex justify-between items-center mb-[20px]">
              <div>{vendor.serial}</div>
              <span
                className={`px-[40px] py-[10px] rounded-[6px] h-[38px] flex items-center  ${
                  vendor.status === "regular"
                    ? "bg-[#E4F5E9]  text-[#4EBA6F] border-[#4EBA6F] border-[1px]"
                    : "text-[#FCA617] bg-[#FFF6E8] border-[#FCA617] border-[1px]"
                }`}
              >
                {vendor.status}
              </span>
            </div>
            <hr />
            {/* ssse */}
            <div className="flex flex-col items-center lg:flex-row md:justify-between gap-4 mt-[20px]">
              <div className="flex flex-col gap-4 ">
                <div className="flex gap-2">
                  <img className="size-[35px]" src={vendor.img} alt="avatar" />
                  <div className="flex flex-col gap-[3px]">
                    <span className="font-[400] text-[12px]">Vendor Name</span>
                    <button
                      onClick={togglePending}
                      className="text-[14px] font-[600]"
                    >
                      {vendor.name}
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-[3px]">
                  <span className="font-[400] text-[12px]">Phone Number</span>
                  <span className="text-[14px] font-[600]">{vendor.phone}</span>
                </div>

                <div>
                  <div
                    onClick={toggleVideo}
                    className="flex mb-2 gap-4 items-center bg-[rgb(230,233,236)] border-[#B1BAC3] border[1px] py-[8px] px-[16px] rounded-[10px] h-[54px] text-[14px] w-full md:w-[163px] cursor-pointer"
                  >
                    <FaPlayCircle className="size-[18px]" />
                    <span>
                      <span className="bloc">My_shop.mp4</span>
                      <span className="block">52.5 MB</span>
                    </span>
                  </div>

                  <label
                    className="flex gap-4 items-center bg-[rgb(230,233,236)] border-[#B1BAC3] border[1px]  py-[8px] px-[16px] rounded-[10px] h-[54px] text-[14px]  w-full md:w-[198px] cursor-pointer"
                    htmlFor="frontId"
                  >
                    <IdCard />
                    <input hidden type="file" name="" id="frontId" />
                    <span>
                      <span className="block">Id_Card(front).png</span>
                      <span className="block">1.5 MB</span>
                    </span>
                  </label>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-[3px]">
                  <span className="font-[400] text-[12px]">
                    Date Registered
                  </span>
                  <span className="text-[14px] font-[600]">{vendor.date}</span>
                </div>
                <div className="flex flex-col gap-[3px]">
                  <span className="font-[400] text-[12px]">Email Address</span>
                  <span className="text-[14px] font-[600]">{vendor.email}</span>
                </div>
                <div className="flex flex-col gap-[3px]">
                  <span className="font-[400] text-[12px]">Category</span>
                  <span className="text-[14px] font-[600]">
                    {vendor.category}
                  </span>
                </div>
                <div className="w-full">
                  <label
                    className="flex gap-4 items-center bg-[rgb(230,233,236)] border-[#B1BAC3] border[1px]  py-[8px] px-[16px] rounded-[10px] h-[54px] text-[14px] w-full md:max-w-[198px]"
                    htmlFor="backId"
                  >
                    <IdCard />
                    <input hidden type="file" name="" id="backId" />
                    <span>
                      <span className="block">Id_Card(back).png</span>
                      <span className="block">1.5 MB</span>
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <hr className="my-3" />
            {/* seee */}
            <div className="flex flex-col items-center lg:flex-row justify-between">
              <div className="flex flex-col justify-between">
                <div className="flex gap-2">
                  <img
                    className="size-[35px]"
                    src={vendor.shop_avatar}
                    alt="avatar"
                  />
                  <div className="flex flex-col gap-[3px]">
                    <span className="font-[400] text-[12px]">Shop Name</span>
                    <span className="text-[14px] font-[600]">
                      {vendor.shop}
                    </span>
                  </div>
                </div>
                <div className="flex w-full flex-col md:flex-row gap-[20px]">
                  <Button
                    icon={<IoClose className="size-[20px]" />}
                    label={"Decline"}
                    className={
                      "px-[40px] py-[10px] gap-[20px] bg-white text-black border-[#B1BAC3] border-[1px] w-full md:max-w-[200px] font-[600] h-[50px]"
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-[3px] mb-3">
                  <span className="font-[400] text-[12px] mt-3">
                    Shop Location
                  </span>
                  <span className="text-[14px] max-w-[200px] font-[600]">
                    {vendor.location}
                  </span>
                </div>
                <div className="w-full">
                  <Button
                    icon={<IoMdCheckmark className="size-[20px]" />}
                    label={"Approved"}
                    className={
                      "px-[30px] py-[16px] gap-[20px] bg-[#4EBA6F] text-white border-[#4EBA6F] border-[1px] font-[600] w-full md:w-[200px] h-[50px] "
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Vendor pagination */}
      <Pagination
        endItem={endItem}
        totalItems={totalItems}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        totalPages={totalPages}
      />

      {openPending && <PendingProducts togglePending={togglePending} />}
      {openVideo && <Video toggleVideo={toggleVideo} />}
    </div>
  );
};

export default VendorCardsTable;
