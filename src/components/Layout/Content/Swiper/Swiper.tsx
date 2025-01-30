"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import logo from "@/public/images/e-commerce.jpg";
import { Button, Flex, Typography } from "antd";
import styles from "./Swiper.module.scss";


const MySwiper = () => {

  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className={styles.swiper}
      loop={true} // Enable infinite loop
      autoplay={{ delay: 3000 }} // Add autoplay
    >
      
      <SwiperSlide>
        <img src={logo.src} />
        <Flex className={styles.box} align="center" justify="flex-start">
          <div className={styles.swiperSlide}>
            <Typography.Title level={4} className={styles.title}>
              iPhone 14 Series
            </Typography.Title>
            <Typography.Text  className={styles.subtitle}>
              A special collection for you
            </Typography.Text>
            <Typography.Text className={styles.discount}>
              Up to <span className={styles.percentage}>10% off</span> Voucher
            </Typography.Text>
            <Button  type="text" className={styles.navItem}>
              Shop Now →
            </Button>
          </div>
        </Flex>
      </SwiperSlide>
      <SwiperSlide>
        <img src={logo.src} />
        <Flex className={styles.box} align="center" justify="flex-start">
          <div className={styles.swiperSlide}>
            <Typography.Title level={4} className={styles.title}>
              iPhone 14 Series
            </Typography.Title>
            <Typography.Text  className={styles.subtitle}>
              A special collection for you
            </Typography.Text>
            <Typography.Text className={styles.discount}>
              Up to <span className={styles.percentage}>10% off</span> Voucher
            </Typography.Text>
            <Button  type="text" className={styles.navItem}>
              Shop Now →
            </Button>
          </div>
        </Flex>
      </SwiperSlide>
    </Swiper>
  );
};

export default MySwiper;
