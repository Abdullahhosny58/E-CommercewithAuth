"use client"; // Ensures this component is rendered on the client side

import { Button, Flex, Typography } from "antd";
import styles from "./Header.module.scss";

const Header = () => {
  const { Title } = Typography;

  return (
    <header className={styles.header}>
      <Flex justify="space-between" align="center">
        {/* Left section (empty for now) */}
        <div></div>

        {/* Middle section with the title */}
        <Flex align="center" justify="center" style={{ flex: 1 }}>
        <Title level={5} style={{ margin: 10 ,fontSize: "10px" }} className={styles.summerSale}>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <Button type="text" className={styles.summerSaleButton} size="small" style={{fontSize: "10px" }}>
              ShopNow
            </Button>
          </Title>
        </Flex>


        {/* Right section (placeholder content) */}
        <Flex align="center">a</Flex>
      </Flex>
    </header>
  );
};

export default Header;