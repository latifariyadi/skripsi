import { Button, Table } from "antd";
import React from "react";

const Jadwal = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "action",
      dataIndex: "action",
      key: "action",
      render: () => (
        <div>
          <Button
            type="primary"
            style={{
              backgroundColor: "red",
              outline: "none",
              borderColor: "red",
            }}
          >
            delete
          </Button>
          <Button>detail</Button>
        </div>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
    {
      key: "4",
      name: "Jim Red",
      age: 32,
      address: "London No. 2 Lake Park",
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default Jadwal;
