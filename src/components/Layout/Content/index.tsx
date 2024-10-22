"use client";
import { Card, Flex, Input } from "antd";
import Meta from "antd/es/card/Meta";
import styles from "./Content.module.scss";
import { RightOutlined } from "@ant-design/icons";
import Link from "next/link";
import useGetSearchMovie from "@/query/searchMovie";
import { useSearchContext } from "@/hooks/useSearchContext";

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
  const { searchQuery, setSearchQuery } = useSearchContext(); // Access search context
  const { data, isLoading, error } = useGetSearchMovie(searchQuery); // Fetch data based on the search query
  return (
    <>
      {/* Search input */}
      <Flex justify="center" style={{ marginBottom: "20px" }}>
        <Input
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query
          style={{ width: "300px" }}
          allowClear
        />
      </Flex>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error fetching data: {error.message}</p>}

      {/* Display search results in a transparent box under the search input */}
      {searchQuery && data && (
        <div
          style={{
            position: "absolute",
            backgroundColor: "rgba(255, 255, 255, 0.9)", // Transparent background
            borderRadius: "4px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
            zIndex: 1,
            marginTop: "5px",
            width: "100%",
          }}
        >
          {data.map((movie) => (
            <div key={movie.id} style={{ padding: "10px", cursor: "pointer" }}>
              {movie.title}
            </div>
          ))}
        </div>
      )}

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
    </>
  );
};

export default Content;
