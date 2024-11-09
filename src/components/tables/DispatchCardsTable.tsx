import { IoMdCheckmark } from "react-icons/io";
import { IoClose } from "react-icons/io5";

import { useState } from "react";
import Button from "../Button";
import TableFilter from "../TableFilter";

import Pagination from "../Pagination";
import RiderIdentity from "../DashboardIcons/RiderIdentity";

const DispatchCardsTable = ({ data, tableTitle }: any) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [buttonTap, setButtonTaps] = useState(1);
  const [status, setStatus] = useState("");

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
    <div className="bg-white  p-[30px] custom-rounded mt-[30px]">
      <h2 className="text-[21px] font-[600] text-[#333333] mb-2 ">
        {tableTitle}
      </h2>
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-[20px]">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] xl:grid-cols-2 xxl:grid-cols-2 mt-[20px] md:w-full justify-between h-fit">
        {paginatedData.map((rider: any) => (
          <div
            key={rider.id}
            className="bg-white custom-border p-[20px] custom-rounded h-fit"
          >
            <section className="flex flex-col md:flex-row md:justify-between gap-4 mt-[20px] mb-3">
              <div className="flex flex-col gap-4 ">
                <div className="flex gap-2">
                  <img className="size-[35px]" src={rider.img} alt="avatar" />
                  <div className="flex flex-col gap-[3px]">
                    <span className="font-[400] text-[12px]">Vendor Name</span>
                    <span className="text-[14px] font-[600]">{rider.name}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-[3px]">
                  <span className="font-[400] text-[12px]">Phone Number</span>
                  <span className="text-[14px] font-[600]">{rider.phone}</span>
                </div>
              </div>
              <div className="">
                <div className="flex flex-col gap-[3px]">
                  <span className="font-[400] text-[12px]">
                    Date Registered
                  </span>
                  <span className="text-[14px] font-[600]">{rider.date}</span>
                </div>
                <div className="flex flex-col gap-[3px]">
                  <span className="font-[400] text-[12px]">Email Address</span>
                  <span className="text-[14px] font-[600]">{rider.email}</span>
                </div>
              </div>
            </section>
            <hr />

            <section className="flex flex-col md:flex-row md:justify-between gap-4 mt-[20px] mb-3">
              <div className="flex flex-col gap-4 ">
                <div className="flex flex-col gap-[3px]">
                  <span className="font-[400] text-[12px]">Vehicle Type</span>
                  <span className="text-[14px] font-[600]">
                    {rider.vehicle_type}
                  </span>
                </div>
                <div>
                  <div>
                    <span className="capitalize text-[12px] font-[300]">
                      national identity
                    </span>
                    <label
                      className="flex mb-2 gap-4 items-center bg-[rgb(230,233,236)] border-[#B1BAC3] border[1px] py-[8px] px-[16px] rounded-[10px] h-[54px] text-[14px]"
                      htmlFor="mp4"
                    >
                      <RiderIdentity />
                      <input hidden type="file" name="" id="mp4" />
                      <span>
                        <span className="bloc">drivers_license.png</span>
                        <span className="block">52.5 MB</span>
                      </span>
                    </label>
                  </div>

                  <div>
                    <span className="capitalize text-[12px] font-[300]">
                      vehicle image
                    </span>
                    <label
                      className="flex gap-4 items-center bg-[rgb(230,233,236)] border-[#B1BAC3] border[1px]  py-[8px] px-[16px] rounded-[10px] h-[54px] text-[14px]"
                      htmlFor="frontId"
                    >
                      <RiderIdentity />
                      <input hidden type="file" name="" id="frontId" />
                      <span>
                        <span className="block">my_vehicle.png</span>
                        <span className="block">5.2 MB</span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 ">
                <div className="flex flex-col gap-[3px]">
                  <span className="font-[400] text-[12px]">Vehicle Number</span>
                  <span className="text-[14px] font-[600]">
                    {rider.vehicle_number}
                  </span>
                </div>
                <div>
                  <span className="capitalize text-[12px] font-[300]">
                    Proof of Address
                  </span>
                  <label
                    className="flex gap-4 items-center bg-[rgb(230,233,236)] border-[#B1BAC3] border[1px]  py-[8px] px-[16px] rounded-[10px] h-[54px] text-[14px]"
                    htmlFor="frontId"
                  >
                    <RiderIdentity />
                    <input hidden type="file" name="" id="frontId" />
                    <span>
                      <span className="block">my_address.png</span>
                      <span className="block">5.2 MB</span>
                    </span>
                  </label>
                </div>
              </div>
            </section>
            <hr className="py-4" />

            <section className="flex flex-col md:flex-row  gap-3">
              <div className="flex w-full flex-col md:flex-row gap-[20px]">
                <Button
                  icon={<IoClose className="size-[20px]" />}
                  label={"Decline"}
                  className={
                    "px-[40px] py-[10px] gap-[20px] bg-white text-black border-[#B1BAC3] border-[1px] font-[600] h-[50px]"
                  }
                />
              </div>

              <div className=" h-[50px]">
                <Button
                  icon={<IoMdCheckmark className="size-[20px]" />}
                  label={"Approved"}
                  className={
                    "px-[30px] py-[16px] gap-[20px] bg-[#4EBA6F] text-white border-[#4EBA6F] border-[1px] font-[600]  w-full h-[50px]"
                  }
                />
              </div>
            </section>
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
    </div>
  );
};

export default DispatchCardsTable;
