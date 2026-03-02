import express from 'express';
import {factorial} from './functions';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Middleware para parsear JSON en el body de las requests
app.use(express.json());
app.use(cors());

app.get('/', (req:any, res:any) => {
  res.send('Soy un servidor respondiendo!');
});


app.get('/factorial/:num', (req:any, res:any) => {
  res.send(`El factorial de ${req.params.num} es ${factorial((req.params.num))}`);
});


app.post('/factorial2', (req:any, res:any) => {
  console.log(req.body);
  const status = isNaN(req.body.numero) ? 0 : 1;
  if(status == 0) res.status(500).json({
    status,
    input: req.body.numero,
    result: 'no es un numero!'
  });
  else res.status(200).json({
    status,
    input: req.body.numero,
    result: factorial(req.body.numero)  
    const nuevoRegistro = await prisma.Factorial.create({
    data: {
      base: numero,
      usuario: nombreUsuario || "Anónimo"
    }
  })
  });

});

app.listen(PORT, () => {
  console.log(`Server encendido en el puerto ${PORT}`);
});

