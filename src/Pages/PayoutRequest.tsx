import {
  payoutRequestcolumnData,
  payoutRequestData,
  PayoutRequestType,
} from "@/ApiServices/payoutRequestData";
import Pagination from "@/components/Pagination";

import Table from "@/components/tables/Table";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useState } from "react";

const PayoutRequest = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 11;
  const totalPages = Math.ceil(payoutRequestData.length / itemsPerPage);

  // Paginate filtered data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = payoutRequestData.slice(startIndex, endIndex);

  // Checking total page navigation
  const totalItems = payoutRequestData.length;
  // const startItem = startIndex + 1;
  const endItem = Math.min(startIndex + itemsPerPage, totalItems);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };
  // PAYOUT REQUEST JSX
  const renderPayoutRequestRow = (item: PayoutRequestType) => {
    return (
      <tr
        key={item.id}
        className="p-2 text-[14px] font-[400] mb-[60px]  border-b border-[#E6E9EC] text-cell"
      >
        <td className="">{item.customer_name}</td>
        <td className="">{item.customer_type}</td>
        <td className="">{item.payout_to}</td>
        <td className="">{item.amount}</td>
        <td>{item.date}</td>
        <td>{item.reference_number}</td>
      </tr>
    );
  };

  return (
    <ScrollArea className=" w-[350px] md:w-full  h-fit whitespace-nowrap custom-rounded border  shadow-none border-none backdrop-blur-[0]">
      <div className="bg-white p-[40px] custom-rounded  overflow-x-scroll md:overflow-x-auto  ">
        <h2 className="font-[700] text-[20px] mb-3">
          Customers Payout Request
        </h2>

        <Table
          renderRow={renderPayoutRequestRow}
          data={paginatedData}
          columns={payoutRequestcolumnData}
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
  );
};

export default PayoutRequest;
