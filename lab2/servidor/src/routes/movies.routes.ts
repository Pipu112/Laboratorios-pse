import { Router } from "express";
import { getMoviesController } from "../controllers/movies.controller.ts";

const router = Router();

router.get("/peliculasDisponibles", getMoviesController);

export default router;