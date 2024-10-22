import SingleMovie from "@/components/Modules/SingleMovie";

const MovieId = ({ params }: { params: { movieId: string } }) => {
  return <SingleMovie movieId={params.movieId} />;
};

export default MovieId;
