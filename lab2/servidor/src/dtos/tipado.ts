import { z, ZodType } from "zod";

    export const movies = z.object({
    id: z.number(),
    title: z.string(),
    cast: z.array(z.string()),
    sessionBefore: z.iso.datetime(),
    sessionAfter: z.iso.datetime()
})

export const cinemas = z.object({
    id: z.number(),
    withCatalog: z.boolean(),
    withMovie: z.number().int().positive("El id de la película debe ser un número entero positivo"),
    sessionBefore: z.iso.datetime(),
    sessionAfter: z.iso.datetime()
})

export type MovieDTO = z.infer<typeof movies>;
export type CinemaDTO = z.infer<typeof cinemas>;