import { Link } from 'react-router-dom'
import { Menu, Dropdown, Col, Avatar } from 'antd'
import {
  User,
  People,
  InfoSquare,
  Calendar,
  Discount,
  Logout,
} from 'react-iconly'
import liff from '@line/liff'
import Cookie from 'js-cookie'
import avatarImg from '../../../assets/images/memoji/memoji-1.png'

export default function HeaderUser() {
  const logout = () => {
    // liff.logout()
    Cookie.remove('access-token')
    window.location.reload()
  }

  const menu = (
    <Menu>
      <Menu.Item
        icon={
          <User
            set="curved"
            className="remix-icon da-vertical-align-middle"
            size={16}
          />
        }
      >
        <Link to="/pages/profile/personel-information">Profile</Link>
      </Menu.Item>

      <Menu.Item
        icon={
          <People
            set="curved"
            className="remix-icon da-vertical-align-middle"
            size={16}
          />
        }
      >
        <Link to="/apps/contact">Contact</Link>
      </Menu.Item>

      <Menu.Item
        icon={
          <Calendar
            set="curved"
            className="remix-icon da-vertical-align-middle"
            size={16}
          />
        }
      >
        <Link to="/apps/calendar">Calendar</Link>
      </Menu.Item>

      <Menu.Item
        icon={
          <Discount
            set="curved"
            className="remix-icon da-vertical-align-middle"
            size={16}
          />
        }
      >
        <Link to="/pages/pricing">Pricing</Link>
      </Menu.Item>

      <Menu.Item
        icon={
          <InfoSquare
            set="curved"
            className="remix-icon da-vertical-align-middle"
            size={16}
          />
        }
      >
        <Link to="/pages/faq">FAQ</Link>
      </Menu.Item>

      <Menu.Item
        onClick={() => logout()}
        icon={
          <Logout
            set="curved"
            className="remix-icon da-vertical-align-middle"
            size={16}
          />
        }
      >
        <Link>Logout</Link>
      </Menu.Item>
    </Menu>
  )

  return (
    <Dropdown overlay={menu}>
      <Col className="da-d-flex-center" onClick={(e) => e.preventDefault()}>
        <Avatar src={avatarImg} size={40} />
      </Col>
    </Dropdown>
  )
}
