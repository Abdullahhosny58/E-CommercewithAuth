import axios from "axios";

export const searchMovie = async (query: any) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie`,
    {
      params: {
        api_key: "a4057206034f73bb33ead5d101b171ab",
        query: query,
      },
    }
  );
  return response.data;
};
