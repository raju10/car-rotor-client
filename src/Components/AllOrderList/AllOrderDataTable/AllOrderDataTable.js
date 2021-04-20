import React from "react";

const AllOrderDataTable = ({ allOrderList }) => {
  return (
    <table className="table table-borderless">
      <thead>
        <tr>
          <th className="text-secondary text-left" scope="col">
            Sr No
          </th>
          <th className="text-secondary" scope="col">
            Name
          </th>
          {/* <th className="text-secondary" scope="col">Gender</th>
                  <th className="text-secondary" scope="col">Age</th> */}
          <th className="text-secondary" scope="col">
            Order Name
          </th>
          <th className="text-secondary" scope="col">
            Order Price
          </th>
          {/* <th className="text-secondary" scope="col">Phone</th> */}
          <th className="text-secondary" scope="col">
            Email
          </th>
        </tr>
      </thead>
      <tbody>
        {allOrderList.map((order, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{order.data.clientName}</td>

            <td>{order.orderName}</td>
            <td>{order.orderPrice}</td>
            <td>{order.data.clientEmail}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AllOrderDataTable;
