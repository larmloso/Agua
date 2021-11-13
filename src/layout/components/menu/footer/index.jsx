import React from 'react'
import { Link } from 'react-router-dom'
import { Divider, Avatar, Row, Col } from 'antd'
import { RiSettings3Line } from 'react-icons/ri'
import avatar from '../../../../assets/images/memoji/memoji-1.png'

export default function MenuFooter(props) {
  return (
    <Row
      className="da-sidebar-footer da-pb-24 da-px-24"
      align="middle"
      justify="space-between"
    >
      <Divider className="da-border-color-black-20 da-mt-0" />

      <Col>
        <Row align="middle">
          <Avatar size={36} src={avatar} className="da-mr-8" />

          <div>
            <span className="da-d-block da-text-color-black-100 da-p1-body">
              Jane Doe
            </span>

            <Link
              to="/pages/profile/personel-information"
              className="da-badge-text"
              onClick={props.onClose}
            >
              View Profile
            </Link>
          </div>
        </Row>
      </Col>

      <Col>
        <Link to="/pages/profile/security" onClick={props.onClose}>
          <RiSettings3Line
            className="remix-icon da-text-color-black-100"
            size={24}
          />
        </Link>
      </Col>
    </Row>
  )
}
