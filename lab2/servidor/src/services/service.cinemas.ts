import type { TheaterDTO, CinemaDTO } from "../dtos/tipado";
import { prisma } from "../db/ls.ts";

export const getCinemas = async () => {
  const cinemas = await prisma.theater.findMany();
  return cinemas.map(mapTheaterToDTO);
};

export const getMoviesFromCinema = async (input: any) => {
    const filtro = mapFiltoBusqueda(input);
  const cinemas = await prisma.theater.findMany({
    where: {
        id: filtro.id
    },
    include: {
        show_timings: {
            include: {
                movie: true
            }
        }
    },
  });
  return cinemas;
};

export const getCinemaHAveFilm = async (input: any) => {
    const filtro = mapFiltoBusqueda(input);
    const cinemas = await prisma.theater.findMany({
    where: {
        show_timings: {
            some: {
                movie_id: filtro.withMovie
            }
        }
    },
        include: {
            show_timings: {
            where: {
                    movie_id: filtro.withMovie
                },
                include: {
                    movie: true
            }
        }
        }
    });
    return cinemas;
};

const mapTheaterToDTO = (theater: any): TheaterDTO => ({
  id: theater.id,
  nombre: theater.name,
  capacidad: theater.capacity
});

const mapFiltoBusqueda = (filtro: any): CinemaDTO => ({
    id: filtro.id,
    withCatalog: filtro.withCatalog,
    withMovie: filtro.withMovie,
    sessionBefore: filtro.sessionBefore,
    sessionAfter: filtro.sessionAfter  
});
