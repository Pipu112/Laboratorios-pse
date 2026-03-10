import { Router } from "express";
import { getCinemasController } from "../controllers/cinema.controllers.ts";

const router = Router();

router.get("/cines", getCinemasController);

export default router;