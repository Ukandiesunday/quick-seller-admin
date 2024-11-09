import {
  premiumVendorColumnData,
  premiumVendorData,
} from "@/ApiServices/premuimVendordata";
import { VendorTableType } from "@/ApiServices/vendorTableData";
import EditIcon from "@/components/DashboardIcons/EditIcon";
import Pagination from "@/components/Pagination";
import TableFilter from "@/components/TableFilter";
import Table from "@/components/tables/Table";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { useState } from "react";

const PremiumVendors = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  // search bar function to filter table info
  const handleTableFilter = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const filteredPremiumData = premiumVendorData.filter((premiumVendor) => {
    return (
      searchTerm === "" ||
      premiumVendor?.vendor_name
        .toLowerCase()
        .includes(searchTerm?.toLowerCase())
    );
  });

  const itemsPerPage = 14;
  const totalPages = Math.ceil(filteredPremiumData.length / itemsPerPage);

  // Paginate filtered data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = filteredPremiumData.slice(startIndex, endIndex);

  // Checking total page navigation
  const totalItems = filteredPremiumData.length;

  const endItem = Math.min(startIndex + itemsPerPage, totalItems);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  const renderPremiumVendorRow = (item: VendorTableType) => {
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
        <td className=" hidden xl:block">{item.email}</td>

        <td className=" md:mr-[30px] ">{item.phone}</td>
        <td className="">{item.vendor_type}</td>
        <td>{item.product_number}</td>
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
    <ScrollArea className="w-full  h-fit whitespace-nowrap custom-rounded border  shadow-none border-none backdrop-blur-[0]">
      <div className="bg-white p-[40px] custom-rounded  overflow-x-scroll md:overflow-x-auto">
        <div className="flex justify-between flex-col md:flex-row gap-[20px] mb-3">
          <h2 className="font-[700] text-[20px]">Premium Vendors</h2>
          <TableFilter handleFilter={handleTableFilter} />
        </div>
        <Table
          columns={premiumVendorColumnData}
          renderRow={renderPremiumVendorRow}
          data={paginatedData}
        />
        <Pagination
          endItem={endItem}
          totalItems={totalItems}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          totalPages={totalPages}
        />
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default PremiumVendors;
