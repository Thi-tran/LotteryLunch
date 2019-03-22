import React from "react";
import ReactTable from "react-table";
import 'react-table/react-table.css';

const Table = props => {
  const columns = [
    {
      Header: "Name",
      accessor: "name" // String-based value accessors!
    },
    {
      Header: "Email",
      accessor: "email",
      sortable: false
    },
    {
      Header: "Note",
      accessor: "note",
      sortable: false,
      filterable: false,
      // Cell: row => <button onClick={() => props.deleteTodo(row)}>Delete</button>
    }
  ];

  return (
    <div>
      <ReactTable
        data={props.data}
        defaultPageSize={5}
        columns={columns}
        filterable={true}
      />
    </div>
  );
};

export default Table;
