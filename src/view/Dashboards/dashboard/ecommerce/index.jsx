import React from 'react'
import { Row, Col, Select } from 'antd'

import RevenueColumnCard from '../../widgets/cards/analytics/revenueColumnCard'
import ProjectTableEcommerceCard from './projectTableEcommerceCard'
import EarningsDonutCard from './earningsDonutCard'
import CtaCardTwo from '../../widgets/cards/advance/ctaCardTwo'
import RevenueLineEcommerceList from './revenueLineEcommerceList'
import CheckDetailCard from './checkDetailCard'
import ECommerceProductCard from './eCommerceProductCard'
import ECommerceFeatureCard from './eCommerceFeatureCard'
import ECommerceBrowserStates from './eCommerceBrowserStates'

export default function ECommerce() {
  return (
    <Row gutter={[32, 0]}>
      <Col span={24}>
        <Row align="middle" justify="space-between">
          <Col md={12} span={24}>
            <h3>สวัสดี, Fuseter 👋</h3>

            <p className="da-p1-body da-text-color-black-100 da-mb-0">
              นี่คือสิ่งที่เกิดขึ้นในบริษัทของคุณ
            </p>
          </Col>

          <Col className="da-mt-sm-24">
            <Select
              style={{ width: '100%' }}
              defaultValue="this-mounth"
              id="month-select"
            >
              <Select.Option value="this-mounth">This Month</Select.Option>

              <Select.Option value="this-week">This Week</Select.Option>

              <Select.Option value="this-year">This Year</Select.Option>
            </Select>
          </Col>
        </Row>
      </Col>

      <Col span={24} className="da-mt-32">
        <Row gutter={[32, 32]}>
          <Col span={24}>
            <ECommerceFeatureCard />
          </Col>

          <Col xl={16} span={24} className="da-overflow-hidden">
            <Row gutter={[32, 32]}>
              <Col span={24}>
                <RevenueColumnCard />
              </Col>

              <Col span={24}>
                <ProjectTableEcommerceCard />
              </Col>

              <Col md={12} span={24}>
                <RevenueLineEcommerceList />
              </Col>

              <Col md={12} span={24}>
                <ECommerceBrowserStates />
              </Col>
            </Row>
          </Col>

          <Col xl={8} span={24}>
            <Row gutter={[32, 32]}>
              <Col span={24}>
                <EarningsDonutCard />
              </Col>

              <Col xl={24} md={12} span={24}>
                <CtaCardTwo />
              </Col>

              <Col xl={24} md={12} span={24}>
                <CheckDetailCard />
              </Col>
            </Row>
          </Col>

          <Col span={24}>
            <ECommerceProductCard />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
