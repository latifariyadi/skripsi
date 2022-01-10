import { Button, Table } from "antd";
import React from "react";

const Kehadiran = () => {
  const columns = [
    {
      title: "Waktu",
      dataIndex: "waktu",
      key: "waktu",
    },
    {
      title: "Senin",
      dataIndex: "senin",
      key: "senin",
    },
    {
      title: "Selasa",
      dataIndex: "selasa",
      key: "selasa",
    },
    {
      title: "Rabu",
      dataIndex: "rabu",
      key: "rabu",
    },
    {
      title: "Kamis",
      dataIndex: "kamis",
      key: "kamis",
    },
    {
      title: "Jumat",
      dataIndex: "jumat",
      key: "jumat",
    },
    {
      title: "action",
      dataIndex: "action",
      key: "action",
      render: () => (
        <div>
          <Button type="primary" danger>
            Detail
          </Button>
        </div>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      waktu: "07:30-08:30",
      senin: "IPA",
      selasa: "IPS",
      rabu: "Biologi",
      kamis: "Fisika",
      jumat: "Seni",
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default Kehadiran;
