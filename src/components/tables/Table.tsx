const Table = ({ columns, renderRow, data }: any) => {
  // Custom jsx for each table row

  return (
    <div className="">
      <table className="">
        <thead>
          <tr className="text-left  text-[14px] font-[500] ">
            {columns.map((col: any) => (
              <th
                key={col.accessor}
                className={`font-[600] text-[15px] ${col.className}`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{data.map((item: any) => renderRow(item))}</tbody>
      </table>
    </div>
  );
};

export default Table;
