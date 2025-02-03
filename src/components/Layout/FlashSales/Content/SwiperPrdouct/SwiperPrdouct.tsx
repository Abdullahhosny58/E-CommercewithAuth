import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Button, Card, Flex, Typography } from "antd";
import styles from "./SwiperPrdouct.module.scss";
import Image from "next/image";
import { HeartOutlined } from "@ant-design/icons";

import { FC, useState } from "react";
import { useGetAllProducts } from "@/query/products/getAllProduct/getAllProduct";

const { Text } = Typography;

const SwiperPrdouct: FC = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, refetch } = useGetAllProducts(page);

  const loadMoreProducts = () => {
    setPage((prevPage) => prevPage + 1);
    refetch();
  };

  const { Meta } = Card;

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
        {data?.map((product, index) => (
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
                      <Button type="text" className={styles.button} style={{ width: "100%", top: "120px" }}>
                        Add to cart
                      </Button>
                    </Flex>
                  }
                  actions={[<HeartOutlined key="like" />]}
                >
                  <Meta
                    title={<Text ellipsis={{ tooltip: product.title }}>{product.title}</Text>}
                    description={<Text ellipsis={{ tooltip: product.description }}>{product.description}</Text>}
                  />
                </Card>
              </Flex>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>

      {!isLoading && !isError && (
        <Button type="primary" onClick={loadMoreProducts} style={{ marginTop: "20px", display: "block", marginLeft: "auto", marginRight: "auto" }}>
          Load More
        </Button>
      )}
    </>
  );
};

export default SwiperPrdouct;
