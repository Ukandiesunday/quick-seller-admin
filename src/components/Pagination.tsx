interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  endItem: number;
  handlePageChange: (pageNumber: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  handlePageChange,
  totalItems,
  endItem,
}: PaginationProps) => {
  const pages = [];

  let start = Math.max(1, currentPage - 1); // Show the page before the current page

  let end = Math.min(totalPages, currentPage + 1); // Show the page after the current page

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-between items-center mt-5 mb-1 relative ">
      <div className="">
        Showing {""} {endItem} of {totalItems}
      </div>
      <div className="flex space-x-2 text-[12px] absolute right-[0px] sm:right-[60px] ">
        <button
          className="hidden"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        {pages.map((page, index) => (
          <button
            key={index}
            className={`active:bg-green-500  py-[5px] px-[10px] rounded-[6px]  ${
              page === currentPage ? "bg-green-600 text-white" : ""
            } `}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
        <button
          className="border border-green-700 bg-transparent py-[5px] px-[10px] rounded-[6px] "
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
