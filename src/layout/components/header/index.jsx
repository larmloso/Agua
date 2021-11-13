import React, { useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { RiCloseLine, RiMenuFill } from 'react-icons/ri'
import { Layout, Button, Row, Col } from 'antd'

// import HeaderSearch from './HeaderSearch'
import HeaderUser from './HeaderUser'

const { Header } = Layout

export default function MenuHeader(props) {
  const { setVisible } = props

  // Mobile Sidebar
  const showDrawer = () => {
    setVisible(true)
  }

  return (
    <Header>
      <Row
        className="da-w-100 da-position-relative"
        align="middle"
        justify="space-between"
      >
        <Col className="da-mobile-sidebar-button da-mr-24">
          <Button
            className="da-mobile-sidebar-button"
            type="text"
            onClick={showDrawer}
            icon={
              <RiMenuFill
                size={24}
                className="remix-icon da-text-color-black-80"
              />
            }
          />
        </Col>
        <div></div>
        <Col>
          <Row align="middle">
            <Col>
              <HeaderUser />
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>
  )
}
