import axios from "axios";

export const fetchMovieById = async (movieId: string) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=a4057206034f73bb33ead5d101b171ab`
  );
  return response.data;
};
