import {
  recentAdsColumnData,
  recentAdsData,
  recentAdsType,
} from "@/ApiServices/recenTAdsData";
import Button from "@/components/Button";
import DeleteIcon from "@/components/DashboardIcons/DeleteIcon";
import EditIcon from "@/components/DashboardIcons/EditIcon";
import Pagination from "@/components/Pagination";
import Table from "@/components/tables/Table";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import UploadDropZone from "@/components/UploadDropZone";
import { useState } from "react";

const AdsManager = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 14;
  const totalPages = Math.ceil(recentAdsData.length / itemsPerPage);

  // Paginate filtered data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = recentAdsData.slice(startIndex, endIndex);

  // Checking total page navigation
  const totalItems = recentAdsData.length;
  // const startItem = startIndex + 1;
  const endItem = Math.min(startIndex + itemsPerPage, totalItems);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  // Recent Ads JSX
  const renderRecentAdsRow = (item: recentAdsType) => {
    return (
      <tr
        key={item.id}
        className="p-2 text-[14px] font-[400] mb-[30px]  border-b border-[#E6E9EC] "
      >
        <td className="w-[30px]">
          <input className="size-5" type="checkbox" name="" id="" />
        </td>
        <td className="md:w-[170px] mr-3">
          <div className=" flex items-center gap-[5px] w-[100px]">
            <img
              src={item.img}
              alt="avatar"
              className="h-[60px] size-[70px] rounded-[15px]"
            />
            <span className="text-wrap ml-3 ">{item.header}</span>
          </div>
        </td>
        <td className="text-wrap xl:text-nowrap ">{item.ads_type}</td>

        <td className=" md:mr-[30px]  md:text-wrap xl:text-nowrap">
          {item.description}
        </td>
        <td className="">{item.date_posted}</td>

        <td className=" flex items-center justify-start gap-[30px] mt-4 md:w-[120px] ">
          {/* edit */}
          <button className="bg-transparent border-none ">
            <EditIcon />
          </button>
          <button className="bg-transparent border-none size-[18px] ">
            <DeleteIcon />
          </button>
        </td>
      </tr>
    );
  };
  return (
    <div className="">
      <div className="bg-white custom-rounded p-[40px]">
        <div className=" flex flex-wrap md:flex-nowrap gap-[30px] justify-center  ">
          <div className="w-full flex border border-[rgb(230,233,236)] custom-rounded justify-center items-center">
            <UploadDropZone className={" border-0"} />
          </div>
          <div className=" flex flex-col border border-[#E6E9EC] custom-rounded gap-4 w-full p-[20px] ">
            <h2 className="mb-2 font-[600] text-[18px] text-[#333333]">
              Ad Information
            </h2>
            <div className="flex flex-col gap-5">
              <div className="">
                <label className="font-[600] mb-3 " htmlFor="header">
                  Header
                </label>
                <input
                  className="border border-[#E6E9EC] outline-none block w-full  h-[48px] rounded-[7px] py-[10px] px-[20px]  placeholder-[#333333]"
                  type="text"
                  name=""
                  id="header"
                  placeholder="Mother's Day"
                />
              </div>
              <div>
                <label className="font-[600] " htmlFor="ads_type">
                  Ads Type
                </label>
                <select
                  className="border border-[#E6E9EC] outline-none block w-full  h-[48px] rounded-[7px] py-[10px] px-[20px] placeholder-[#333333]"
                  name=""
                  id="ads_type"
                >
                  <option defaultValue={""} value="Special Event / Celebration">
                    Special Event / Celebration
                  </option>
                  <option value="Special Promo/ Challenge">
                    Special Promo/ Challenge
                  </option>
                </select>
              </div>
              <div>
                <label className="font-[600] " htmlFor="description">
                  Description
                </label>
                <textarea
                  className="border border-[#E6E9EC] outline-none block w-full placeholder-[#333333] rounded-[7px] px-[20px] py-[10px] h-[84px]"
                  name=""
                  id="description"
                  cols={30}
                  placeholder="Description of intended ads"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <Button
            label={"Submit"}
            className={
              "text-white items-center justify-center h-[55px]  px-[50px] w-full md:w-[168px] text-[18px] font-[600] "
            }
          />
        </div>
      </div>
      <ScrollArea className="w-full h-fit whitespace-nowrap custom-rounded border mt-[30px]  shadow-none border-none backdrop-blur-[0]">
        <div className="bg-white p-[40px] custom-rounded  overflow-x-scroll md:overflow-x-auto">
          <h2 className="font-[700] text-[20px]">Recent Ads</h2>
          <Table
            renderRow={renderRecentAdsRow}
            data={paginatedData}
            columns={recentAdsColumnData}
          />

          <div className="">
            <Pagination
              endItem={endItem}
              totalItems={totalItems}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
              totalPages={totalPages}
            />
          </div>
        </div>

        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default AdsManager;
