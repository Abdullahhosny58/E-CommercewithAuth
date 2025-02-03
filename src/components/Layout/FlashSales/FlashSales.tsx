"use client";

import { Flex, Typography } from "antd";
import { FC } from "react";
import styles from "./FlashSales.module.scss";
import CountdownTimer from "@/components/Modules/Countdown/Countdown";
import SwiperPrdouct from "./Content/SwiperPrdouct/SwiperPrdouct";

const FlashSales: FC = () => {
  const { Title } = Typography;
  

  return (
    <Flex className={styles.container} vertical >
      <Flex gap={10} align="center">
        <div className={styles.bgRed} ></div>
        <Title level={5}>Today’s</Title>
      </Flex>
      <Flex gap={10} align="center" justify="space-between">
      <Title className={styles.title} level={2}>Flash Sales</Title>
      <Flex>
      <CountdownTimer/>
      </Flex>
      <div></div>
      <div></div>
      </Flex>
      <Flex>
        <SwiperPrdouct/>
      </Flex>
    </Flex> 
  );
};

export default FlashSales;
