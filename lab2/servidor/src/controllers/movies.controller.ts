import type { Request, Response } from "express";
import { getMovies } from "../services/service.movies.ts";

export const getMoviesController = async (req: Request, res: Response) => {

  try {
    if(Object.keys(req.body ?? {}).length === 0){
      const movies = await getMovies();
      res.json(movies);
    }
    else{
      
    }
    
  } catch (error) {
    console.error("Error al obtener películas", error);
    res.status(500).json({ error: "Error al obtener películas" });
  }
};