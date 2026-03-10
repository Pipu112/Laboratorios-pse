import "dotenv/config";
import express from "express";
import cors from "cors";

import moviesRoutes from "./routes/movies.routes";
import cinemasRoutes from "./routes/cinemas.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", moviesRoutes);

app.use("/", cinemasRoutes);

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});