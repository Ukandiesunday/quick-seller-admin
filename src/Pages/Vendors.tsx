import {
  productColumnData,
  productData,
  ProductDataType,
} from "@/ApiServices/VendorproductData";
import { vendorCardData } from "@/ApiServices/vendorCardData";
import {
  vendorColumnData,
  vendorTableData,
  VendorTableType,
} from "@/ApiServices/vendorTableData";
import DotsIcon from "@/components/DashboardIcons/DotsIcon";
import EditIcon from "@/components/DashboardIcons/EditIcon";
import FilterIcon from "@/components/DashboardIcons/FilterIcon";
import Rating from "@/components/DashboardIcons/Rating";

import Table from "@/components/tables/Table";
import {
  productButtons,
  vendorButtonItems,
} from "@/components/tables/tableButtonItems";
import { useNavigate } from "react-router-dom";
import VendorCardsTable from "@/components/tables/VendorCardsTable";

import Button from "@/components/Button";
import { useState } from "react";
import TableFilter from "@/components/TableFilter";
import Pagination from "@/components/Pagination";

const Vendors = () => {
  const [buttonTap, setButtonTaps] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  // Filter vendor data based on both status and search term
  const filteredVendorData = vendorTableData.filter((vendor: any) => {
    const matchesStatus =
      status === "" || vendor.status?.toLowerCase() === status.toLowerCase();

    const matchesSearchTerm =
      searchTerm === "" ||
      vendor.vendor_name?.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesStatus && matchesSearchTerm;
  });

  // Filter Product data based on both status and search term
  const filteredProductData = productData.filter((product: any) => {
    const matchesStatus =
      status === "" || product.status?.toLowerCase() === status.toLowerCase();

    const matchesSearchTerm =
      searchTerm === "" ||
      product.product_name?.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesStatus && matchesSearchTerm;
  });

  // change button taps
  const setButton = (e: any, tap: number) => {
    setButtonTaps(tap);
    setStatus(e.target.dataset.value);
    setSearchTerm(""); //reset search term when filtering with status
  };

  // search bar function to filter table info
  const handleTableFilter = (e: any) => {
    setSearchTerm(e.target.value);
    if (status !== "") {
      setStatus(""); //reset status when filtering with search term
    }
  };

  // PRODUCT TABLE PAGINATION ITEMS
  const itemsPerPage = 7;
  const totalPages = Math.ceil(productData.length / itemsPerPage);

  // Paginate filtered data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = filteredProductData.slice(startIndex, endIndex);

  // Checking total page navigation
  const totalItems = productData.length;
  // const startItem = startIndex + 1;
  const endItem = Math.min(startIndex + itemsPerPage, totalItems);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  // SINGLE JSX TABLE ROW FOR VENDOR
  const renderVendorRow = (item: VendorTableType) => {
    return (
      <tr
        onClick={() => navigate(`/customers/vendors/${item.id}`)}
        key={item.id}
        className="p-2 text-[12px] sm:text-[14px] font-[400] mb-[30px] cursor-pointer "
      >
        <td className="">{item.id}</td>
        <td className="pr-[40px] sm:pr-1">
          <div className=" flex items-center gap-[5px] max-w-[100px]">
            <img src={item.img} alt="avatar" className="size-8" />
            <span className="text-nowrap">{item.vendor_name}</span>
          </div>
        </td>
        <td className=" hidden xl:block">{item.email}</td>

        <td className=" md:mr-[30px] ">{item.phone}</td>
        <td className="">{item.vendor_type}</td>
        <td className="pr-[50px] sm:pr-1">{item.product_number}</td>
        <td className="">
          <button className="bg-transparent border-none ">
            <EditIcon />
          </button>
        </td>
      </tr>
    );
  };

  //  SINGLE JSX TABLE ROW FOR PRODUCT
  const renderProductRow = (item: ProductDataType) => {
    return (
      <tr
        key={item.id}
        className="p-3 text-[12px] sm:text-[14px] font-[400] mt=[10px] border-b border-gray-300"
      >
        <td className="w-[45px]">
          <input type="checkbox" name="" id="" className=" size-[22px] mt-3" />
        </td>
        <td className="">
          <div className=" flex items-center gap-[5px] max-w-[120px] ">
            <img
              src={item.img}
              alt="avatar"
              className=" block  mt-2 mb-1 size-[40px] sm:size-[60px] rounded-[15px]"
            />

            <span className=" text-wrap  md:text-nowrap pl-5">
              {item.product_name}
            </span>
          </div>
        </td>
        <td className="  pl-4">{item.price}</td>

        <td className=" md:mr-[30px]">
          <div className="flex items-center gap-2">
            <Rating />
            {item.rating}
          </div>
        </td>
        <td className="">{item.date_added}</td>

        <td className="">
          {/* edit */}
          <button className="bg-transparent border-none ">
            <DotsIcon />
          </button>
        </td>
        {/* <hr /> */}
      </tr>
    );
  };

  return (
    <div className="  ">
      <div>
        <VendorCardsTable data={vendorCardData} tableTitle={"Vendor"} />
      </div>
      {/* VENDOR TABLE  */}
      <div className="max-w-[370px] sm:max-w-[500px] md:max-w-full overflow-x-scroll md:overflow-x-autos h-fit whitespace-nowrap custom-rounded border mt-[30px] shadow-none border-none backdrop-blur-[0]">
        <div className="bg-white p-[40px] custom-rounded  overflow-x-scroll">
          <div>
            <h2 className="font-[700]  text-[20px]">Vendor</h2>
            <div className="flex flex-col gap-[20px] md:gap-[0px] md:flex-row justify-between mt-[30px] items-center ">
              <div className="flex gap-[20px] md:pr-4 pl-[120px] sm:pl-1 ">
                {vendorButtonItems.map((item: any) => (
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
              <div className="flex items-center space-x-2  ">
                <TableFilter handleFilter={handleTableFilter} />
                <FilterIcon />
              </div>
            </div>
          </div>
          {/* TABLE */}
          <Table
            columns={vendorColumnData}
            renderRow={renderVendorRow}
            data={filteredVendorData}
          />

          <Pagination
            endItem={endItem}
            totalItems={totalItems}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            totalPages={totalPages}
          />
        </div>
      </div>

      {/* PRODUCT TABLE */}
      <div className="bg-white max-w-[370px] sm:max-w-[500px] md:max-w-full md:overflow-x-autos w-full overflow-x-scroll h-fit whitespace-nowrap custom-rounded border mt-[30px]  shadow-none border-none backdrop-blur-[0] p-[40px]">
        <div className="">
          <div>
            <h2 className="font-[700] text-[20px]">Product</h2>

            <div className="flex flex-col gap-[20px] md:gap-[0px] md:flex-row justify-between  mt-[30px] items-center ">
              <div className="flex gap-[20px]  md:pr-4 ">
                {productButtons.map((item: any) => (
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
              <div className=" ">
                <TableFilter handleFilter={handleTableFilter} />
              </div>
            </div>
          </div>
          {/* TABLE */}

          <Table
            data={paginatedData}
            columns={productColumnData}
            renderRow={renderProductRow}
          />
        </div>

        <Pagination
          endItem={endItem}
          totalItems={totalItems}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          totalPages={totalPages}
        />
        {/* <ScrollBar orientation="horizontal" /> */}
      </div>
    </div>
  );
};

export default Vendors;
