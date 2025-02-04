import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Button, Card, Flex, Typography } from "antd";
import styles from "./SwiperPrdouct.module.scss";
import Image from "next/image";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/rtk/slices/productSlice";
import { addToCart } from "@/rtk/slices/cartSlice";
import { AppDispatch, RootState } from "@/rtk/store";

const { Text } = Typography;

const SwiperPrdouct: FC = () => {
  // Access the products array correctly from the Redux state
  const { products, loading, error } = useSelector((state:RootState) => state.products);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts(5)); // Fetch products on component mount
  }, [dispatch]);

  const { Meta } = Card;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className={styles.mySwiper}
        loop={true}
        autoplay={{ delay: 3000 }}
        grabCursor={true}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        {products.map((product, index: number) => (
          <SwiperSlide key={index}>
            <Flex className={styles.slide} justify="center" align="center">
              <Flex className={styles.cardWrapper}>
                <Card
                  style={{ width: 200, borderRadius: 10 }}
                  cover={
                    <Flex
                      style={{
                        width: "100%",
                        height: 150,
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={product.image}
                        alt="example"
                        layout="fill"
                        objectFit="contain"
                      />
                      <Flex align="center" justify="space-between">
                        <Button
                          type="text"
                          className={styles.button}
                          onClick={() => dispatch(addToCart(product))}
                        >
                          <ShoppingCartOutlined />
                        </Button>
                        <Button type="text" className={styles.button}>
                          <HeartOutlined />
                        </Button>
                      </Flex>
                    </Flex>
                  }
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
              </Flex>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperPrdouct;