import React from "react";

import { Card, Row, Col, Table, Tag } from "antd";
import { Download } from "react-iconly";

export default function ProjectTableEcommerceCard() {
  const columns = [
    {
      title: (
        <span className="da-d-block da-badge-text da-text-color-black-60">
          Date
        </span>
      ),
      dataIndex: "date",
      key: "date",
      render: (text) => (
        <p className="da-mb-0 da-text-color-black-100">{text}</p>
      ),
    },
    {
      title: (
        <span className="da-d-block da-badge-text da-text-color-black-60">
          Billing name
        </span>
      ),
      dataIndex: "billingname",
      key: "billingname",
      render: (text) => (
        <p className="da-mb-0 da-text-color-black-100">{text}</p>
      ),
    },
    {
      title: (
        <span className="da-d-block da-badge-text da-text-color-black-60">
          Amount
        </span>
      ),
      dataIndex: "amount",
      key: "amount",
      render: (text) => (
        <p className="da-mb-0 da-text-color-black-100">{text}</p>
      ),
    },
    {
      title: (
        <span className="da-d-block da-badge-text da-text-color-black-60">
          Status
        </span>
      ),
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag;
            if (tag === "Refund") {
              color = "warning";
            } else if (tag === "Charge Back") {
              color = "error";
            } else {
              color = "success";
            }
            return (
              <Tag color={color} key={tag}>
                {tag}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: (
        <span className="da-d-block da-badge-text da-text-color-black-60">
          Invoice
        </span>
      ),
      dataIndex: "invoice",
      key: "invoice",
      align: "center",
      render: (text) => (
        <span className="da-d-block da-text-color-black-60">{text}</span>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      date: "June 9,2020",
      billingname: "Elon Musk",
      amount: "$1,322.45",
      tags: ["Paid"],
      invoice: <Download className="remix-icon" />,
    },
    {
      key: "2",
      date: "June 9,2020",
      billingname: "Christiano Ronaldo",
      amount: "$733.32",
      tags: ["Paid"],
      invoice: <Download className="remix-icon" />,
    },
    {
      key: "3",
      date: "June 10,2020",
      billingname: "Jeff Bezos",
      amount: "$1,923.32",
      tags: ["Refund"],
      invoice: <Download className="remix-icon" />,
    },
    {
      key: "4",
      date: "June 9,2020",
      billingname: "Richard Hamilton",
      amount: "$922.12",
      tags: ["Paid"],
      invoice: <Download className="remix-icon" />,
    },
    {
      key: "5",
      date: "June 10,2020",
      billingname: "Lebron James",
      amount: "$323.98",
      tags: ["Charge Back"],
      invoice: <Download className="remix-icon" />,
    },
  ];

  return (
    <Card className="da-border-color-black-40 da-project-ecommerce-table-card">
      <Row>
        <Col span={24}>
          <Row align="middle" justify="space-between">
            <h5 className="da-mb-32">Latest Orders</h5>

            <p className="da-p1-body da-mb-0 da-font-weight-500 da-text-color-black-100">
              View all orders
            </p>
          </Row>

          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            className="da-overflow-scroll"
          />
        </Col>
      </Row>
    </Card>
  );
}