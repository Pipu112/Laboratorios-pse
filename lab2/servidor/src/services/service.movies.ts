import type { MovieDTO } from "../dtos/tipado";
import { prisma } from "../prisma/prisma.ts";

export const getMovies = async () => {
  return prisma.movie.findMany();
};

const mapMovieToDTO = (movie: any): MovieDTO => ({
  id: movie.id,
  title: movie.name,
  cast: movie.actors,
  sessionBefore: movie.sessionBefore.toISOString(),
  sessionAfter: movie.sessionAfter.toISOString()
});

