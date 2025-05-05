"use client";
import { Flex, Typography } from "antd";
import Header from "../Header/Header";

import styles from "./HeaderNavbar.module.scss";
import Navbar from "./Content/Navbar/Navbar";
import SearchInput from "./Content/Search/Search";

const HeaderNavbar = () => {
  const { Title } = Typography;

  return (
    
    <header>
      <Header />
      <Flex justify="space-around" className={styles.header} align="center">
        <Flex>
          <Title level={3} className={styles.logo}>
            Exclusive
          </Title>
        </Flex>
        <Flex>
          <Navbar />
        </Flex>
        <Flex>
          <SearchInput />
        </Flex>
      </Flex>
    </header>
  );
};

export default HeaderNavbar;
