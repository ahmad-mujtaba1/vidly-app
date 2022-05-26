import React from "react";
import TableBody from "./tablebody";
import TableHeader from "./tableHader";
const Table = ({ columns, sortColumn, onSort, data }) => {
  return (
    <div>
      <table className="table">
        <TableHeader
          columns={columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody data={data} columns={columns} />
      </table>
    </div>
  );
};

export default Table;
