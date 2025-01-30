"use client";

import { Flex } from "antd";
import Sidebar from "./Sidebar/Sidebar";
import MySwiper from "./Swiper/Swiper";

const Contact: React.FC = () => {
  return (
    <Flex>
      <Sidebar />
      <MySwiper />
    </Flex>
  );
};

export default Contact;
