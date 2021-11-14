import React from "react";

import { Card, Row, Col } from "antd";
import { People, Buy, Ticket, Discount } from "react-iconly";

export default function ECommerceFeatureCard() {
  return (
    <Row gutter={[32, 32]}>
      <Col xl={6} md={12} span={24}>
        <Card className="da-border-color-black-40">
          <Row>
            <Col className="da-statistic-icon-bg da-mr-16 da-mb-xs-16 da-bg-color-primary-4">
              <People className="da-text-color-primary-1 remix-icon" />
            </Col>

            <Col className="da-mt-8">
              <h3 className="da-mb-4">
                243
                <span className="da-badge-text da-ml-8 da-text-color-primary-1">
                  +3%
                </span>
              </h3>

              <p className="da-p1-body da-mb-0 da-text-color-black-80">
                New Customer
              </p>
            </Col>
          </Row>
        </Card>
      </Col>

      <Col xl={6} md={12} span={24}>
        <Card className="da-border-color-black-40">
          <Row>
            <Col className="da-statistic-icon-bg da-mr-16 da-mb-xs-16 da-bg-color-secondary-4">
              <Buy className="da-text-color-secondary-1 remix-icon" />
            </Col>

            <Col className="da-mt-8">
              <h3 className="da-mb-4">
                1,243
                <span className="da-badge-text da-ml-8 da-text-color-secondary-1">
                  +4%
                </span>
              </h3>

              <p className="da-p1-body da-mb-0 da-text-color-black-80">
                New Orders
              </p>
            </Col>
          </Row>
        </Card>
      </Col>

      <Col xl={6} md={12} span={24}>
        <Card className="da-border-color-black-40">
          <Row>
            <Col className="da-statistic-icon-bg da-mr-16 da-mb-xs-16 da-bg-color-warning-4">
              <Ticket className="da-text-color-warning-1 remix-icon" />
            </Col>

            <Col className="da-mt-8">
              <h3 className="da-mb-4">
                $ 323
                <span className="da-badge-text da-ml-8 da-text-color-warning-1">
                  -1.4%
                </span>
              </h3>

              <p className="da-p1-body da-mb-0 da-text-color-black-80">
                Average Sale
              </p>
            </Col>
          </Row>
        </Card>
      </Col>

      <Col xl={6} md={12} span={24}>
        <Card className="da-border-color-black-40">
          <Row>
            <Col className="da-statistic-icon-bg da-mr-16 da-mb-xs-16 da-bg-color-danger-4">
              <Discount className="da-text-color-danger-1 remix-icon" />
            </Col>

            <Col className="da-mt-8">
              <h3 className="da-mb-4">
                $ 1,324
                <span className="da-badge-text da-ml-8 da-text-color-danger-1">
                  +3%
                </span>
              </h3>

              <p className="da-p1-body da-mb-0 da-text-color-black-80">
                Gross Profit
              </p>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}