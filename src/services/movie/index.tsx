import axios from "axios";

export const fetchMovie = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=a4057206034f73bb33ead5d101b171ab`
  );
  return response.data;
};
