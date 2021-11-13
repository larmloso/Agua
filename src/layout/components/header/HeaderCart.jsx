import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import {
  adjustItemQty,
  loadCurrentItem,
} from '../../../redux/ecommerce/ecommerceActions'

import { Button, Row, Col, Divider, Tag, InputNumber, Empty } from 'antd'
import { Buy } from 'react-iconly'

import EmptyImage from '../../../assets/images/apps/ecommerce/checkout-empty.svg'

export default function HeaderChart() {
  // Basket Dropdwon
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.ecommerce.cart)
  const [totalItem, setTotalItem] = useState(0)

  useEffect(() => {
    let items = 0

    cart.forEach((item) => {
      items += item.qty
    })

    setTotalItem(items)
  }, [cart, totalItem, setTotalItem])

  // Basket Qty
  const onChangeHandler = (e, id) => {
    dispatch(adjustItemQty(id, e))
  }

  // Remove Cart
  const [removeClass, setRemoveClass] = useState('')

  const handleClick = () => {
    setRemoveClass('remove-cart')

    setTimeout(() => {
      setRemoveClass('')
    }, 200)
  }

  return (
    <>
      <Button
        type="text"
        icon={<Buy set="curved" className="da-text-color-black-60" />}
      />

      <div className={`da-basket-dropdown ${removeClass}`}>
        <Row
          gutter={[8, 8]}
          align="middle"
          justify="space-between"
          style={{ height: 64 }}
        >
          <Col>
            <h5 className="da-mb-0">My Cart</h5>
          </Col>

          {cart.length !== 0 && (
            <Col>
              <Tag className="da-mr-0">{totalItem} Items</Tag>
            </Col>
          )}
        </Row>

        <Divider className="da-mt-4 da-mb-16" />

        <div className="da-basket-dropdown-list">
          {cart.length !== 0 ? (
            cart.map((value, index) => (
              <div key={value.id}>
                <Row align="middle">
                  <Col flex="0 0 80px">
                    <Link
                      to={`/apps/ecommerce/product-detail/${value.id}`}
                      onClick={() => dispatch(loadCurrentItem(value))}
                    >
                      <img
                        src={
                          require(`../../../assets/images/product/${value.imgList}`)
                            .default
                        }
                        alt={value.title}
                        height={80}
                      />
                    </Link>
                  </Col>

                  <Col flex="1 0 0" className="da-pl-8">
                    <h5 className="da-mb-0">{value.title}</h5>
                    <p className="da-caption da-mb-16 da-text-color-black-60">
                      By{' '}
                      <span className="da-text-color-black-80">
                        {value.person}
                      </span>
                    </p>

                    <Row
                      align="middle"
                      justify="space-between"
                      className="da-mb-4"
                    >
                      <Col
                        className="da-d-flex"
                        style={{
                          height: 40,
                        }}
                      >
                        <InputNumber
                          min={1}
                          max={99}
                          value={value.qty}
                          onChange={(e) => onChangeHandler(e, value.id)}
                        />
                      </Col>

                      <Col>
                        <p className="h5 da-mb-0 da-text-color-primary-1 da-font-weight-700">
                          {value.discount
                            ? '$' + value.discount
                            : '$' + value.price}
                        </p>
                      </Col>
                    </Row>
                  </Col>
                </Row>

                {cart.length != index + 1 && (
                  <Divider className="da-mt-16 da-mb-16" />
                )}
              </div>
            ))
          ) : (
            <Empty
              image={EmptyImage}
              imageStyle={{
                height: 100,
              }}
              description={<h5>Your cart is empty</h5>}
            />
          )}
        </div>

        <Divider className="da-mt-16 da-mb-8" />

        <Row gutter={[16]}>
          {cart.length !== 0 ? (
            <>
              <Col span={12}>
                <Link to="/apps/ecommerce/checkout" onClick={handleClick}>
                  <Button block type="primary" ghost>
                    View Cart
                  </Button>
                </Link>
              </Col>

              <Col span={12}>
                <Link
                  to="/apps/ecommerce/address-information"
                  onClick={handleClick}
                >
                  <Button block type="primary">
                    Checkout
                  </Button>
                </Link>
              </Col>
            </>
          ) : (
            <Col span={24}>
              <Link to="/apps/ecommerce/shop" onClick={handleClick}>
                <Button block type="primary">
                  Go to shop list
                </Button>
              </Link>
            </Col>
          )}
        </Row>
      </div>
    </>
  )
}
