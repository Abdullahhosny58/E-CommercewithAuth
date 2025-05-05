"use client";

import React, { useState } from "react";
import { Button, Drawer, Flex, Input, Typography, List, Badge } from "antd";
import {
  HeartOutlined,
  MinusOutlined,
  PlusOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import styles from "./search.module.scss";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import {
  addToCart,
} from "@/rtk/slices/cartSlice";
import Link from "next/link";

const { Text } = Typography;

const SearchInput: React.FC = () => {
  const cart = useSelector((state) => state.cart);
  const favorite = useSelector((state) => state.favorite);
  const [open, setOpen] = useState(false);
  const [placement] = useState<"left" | "right" | "top" | "bottom">("right");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const tatalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  const totalItems = cart.length;

  const dispatch = useDispatch();
  return (
    <Flex align="center">
      <Input
        placeholder="What are you looking for?"
        prefix={<SearchOutlined className={styles.searchIcon} />}
        className={styles.search}
      />
      <Link href="/favorites" passHref>  <Button type="link">
      <Badge
          count={favorite.reduce((acc, item) => acc + (item.quantity || 1), 0)}
          showZero
        >

        <HeartOutlined
          className={styles.iconLike}
          style={{ color: "#000", fontSize: "20px" }}
        />
        </Badge>

      </Button></Link>
    

      {/* Render the ShoppingCartOutlined icon with a badge showing the count */}
      <Button type="link" onClick={showDrawer}>
        <Badge
          count={cart.reduce((acc, item) => acc + (item.quantity || 1), 0)}
          showZero
        >
          <ShoppingCartOutlined
            className={styles.iconLike}
            style={{ color: "#000", fontSize: "22px" }}
          />
        </Badge>
      </Button>

      <Drawer
        title="My Cart"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        width={500}
      >
        <List
          dataSource={cart}
          renderItem={(product) => (
            <List.Item>
              <Flex
                align="center"
                justify="space-between"
                style={{ width: "100%" }}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={70}
                  height={70}
                  style={{ borderRadius: 5 }}
                />
                <Flex vertical>
                  <Text strong>{product.title}</Text>
                  <Text>Size: {product.size}</Text>
                  <Text
                    style={{ textDecoration: "line-through", color: "gray" }}
                  >
                    ${product.originalPrice}
                  </Text>
                  <Text strong>${product.price}</Text>
                </Flex>
                <Flex vertical align="center">
                  <Flex>quantity: {product.quantity}</Flex>

                  <Flex>
                    <Button
                      style={{ width: "5px" }}
                      variant="solid"
                      onClick={() => dispatch(addToCart(product))}
                    >
                      <PlusOutlined />
                    </Button>
                    <Button
                      style={{ width: "5px" }}
                      variant="solid"
                      onClick={() => {
                        dispatch(addToCart({ ...product, quantity: -1 }));
                      }}
                    >
                      <MinusOutlined />
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            </List.Item>
          )}
        />
        <div style={{ marginTop: 20 }}>
          <Input
            placeholder="Discount code"
            style={{ width: "70%", marginRight: 10 }}
          />
          <Button
            type="primary"
            style={{ marginTop: 20, backgroundColor: "#DB4444", color: "#fff" }}
          >
            Apply
          </Button>
        </div>
        <div style={{ marginTop: 20 }}>
          <Text>Order Value:{totalItems} </Text>
          <br />
          <Text strong>Total:{tatalPrice.toFixed(2)} $</Text>
        </div>
        <Button
          className={styles.button}
          block
          style={{ marginTop: 20, backgroundColor: "#DB4444", color: "#fff" }}
        >
          <Link href="/checkout">
            Checkout
          </Link>
        </Button>
      </Drawer>
    </Flex>
  );
};

export default SearchInput;
