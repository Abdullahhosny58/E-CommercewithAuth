import { useGetAllCategories } from "@/query/categories/getAllCategories";
import { RootState } from "@/rtk/store";
import { Button, Row } from "antd";
import Link from "next/link";
import { useSelector } from "react-redux";

const Sidebar: React.FC = () => {
  const { data, error, isLoading } = useGetAllCategories();

  console.log("categories", data);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Row style={{ flexDirection: "column", marginLeft: "9%", width: "150px" }}>
      {data.length > 0 ? (
        data.map((category) => (
          <Link key={category} href={`/categories/${category}`} passHref>
            <Button
              style={{ textTransform: "capitalize", marginBottom: "10px" }}
              type="text"
            >
              {category}
            </Button>
          </Link>
        ))
      ) : (
        <p>No categories found</p>
      )}
    </Row>
  );
};

export default Sidebar;
