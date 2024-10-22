"use client";

import useGetMovieById from "@/query/movie/getSingleMovie"; // Adjust the import path if necessary
import React from "react";

const SingleMovie = ({ movieId }: { movieId: string }) => {
  const { data, error, isLoading } = useGetMovieById(movieId); // Use the hook

  if (isLoading) return <div>Loading...</div>; // Show loading state
  if (error) return <div>Error loading movie</div>; // Handle errors

  return (
    <div>
      <h1>{data?.title}</h1>
      <p>{data?.overview}</p> {/* Display movie overview */}
    </div>
  );
};

export default SingleMovie;
