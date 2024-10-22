"use client";
import { searchMovie } from "@/services/movie/search";
import { useQuery } from "@tanstack/react-query";

const useGetSearchMovie = (query: any) => {
  const result = useQuery({
    queryKey: ["SearchMovie", query], // Unique key based on the search term
    queryFn: () => searchMovie(query), // Pass the query parameter to the search function
    enabled: !!query, // Only run the query if the query is not empty
  });

  return {
    ...result,
    data: result?.data,
  };
};

export default useGetSearchMovie;
