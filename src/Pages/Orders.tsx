import {
  ordersColumnData,
  ordersData,
  OrdersDataType,
} from "@/ApiServices/ordersData";
import Button from "@/components/Button";
import DotsIcon from "@/components/DashboardIcons/DotsIcon";
import Pagination from "@/components/Pagination";
import TableFilter from "@/components/TableFilter";
import Table from "@/components/tables/Table";
import { ordersButtonsItems } from "@/components/tables/tableButtonItems";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Widgets from "@/components/Widgets";
import { useState } from "react";

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [buttonTap, setButtonTaps] = useState(1);
  const [status, setStatus] = useState("");

  // Filter data based on both status and search term
  const filteredData = ordersData.filter((order: any) => {
    const matchesStatus =
      status === "" || order.status?.toLowerCase() === status.toLowerCase();

    const matchesSearchTerm =
      searchTerm === "" ||
      order.customer?.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesStatus && matchesSearchTerm;
  });

  // search bar function to filter table info
  const handleTableFilter = (e: any) => {
    setSearchTerm(e.target.value);
    if (status !== "") {
      setStatus(""); //reset status when filtering with search term
    }
  };

  const itemsPerPage = 9;
  const totalPages = Math.ceil(ordersData.length / itemsPerPage);

  // Paginate filtered data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  // Checking total page navigation
  const totalItems = ordersData.length;
  // const startItem = startIndex + 1;
  const endItem = Math.min(startIndex + itemsPerPage, totalItems);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  // change button taps
  const setButton = (e: any, tap: number) => {
    setButtonTaps(tap);
    setStatus(e.target.dataset.value);
    setSearchTerm(""); //reset search term when filtering with status
  };

  const renderOrdersRow = (item: OrdersDataType) => {
    return (
      <tr
        key={item.id}
        className=" text-[14px]  font-[400] border-b border-gray-300"
      >
        <td className="w-[45px]">
          <input
            type="checkbox"
            name=""
            id=""
            className="size-[24px] rounded "
          />
        </td>
        <td className="">
          <div className=" flex items-center gap-[5px] max-w-[120px]">
            <img
              src={item.img}
              alt="avatar"
              className=" size-[40px] md:size-[60px]  mt-2 mb-1 rounded-[15px]"
            />
            <div className="pl-5 space-y-3">
              <span className="text-wrap xl:text-nowrap pt-3 ">
                {item.product_name}
              </span>
              <p>{item.batch_number}</p>
            </div>
          </div>
        </td>
        <td className="">{item.customer}</td>
        <td className="">{item.price}</td>
        <td className="">{item.qty}</td>
        <td className="">{item.date}</td>
        <td>
          <button
            className={`h-[35px] max-w-[86px] py-3 px-5 rounded-[6px] flex  items-center ${
              item.status === "shipped"
                ? "text-[#4EBA6F] bg-[#E4F5E9]"
                : item.status === "pending"
                ? "text-[#FCA617] bg-[#FFF6E8]"
                : item.status === "canceled"
                ? "text-[#F23131] bg-[#FEEAEA]"
                : "text-[#4EBA6F] bg-[#E4F5E9]"
            }`}
          >
            {item.status}
          </button>
        </td>

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
        <Widgets total={102} detail={"Total Customers"} />
        <Widgets total={100} detail={"Active Customers"} />
        <Widgets total={2} detail={"Inactive Customers"} />
        <Widgets total={0} detail={"Suspended Customers"} />
      </div>
      <ScrollArea className=" w-full  h-fit whitespace-nowrap custom-rounded border mt-[30px]  shadow-none border-none backdrop-blur-[0]   ">
        {/* Customer widgets */}

        <div className="bg-white p-[40px] custom-rounded  overflow-x-scroll md:overflow-x-auto">
          <div>
            <h2 className="font-[700] text-[20px]">Orders</h2>
            <div className="flex flex-col justify-between md:flex-row mb-4 gap-[20px]">
              <div className="flex space-x-5 mt-4">
                <input
                  className="border-gray-300 border-[1px] max-w-[130px] h-[48px] rounded-[10px] py-3 px-4 outline-none"
                  type="date"
                  name=""
                  id=""
                  placeholder="Monthly"
                />
                <div className="border-gray-300 border-[1px]  max-w-[130px] h-[48px] rounded-[10px] px-3 py-3">
                  <select className=" outline-none w-full h-full" name="" id="">
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="suspended">Suspended</option>
                  </select>
                </div>
              </div>

              <TableFilter handleFilter={handleTableFilter} />
            </div>
            <div className="flex flex-col gap-[20px] md:gap-[0px] md:flex-row justify-between mt-[30px] items-center ">
              <div className="flex gap-[20px] md:pr-4">
                {ordersButtonsItems.map((item: any) => (
                  <Button
                    key={item.id}
                    label={item.label}
                    value={item.status}
                    onClick={(e: any) => setButton(e, item.id)}
                    className={`${
                      item.id === buttonTap
                        ? "text-white bg-[#4EBA6F] "
                        : "bg-[#E6E9EC] text-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* TABLE */}
          <Table
            columns={ordersColumnData}
            renderRow={renderOrdersRow}
            data={paginatedData}
          />

          {/* PAGINATION */}

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
    </div>
  );
};

export default Orders;
