import { z, ZodType } from "zod";

const movies = z.object({
    id: z.number(),
    title: z.string(),
    cast: z.array(z.string()),
    sessionBefore: z.iso.datetime(),
    sessionAfter: z.iso.datetime()
})

const cinemas = z.object({
    id : z.number(),
    withCatalog: z.boolean(),
    withMovie: z.number().int().positive("El id de la película debe ser un número entero positivo"),
    sessionBefore: z.iso.datetime(),
    sessionAfter: z.iso.datetime()
})

const TheaterSchema = z.object({
  id: z.number().int().optional(),
  nombre: z.string().max(50),
  capacidad: z.number().int().positive(),
});

const TimeslotSchema = z.object({
  id: z.number().int().optional(),
  start_time: z.string().regex(/^\d{2}:\d{2}$/, "Formato HH:mm"),
  end_time: z.string().regex(/^\d{2}:\d{2}$/, "Formato HH:mm"),
});

const ShowTimingSchema = z.object({
  id: z.number().int().optional(),
  day: z.number().int(),
  theater_id: z.number().int(),
  movie_id: z.number().int(),
  timing_id: z.number().int(),
});

const SalesSchema = z.object({
  id: z.number().int().optional(),
  amount: z.number().nonnegative(),
  show_timing_id: z.number().int(),
});

const PointsSchema = z.object({
  id: z.number().int().optional(),
  cid: z.number().int(),
  points: z.number().int(),
});

// --- Extracción de Tipos (Inferencia) ---
// Esto crea automáticamente los tipos de TypeScript a partir de los esquemas de Zod

export type MovieDTO = z.infer<typeof movies>;
export type TheaterDTO = z.infer<typeof TheaterSchema>;
export type TimeslotDTO = z.infer<typeof TimeslotSchema>;
export type ShowTimingDTO = z.infer<typeof ShowTimingSchema>;
export type SalesDTO = z.infer<typeof SalesSchema>;
export type PointsDTO = z.infer<typeof PointsSchema>;
export type CinemaDTO = z.infer<typeof cinemas>;