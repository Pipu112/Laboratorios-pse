import type { Request, Response } from "express";
import { getMovies } from "../services/service.movies.ts";

export const getMoviesController = async (req: Request, res: Response) => {
  try {
    const movies = await getMovies();
    res.json(movies);
  } catch (error) {
    console.error("Error al obtener películas", error);
    res.status(500).json({ error: "Error al obtener películas" });
  }
};