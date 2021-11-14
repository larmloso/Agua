import React from "react";

import { Card, Row, Col, Button } from "antd";

import cardBg from "../../../../assets/images/dasboard/ecommerce-card-bg.png";
import cardImg from "../../../../assets/images/dasboard/ecommerce-card-img.png";

export default function CheckDetailCard() {
  return (
    <Card
      className="da-border-color-black-40 da-ecommerce-detail-card da-card-6 da-overflow-hidden"
      style={{
        backgroundImage: `url(${cardBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Row>
        <Col span={15}>
          <h2 className="da-mb-0">New VR-07</h2>
          <span className="da-p1-body da-d-block da-text-color-black-60">
            By Google
          </span>

          <Button
            type="text"
            className="da-mt-16 da-border-color-primary-1 da-text-color-primary-1"
          >
            Check Detail
          </Button>
        </Col>

        <img src={cardImg} alt="New VR-07" />
      </Row>
    </Card>
  );
}
