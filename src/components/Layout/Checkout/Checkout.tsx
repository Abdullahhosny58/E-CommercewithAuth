"use client";

import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  Typography,
  Image,
  Button,
  Flex,
  Input,
  Card,
  Divider,
} from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { addToCart, deleteFromCart } from "@/rtk/slices/cartSlice";
import { AppDispatch } from "@/rtk/store";
const { Title } = Typography;

const CheckoutContent = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch<AppDispatch>();

  const getTotalPrice = () => {
    return cart.reduce((total: number, item: any) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (img: string) => <Image src={img} alt="product" width={50} />,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: any) => (
        <div style={{ display: "flex", gap: "8px" }}>
          <Button
            onClick={() => dispatch(addToCart({ ...record, quantity: 1 }))}
            icon={<PlusOutlined />}
          />
          <Button
            onClick={() => {
              if (record.quantity > 1) {
                dispatch(addToCart({ ...record, quantity: -1 }));
              } else {
                dispatch(deleteFromCart(record.id));
              }
            }}
            icon={<MinusOutlined />}
          />
        </div>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price: number) => `$${price.toFixed(2)}`,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Total",
      key: "total",
      render: (_: any, record: any) =>
        `$${(record.price * record.quantity).toFixed(2)}`,
    },
  ];

  return (
    <Flex style={{ padding: 24 }} vertical gap={24}>
      <Title level={2}>Checkout</Title>

      <Flex justify="center">
        <Table
          dataSource={cart}
          columns={columns}
          rowKey="id"
          pagination={false}
          style={{ width: "80%" }}
        />
      </Flex>

      {/* Coupon and Cart Total */}
      <Flex justify="space-between" style={{ width: "80%", margin: "0 auto" }}>
        {/* Coupon Section */}
        <Flex gap="small" align="center">
          <Input
            placeholder="Coupon Code"
            style={{
              borderRadius: 4,
              border: "1px solid #ccc",
              height: 40,
              width: 200,
            }}
          />
          <Button
            type="primary"
            style={{
              backgroundColor: "#e74c3c",
              borderColor: "#e74c3c",
              height: 40,
              padding: "0 20px",
              borderRadius: 4,
            }}
          >
            Apply Coupon
          </Button>
        </Flex>

        {/* Cart Total Section */}
        <Card
          title="Cart Total"
          style={{
            width: 300,
            border: "1px solid #00000033",
          }}
        >
          <Flex justify="space-between" style={{ marginBottom: 8 }}>
            <span>Subtotal:</span>
            <span>${getTotalPrice().toFixed(2)}</span>
          </Flex>
          <Flex justify="space-between" style={{ marginBottom: 8 }}>
            <span>Shipping:</span>
            <span>Free</span>
          </Flex>
          <Divider />
          <Flex justify="space-between" style={{ marginBottom: 16 }}>
            <strong>Total:</strong>
            <strong>${getTotalPrice().toFixed(2)}</strong>
          </Flex>
          <Button
            type="primary"
            block
            style={{
              backgroundColor: "#e74c3c",
              borderColor: "#e74c3c",
              height: 40,
              borderRadius: 4,
            }}
          >
            Proceed to checkout
          </Button>
        </Card>
      </Flex>
    </Flex>
  );
};

export default CheckoutContent;
