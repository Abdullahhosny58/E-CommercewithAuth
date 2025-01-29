import React, { useState } from "react";
import { Button, Drawer, Flex, Input } from "antd";
import { HeartOutlined, SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import styles from "./search.module.scss";

const SearchInput: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [placement] = useState<'left' | 'right' | 'top' | 'bottom'>('right'); // You can specify other placements here if needed.

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  
  return (
    <Flex align="center" >
      <Input
        placeholder="What are you looking for?"
        prefix={<SearchOutlined className={styles.searchIcon} />}
        className={styles.search}
      />
      <Button type="link">
        <HeartOutlined className={styles.iconLike} style={{ color: "#000", fontSize: "20px" }} />
      </Button>
      <Button type="link" onClick={showDrawer}>
        <ShoppingCartOutlined className={styles.iconLike} style={{ color: "#000", fontSize: "22px" }} />
      </Button>

      <Drawer
        title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    
    </Flex>
  );
};

export default SearchInput;
