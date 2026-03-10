import type { Request, Response } from "express";
import { getCinemas } from "../services/service.cinemas.ts";

export const getCinemasController = async (req: Request, res: Response) => {
  try {
    const cinemas = await getCinemas();
    res.json(cinemas);
  } catch (error) {
    console.error("Error al obtener cines", error);
    res.status(500).json({ error: "Error al obtener cines" });
  }
};