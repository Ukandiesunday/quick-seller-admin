import {
  paidPromotionData,
  paidPromotionType,
  promotionColumnData,
} from "@/ApiServices/paidPromationData";
import EditIcon from "@/components/DashboardIcons/EditIcon";
import Pagination from "@/components/Pagination";
import Table from "@/components/tables/Table";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useState } from "react";

const PaidPromotion = () => {
  const [currentPage, setCurrentPage] = useState(1);

  //  PAGINATION ITEMS

  const itemsPerPage = 10;
  const totalPages = Math.ceil(paidPromotionData.length / itemsPerPage);

  // Paginate filtered data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = paidPromotionData.slice(startIndex, endIndex);

  // Checking total page navigation
  const totalItems = paidPromotionData.length;
  // const startItem = startIndex + 1;
  const endItem = Math.min(startIndex + itemsPerPage, totalItems);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  //  SINGLE TABLE ROW JSX FOR PAID PROMOTION

  const renderPaidPromotionRow = (item: paidPromotionType) => {
    return (
      <tr
        key={item.id}
        className="p-2 text-[14px] font-[400] mb-[30px] cursor-pointer "
      >
        <td className="">{item.id}</td>
        <td className="">
          <div className=" flex items-center gap-[5px] max-w-[100px]">
            <img src={item.img} alt="avatar" className="size-8" />
            <span className="text-nowrap ">{item.vendor_name}</span>
          </div>
        </td>
        <td className="">{item.product_name}</td>

        <td className=" md:mr-[30px] ">{item.duration}</td>
        <td className="">{item.amount}</td>

        <td className="">
          {/* edit */}
          <button className="bg-transparent border-none ">
            <EditIcon />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div>
      <ScrollArea className="w-full  h-fit whitespace-nowrap custom-rounded border   shadow-none border-none backdrop-blur-[0]">
        <div className="bg-white p-[40px] custom-rounded  overflow-x-scroll md:overflow-x-auto  ">
          <h2 className="font-[700] text-[20px] mb-3">Paid Promotion</h2>

          <Table
            renderRow={renderPaidPromotionRow}
            data={paginatedData}
            columns={promotionColumnData}
          />

          {/* PAGINATION */}
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

export default PaidPromotion;
