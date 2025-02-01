"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import imageOne from "@/public/images/banner-15.jpg";
import imageTwo from "@/public/images/banner-25.jpg";
import { Button, Flex, Typography } from "antd";
import styles from "./Swiper.module.scss";
import Image from "next/image";

const MySwiper = () => {
  return (
    <Swiper
      pagination={{ dynamicBullets: true }}
      modules={[Pagination]}
      className={styles.swiper}
      loop={true}
      autoplay={{ delay: 3000 }}
    >
      <SwiperSlide>
        <div className={styles.slide}>
          {/* الصورة */}
          <Image src={imageOne.src} alt="Men Collection" className={styles.image} layout="fill" />
          {/* النص فوق الصورة */}
          <div className={styles.textBox}>
            <Typography.Text className={styles.collection}>LIFESTYLE COLLECTION</Typography.Text>
            <Typography.Title level={2} className={styles.title}>
              MEN
            </Typography.Title>
            <Flex justify="space-between" vertical>
            <Typography.Text className={styles.discount}>
              SALE UP TO <span className={styles.percentage}>30% OFF</span>
            </Typography.Text>
            <Typography.Text className={styles.description}>
              Get Free Shipping on orders over $99.00
            </Typography.Text>
            <Button type="text"className={styles.shopNow}>
              SHOP NOW
            </Button>
            </Flex>
          
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={styles.slide}>
          <Image src={imageTwo.src} alt="Women Collection" className={styles.image} layout="fill" />
          <div className={styles.textBox}>
            <Typography.Text className={styles.collection}>LIFESTYLE COLLECTION</Typography.Text>
            <Typography.Title level={2} className={styles.title}>
              WOMEN
            </Typography.Title>
            <Typography.Text className={styles.discount}>
              SALE UP TO <span className={styles.percentage}>25% OFF</span>
            </Typography.Text>
            <Typography.Text className={styles.description}>
              Get Free Shipping on orders over $99.00
            </Typography.Text>
            <Button type="text" className={styles.shopNow}>
              SHOP NOW
            </Button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default MySwiper;
