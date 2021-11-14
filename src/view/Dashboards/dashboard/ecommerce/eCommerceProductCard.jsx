import React from "react";

import Slider from "react-slick";
import { Row, Col, Button, Rate } from "antd";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import productImg1 from "../../../../assets/images/product/ecommerce-product-img-1.png";
import productImg2 from "../../../../assets/images/product/ecommerce-product-img-2.png";

export default function ECommerceProductCard() {
  // Slider
  function SampleNextArrow(props) {
    const { onClick } = props;

    return (
      <Button
        onClick={onClick}
        className="da-dashboard-ecommerce-product-slider-button next-button"
        icon={<RiArrowRightSLine className="remix-icon" size={24} />}
      ></Button>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;

    return (
      <Button
        onClick={onClick}
        className="da-dashboard-ecommerce-product-slider-button prev-button"
        icon={<RiArrowLeftSLine className="remix-icon" size={24} />}
      ></Button>
    );
  }

  // Product Data
  const productCard = [
    {
      imgUrl: productImg1,
      price: "$69.00",
      discount: "$79.00",
      title: "Rales Wireless Earbuds Bluetooth 5.0",
      subTitle: "By Urbanears",
      rate: "4.5",
    },
    {
      imgUrl: productImg2,
      price: "$69.00",
      discount: "$79.00",
      title: "Rales Wireless Earbuds Bluetooth 5.0",
      subTitle: "By Urbanears",
      rate: "4.5",
    },
    {
      imgUrl: productImg1,
      price: "$69.00",
      discount: "$79.00",
      title: "Rales Wireless Earbuds Bluetooth 5.0",
      subTitle: "By Urbanears",
      rate: "4.5",
    },
    {
      imgUrl: productImg1,
      price: "$69.00",
      discount: "$79.00",
      title: "Rales Wireless Earbuds Bluetooth 5.0",
      subTitle: "By Urbanears",
      rate: "4.5",
    },
  ];

  const productCardMap = productCard.map((value, index) => (
    <div key={index} className="da-px-16 da-mb-32 da-card-6 da-eCommerceCardOne">
      <div className="da-border-radius da-overflow-hidden da-border-1 da-border-color-black-40 da-bg-color-black-0 da-h-100">
        <div className="da-text-center da-bg-color-black-10 da-card-2 da-d-flex-center-full">
          <img src={value.imgUrl} alt={value.title} className="da-m-auto" />
        </div>

        <Row className="da-p-24">
          <Col span={24} className="da-mb-16 da-mt-8">
            <h3 className="da-mb-4">{value.price}</h3>
            <p className="da-mb-0 da-mr-4 da-font-weight-700 da-text-color-black-60 da-text-line-through da-badge">
              {value.discount}
            </p>
          </Col>

          <Col span={24} className="da-mb-8">
            <p className="da-mb-4 da-text-color-black-100 da-p1-body">
              {value.title}
            </p>
            <p className="da-mb-0 da-caption da-text-color-black-60">
              {value.subTitle}
            </p>
          </Col>

          <Col span={24} className="da-mt-16">
            <Rate defaultValue={parseFloat(value.rate)} allowHalf></Rate>
          </Col>
        </Row>
      </div>
    </div>
  ));

  return (
    <Row gutter={[32, 0]} className="da-dashboard-ecommerce-product-slider da-mt-12">
      <Col span={16} className="da-mb-24">
        <h4 className="da-mb-0">Best Selling Products</h4>
      </Col>

      <Slider
        dots={false}
        infinite={false}
        slidesToShow={3}
        slidesToScroll={1}
        nextArrow={<SampleNextArrow />}
        prevArrow={<SamplePrevArrow />}
        responsive={[
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]}
      >
        {productCardMap}
      </Slider>
    </Row>
  );
}
