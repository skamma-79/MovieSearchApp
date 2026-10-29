export default function MovieCard({ movie }) {
  return (
    <article className="overflow-hidden rounded-lg border border-gray-700 bg-gray-900 text-white">
      <div className="aspect-[2/3] bg-gray-800">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`${movie.title || "Movie"} poster`}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-400">
            No poster available
          </div>
        )}
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold">
          {movie.title || "Untitled movie"}
        </h2>
        <p className="mt-1 text-sm text-gray-400">
          {movie.release_date?.slice(0, 4) || "Release date unavailable"}
        </p>
      </div>
    </article>
  );
}
