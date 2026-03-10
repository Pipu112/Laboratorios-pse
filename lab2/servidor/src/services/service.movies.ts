import type { MovieDTO } from "../dtos/tipado";
import { prisma } from "../db/ls.ts";

export const getMovies = async () => {
  const movies = await prisma.movie.findMany();
  return movies.map(mapMovieToDTO);
};

const mapMovieToDTO = (movie: any): MovieDTO => ({
  id: movie.id,
  title: movie.name,
  cast: movie.actors,
  sessionBefore: movie.sessionBefore,
  sessionAfter: movie.sessionAfter
});

