import express from 'express';
import {factorial} from './functions';
import cors from 'cors';
  
import { prisma } from '@prisma/';

const app = express();
const PORT = 3000;

// Middleware para parsear JSON en el body de las requests
app.use(express.json());

app.use(cors({
  origin: [
    "http://localhost:8080",
  ],
  methods: ["GET", "POST"],
}));

app.get('/', (req:any, res:any) => {
  res.send('Soy un servidor respondiendo!');
});


app.get('/factorial/:num', (req:any, res:any) => {
  const num = Number(req.params.num);

    if (!Number.isInteger(num) || num < 0) {
        return res.status(400).send("Ingresa un entero positivo");
    }

    return res.send(`El factorial de ${num} es ${factorial(num)}`);
});


app.post('/factorial2',  async (req:any, res:any) => {
  console.log(req.body);
  const { numero, nombreUsuario } = req.body;
  const status = isNaN(numero) ? 0 : 1;
   const n = Number(numero);
  
    if (!Number.isInteger(n) || n < 0) {
    return res.status(400).json({ error: "El campo 'numero' debe ser un entero >= 0" });
  }

  if(status == 0) res.status(500).json({
    status,
    input: req.body.numero,
    result: 'no es un numero!'
  });

  const resultado = factorial(Number(numero));
  try {
    const nuevoRegistro = await prisma.factorial.create({
      data: {
        base: Number(numero),
        usuario: nombreUsuario || "Anónimo"
      }
    });

    res.status(200).json({
      status: 1,
      input: numero,
      result: resultado,
      registro: nuevoRegistro
    });

  } catch (error) {
    res.status(500).json({
      error: "Error guardando en la base de datos"
    });
  }

});

app.listen(PORT, () => {
  console.log(`Server encendido en el puerto ${PORT}`);
});

