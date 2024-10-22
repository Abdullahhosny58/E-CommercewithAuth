"use client";

import { fetchMovieById } from "@/services/movie/getSingleMovie"; // Adjust the import path if necessary
import { useQuery } from "@tanstack/react-query";

const useGetMovieById = (movieId: string) => {
  const result = useQuery({
    queryKey: ["movie", movieId], // Unique key for caching
    queryFn: () => fetchMovieById(movieId), // Fetch function
    enabled: !!movieId, // Only run if movieId is defined
  });

  return {
    ...result,
    data: result?.data,
  };
};

export default useGetMovieById;
