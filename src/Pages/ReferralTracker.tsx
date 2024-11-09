import {
  referralTrackerColumns,
  referralTrackerData,
  referralTrackerType,
} from "@/ApiServices/referalTracker";
import ExternalLinkIcon from "@/components/DashboardIcons/ExternalLinkIcon";
import Pagination from "@/components/Pagination";

import Table from "@/components/tables/Table";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useState } from "react";

const ReferralTracker = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 11;
  const totalPages = Math.ceil(referralTrackerData.length / itemsPerPage);

  // Paginate filtered data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = referralTrackerData.slice(startIndex, endIndex);

  // Checking total page navigation
  const totalItems = referralTrackerData.length;
  // const startItem = startIndex + 1;
  const endItem = Math.min(startIndex + itemsPerPage, totalItems);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };
  // Referral tracker row  JSX
  const renderReferralTrackerRow = (item: referralTrackerType) => {
    return (
      <tr
        key={item.id}
        className="p-2 text-[14px] font-[400] mb-[60px]  border-b border-[#E6E9EC] text-cell"
      >
        <td className="">{item.customer_name}</td>
        <td className="">{item.customer_type}</td>
        <td className="">{item.referral_id}</td>
        <td className="">{item.visits}</td>
        <td>{item.amount}</td>
        <td>
          <div className="flex items-center gap-3 border border-[#E6E6E6] justify-center py-2  rounded-[7px] w-fit px-3">
            <span>{item.referral_link}</span>
            <ExternalLinkIcon />
          </div>
        </td>
      </tr>
    );
  };
  return (
    <ScrollArea className="w-full  h-fit whitespace-nowrap custom-rounded border   shadow-none border-none backdrop-blur-[0]">
      <div className="bg-white p-[40px] custom-rounded  overflow-x-scroll md:overflow-x-auto  ">
        <h2 className="font-[700] text-[20px] mb-3">Referral Tracker</h2>

        <Table
          renderRow={renderReferralTrackerRow}
          data={paginatedData}
          columns={referralTrackerColumns}
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

export default ReferralTracker;
