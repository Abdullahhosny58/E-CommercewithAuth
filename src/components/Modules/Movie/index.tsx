"use client";

import useGetMovie from "@/query/movie";
import React from "react";
import { Card, Col, Row, Spin, Typography, Alert } from "antd";

const { Title, Paragraph } = Typography;

const Movie = () => {
  const { data, error, isLoading } = useGetMovie();

  if (isLoading) return <Spin size="large" tip="Loading..." />;
  if (error) return <Alert message="Error loading movies" type="error" />;

  return (
    <div>
      <Title level={2}>Movies</Title>
      <Row gutter={16}>
        {data?.results?.map((movie: any) => (
          <Col span={8} key={movie.id}>
            <Card
              hoverable
              cover={
                <img
                  alt={movie.title}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />
              }
            >
              <Card.Meta
                title={movie.title}
                description={<Paragraph>{movie.overview}</Paragraph>}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Movie;
