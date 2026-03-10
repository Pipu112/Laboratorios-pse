import type { TheaterDTO } from "../dtos/tipado";
import { prisma } from "../db/ls.ts";
import { TheaterAggregateArgs } from "../generated/prisma/models.ts";

export const getCinemas = async () => {
  const cinemas = await prisma.theater.findMany();
  return cinemas.map(mapCinemaToDTO);
};

const mapCinemaToDTO = (cinema: any): TheaterDTO => ({
  id: cinema.id,
  nombre: cinema.name,
  capacidad: cinema.capacity
});