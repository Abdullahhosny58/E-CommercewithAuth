import { Card, Flex } from "antd";
import Meta from "antd/es/card/Meta";
import styles from "./Content.module.scss";
import { RightOutlined } from "@ant-design/icons";
import Link from "next/link";

const cardData = [
  {
    id: 1,
    title: "Film",
    link: "/moviePage",
  },
  {
    id: 2,
    title: "Film",
    link: "/another-place",
  },
];
const Content = () => {
  return (
    <Flex
      justify="center"
      align="center"
      style={{ gap: "20px", flexWrap: "wrap" }}
    >
      {cardData.map((card) => (
        <Link href={card.link} key={card.id}>
          <Card className={styles.card} hoverable>
            <Flex>
              <Meta title={card.title} className={styles.title} />
              <span style={{ marginLeft: "8px" }}>
                <RightOutlined />
              </span>
            </Flex>
          </Card>
        </Link>
      ))}
    </Flex>
  );
};

export default Content;
