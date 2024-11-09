import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { useState } from "react";

import { columnData, customersData } from "@/ApiServices/customersdata";
import EditIcon from "@/components/DashboardIcons/EditIcon";
import Table from "@/components/tables/Table";
import Widgets from "@/components/Widgets";
import Button from "@/components/Button";
import TableFilter from "@/components/TableFilter";
import Pagination from "@/components/Pagination";

type CustomerType = {
  id: number;
  email: string;
  img: string;
  wallet_balance: number;
  customer_name: string;
  status: string;
  phone: string;
  date_joined: string;
};
const Customers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [buttonTap, setButtonTaps] = useState(1);
  const [status, setStatus] = useState("");

  // Filter data based on both status and search term
  const filteredData = customersData.filter((customer: any) => {
    const matchesStatus =
      status === "" || customer.status?.toLowerCase() === status.toLowerCase();

    const matchesSearchTerm =
      searchTerm === "" ||
      customer.customer_name?.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesStatus && matchesSearchTerm;
  });

  // search bar function to filter table info
  const handleTableFilter = (e: any) => {
    setSearchTerm(e.target.value);
    if (status !== "") {
      setStatus(""); //reset status when filtering with search term
    }
  };

  const itemsPerPage = 14;
  const totalPages = Math.ceil(customersData.length / itemsPerPage);

  // Paginate filtered data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  // Checking total page navigation
  const totalItems = customersData.length;
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

  const buttonItems = [
    { id: 1, label: "All (0)", status: "" },
    { id: 2, label: "Active", status: "Active" },
    { id: 3, label: "Inactive", status: "Inactive" },
    { id: 4, label: "Suspended", status: "Suspended" },
  ];

  const renderRow = (item: CustomerType) => {
    return (
      <tr key={item.id} className="p-1 text-[14px] font-[400] mt=[10px]">
        <td>{item.id}</td>
        <td className="">
          <div className=" flex items-center gap-[5px] max-w-[100px]">
            <img src={item.img} alt="avatar" className="size-8" />
            <span className="text-nowrap">{item.customer_name}</span>
          </div>
        </td>
        <td className=" hidden lg:block">{item.email}</td>
        <td className="ml-1">{item.wallet_balance}</td>
        <td className=" md:mr-[30px] ">{item.phone}</td>
        <td className="">{item.date_joined}</td>
        <td className={` ${item.status === "Inactive" ? "text-red-500" : ""}`}>
          {item.status}
        </td>
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
      <div className="customer-grid">
        <Widgets total={102} detail="total customers" />
        <Widgets total={100} detail={"active customers"} />
        <Widgets total={2} detail={"   inactive customers"} />
        <Widgets total={0} detail={"suspended customers"} />
      </div>
      <ScrollArea className=" w-[350px] md:w-full  h-fit whitespace-nowrap custom-rounded border mt-[30px]  shadow-none border-none backdrop-blur-[0]">
        {/* Customer widgets */}

        <div className="bg-white p-[40px] custom-rounded  overflow-x-scroll md:overflow-x-auto  ">
          <div>
            <h2 className="font-[700] text-[20px]">Customers</h2>

            <div className="flex flex-col gap-[20px] md:gap-[0px] md:flex-row justify-between mt-[30px] items-center ">
              <div className="flex gap-[20px] md:pr-4">
                {buttonItems.map((item: any) => (
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
              <div className="flex gap-3 justify-between   md:ml-4 ">
                {/* TABLE SEARCH */}
                <div className="ali">
                  {" "}
                  <TableFilter handleFilter={handleTableFilter} />
                </div>
              </div>
            </div>
          </div>
          {/* TABLE */}
          <Table
            columns={columnData}
            renderRow={renderRow}
            data={paginatedData}
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

export default Customers;
