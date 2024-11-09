import {
  dispatchersColumnData,
  dispatchersData,
  DispatchersRowProps,
  dispatchRiderCardData,
} from "@/ApiServices/dispatchRiderData";
import { recentDeliveryData } from "@/ApiServices/recentDeliveryData";

import BarChartComponent from "@/components/Barchart";

import DotsIcon from "@/components/DashboardIcons/DotsIcon";
import Pagination from "@/components/Pagination";
import RecentDelivery from "@/components/RecentDelivery";
import TableFilter from "@/components/TableFilter";
import DispatchCardsTable from "@/components/tables/DispatchCardsTable";
import Table from "@/components/tables/Table";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import Widgets from "@/components/Widgets";

import { useState } from "react";

const DispatchRiders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  // Filter data based on both status and search term
  const filteredData = dispatchersData.filter((customer: any) => {
    const matchesSearchTerm =
      searchTerm === "" ||
      customer.customer_name?.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesSearchTerm;
  });

  // search bar function to filter table info
  const handleTableFilter = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const itemsPerPage = 7;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Paginate filtered data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  // Checking total page navigation
  const totalItems = filteredData.length;

  const endItem = Math.min(startIndex + itemsPerPage, totalItems);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  const renderDispatchersRow = (item: DispatchersRowProps) => {
    return (
      <tr key={item.id} className=" text-[14px] font-[400] mt=[10px]">
        <td>{item.id}</td>
        <td className="">
          <div className=" flex items-center gap-[5px] max-w-[100px]">
            <img src={item.img} alt="avatar" className="size-8" />
            <span className="text-nowrap">{item.dispatcher_name}</span>
          </div>
        </td>
        <td className=" hidden lg:block">{item.email}</td>
        <td className="ml-1">{item.phone}</td>

        <td className="">{item.dispatcher_type}</td>
        <td className="">{item.orders}</td>

        <td className="">
          {/* edit */}
          <button className="bg-transparent border-none ">
            <DotsIcon />
          </button>
        </td>
      </tr>
    );
  };
  return (
    <div>
      <div className="customer-grid">
        <Widgets total={82} detail={"total Number Of dispatchers"} />
        <Widgets total={1002} detail={"total deliveries made"} />
        <Widgets total={2} detail={"failed deliveries"} />
        <Widgets total={0} detail={"suspended  dispatcher"} />
      </div>

      <DispatchCardsTable data={dispatchRiderCardData} tableTitle={"Vendor"} />

      <BarChartComponent />
      <ScrollArea className="w-full  h-fit whitespace-nowrap custom-rounded border mt-[30px]  shadow-none border-none backdrop-blur-[0]">
        <div className="bg-white p-[40px] custom-rounded  overflow-x-scroll md:overflow-x-auto  ">
          {/* DISPATCHER TABLE */}
          <div className="flex justify-between gap-[20px] flex-col md:flex-row">
            <h2 className="font-[700] text-[20px]">Dispatchers</h2>
            <TableFilter handleFilter={handleTableFilter} />
          </div>
          <Table
            data={paginatedData}
            renderRow={renderDispatchersRow}
            columns={dispatchersColumnData}
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
      <RecentDelivery data={recentDeliveryData} />
    </div>
  );
};

export default DispatchRiders;
