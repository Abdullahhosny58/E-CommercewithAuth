"use client";

import { AppDispatch } from "@/rtk/store";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Card, Flex, Typography } from "antd";
import Meta from "antd/es/card/Meta";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/rtk/slices/cartSlice";
import { RootState } from "@/rtk/store"; // Make sure you have RootState defined
import { deleteFromFavorite } from "@/rtk/slices/favoriteSlice";

const { Title, Text } = Typography;

const FavoritesContent = () => {
  const favorites = useSelector((state: RootState) => state.favorite);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Flex vertical>
      <Title style={{ padding: 26 }} level={2}>
        Favorites ({favorites.length})
      </Title>

      <Flex wrap gap="large" justify="center">
        {favorites.map((product) => (
          <Card
            key={product.id}
            style={{ width: 200, borderRadius: 10 }}
            cover={
              <div
                style={{
                  width: "100%",
                  height: 150,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            }
            actions={[
              <Button
              key="add-to-cart"
              type="text"
              disabled={cart.some(item => item.id === product.id)}
              onClick={() => dispatch(addToCart(product))}
            >
              <ShoppingCartOutlined />
            </Button>
            ,
               <Button
               key="remove-favorite"
               type="text"
               danger
               onClick={() => dispatch(deleteFromFavorite(product.id))}
             >
               remove
             </Button>
            ]}
          >
            <Meta
              title={
                <Text ellipsis={{ tooltip: product.title }}>
                  {product.title}
                </Text>
              }
              description={
                <Text ellipsis={{ tooltip: product.description }}>
                  {product.description}
                </Text>
              }
            />
          </Card>
        ))}
      </Flex>
    </Flex>
  );
};

export default FavoritesContent;
