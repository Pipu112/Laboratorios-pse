import type { Request, Response } from "express";
import { getCinemas, getMoviesFromCinema } from "../services/service.cinemas.ts";

export const getCinemasController = async (req: Request, res: Response) => {
  try {
    if(Object.keys(req.body ?? {}).length === 0){
        const cinemas = await getCinemas();
        res.json(cinemas);
    }
    if(req.body?.withCatalog == true){
        const cinemas = await getMoviesFromCinema(req.body);
        res.json(cinemas);
    }
  } catch (error) {
    console.error("Error al obtener cines", error);
    res.status(500).json({ error: "Error al obtener cines" });
  }
};