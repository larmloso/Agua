import { Col, Layout, Row } from "antd";
const { Footer } = Layout;

import themeConfig from '../../../configs/themeConfig.jsx';

export default function MenuFooter() {
  return (
    <Footer className="da-bg-color-black-10">
      <Row align="middle" justify="space-between">
        <Col md={12} span={24}>
          <p className="da-badge-text da-mb-0">
            COPYRIGHT ©2021 Agua, All rights Reserved
          </p>
        </Col>

        <Col md={12} span={24} className="da-mt-sm-8 da-text-sm-center da-text-right">
          <a
            href="https://trello.com/b/8ZRmDN5y/yoda-roadmap"
            target="_blank"
            className="da-badge-text"
          >
            Version: {themeConfig.version}
          </a>
        </Col>
      </Row>
    </Footer>
  );
};