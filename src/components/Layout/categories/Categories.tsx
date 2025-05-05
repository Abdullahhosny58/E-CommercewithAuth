"use client";

import { useGetProductsByCategory } from "@/query/categories/useGetProductsByCategory";
import { useParams } from "next/navigation";
import { Spin, Alert, Card, Row, Col, Typography, Button, Flex } from "antd";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { ShoppingCartOutlined, HeartOutlined } from "@ant-design/icons";
import { addToCart } from "@/rtk/slices/cartSlice";
import { AppDispatch} from "@/rtk/store";

const { Title, Text } = Typography;

const CategoriesContent = () => {
    const { categoriesId } = useParams();
    const { data, isLoading, error } = useGetProductsByCategory(categoriesId);
    const dispatch = useDispatch<AppDispatch>();

    if (isLoading) {
        return (
            <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
                <Spin tip="Loading..." size="large" />
            </div>
        );
    }

    if (error) {
        return <Alert message="Error" description={error.message} type="error" showIcon />;
    }

    return (
        <div style={{ padding: 24 }}>
            <Title level={2}>Category: {categoriesId}</Title>
            <Row gutter={[16, 16]}>
                {data?.map((product) => (
                    <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
                        <Card
                            hoverable
                            style={{ width: "100%", borderRadius: 10 }}
                            cover={
                                <div style={{ height: 150, position: "relative" }}>
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        style={{ objectFit: "contain" }}
                                    />
                                    <Flex
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            right: 0,
                                            padding: 8,
                                            gap: 8,
                                        }}
                                    >
                                        <Button
                                            type="text"
                                            onClick={() => dispatch(addToCart(product))}
                                            icon={<ShoppingCartOutlined />}
                                        />
                                        <Button
                                            type="text"
                                            icon={<HeartOutlined />}
                                        />
                                    </Flex>
                                </div>
                            }
                        >
                            <Card.Meta
                                title={<Text strong>{product.title}</Text>}
                                description={<Text>Price: ${product.price}</Text>}
                            />
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default CategoriesContent;
