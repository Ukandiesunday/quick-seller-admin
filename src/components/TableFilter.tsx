import SearchIcon from "./DashboardIcons/SearchIcon";

const TableFilter = ({ handleFilter }: any) => {
  return (
    <div className="rounded-[10px] w-full flex items-center border gap-[10px] py-[12px] px-[16px]  md:max-w-[400px] h-[48px] ">
      <input
        className="placeholder:text-[#B1BAC3;
] font-[300] outline-none w-full h-full"
        type="text"
        onChange={handleFilter}
        name=""
        id=""
        placeholder="Search..."
      />{" "}
      <SearchIcon />
    </div>
  );
};

export default TableFilter;
