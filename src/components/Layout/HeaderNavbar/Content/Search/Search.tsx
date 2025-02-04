  "use client";

  import React, { useState } from "react";
  import {
    Button,
    Drawer,
    Flex,
    Input,
    Typography,
    List,
    Badge,
    Divider,
  } from "antd";
  import {
    ClearOutlined,
    HeartOutlined,
    MinusOutlined,
    PlusOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@ant-design/icons";
  import styles from "./search.module.scss";
  import { useDispatch, useSelector } from "react-redux";
  import Image from "next/image";
  import { addToCart, daleteFromCart } from "@/rtk/slices/cartSlice";

  const { Text } = Typography;

  const SearchInput: React.FC = () => {
    const cart = useSelector((state) => state.cart);
    const [open, setOpen] = useState(false);
    const [placement] = useState<"left" | "right" | "top" | "bottom">("right");

    const showDrawer = () => {
      setOpen(true);
    };

    const onClose = () => {
      setOpen(false);
    };
    const tatalPrice = cart.reduce((acc,product)=>{
      acc +=product.price * product.quantity;
      return acc
    },0)
  
    const totalItems = cart.length;


    const dispatch = useDispatch();
    return (
      <Flex align="center">
        <Input
          placeholder="What are you looking for?"
          prefix={<SearchOutlined className={styles.searchIcon} />}
          className={styles.search}
        />
        <Button type="link">
          <HeartOutlined
            className={styles.iconLike}
            style={{ color: "#000", fontSize: "20px" }}
          />
        </Button>

        {/* Render the ShoppingCartOutlined icon with a badge showing the count */}
        <Button type="link" onClick={showDrawer}>
          <Badge count={cart?.length} showZero>
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
                        color="primary"
                        variant="solid"
                        onClick={() => dispatch(addToCart(product))}
                      >
                        <PlusOutlined />
                      </Button>
                      <Button
                        style={{ width: "5px" }}
                        color="danger"
                        variant="solid"
                        onClick={() => dispatch(daleteFromCart(product.id))}
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
            Checkout
          </Button>
        </Drawer>
      </Flex>
    );
  };

  export default SearchInput;
