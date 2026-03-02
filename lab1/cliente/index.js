import express from 'express';
import path from 'path';

//Instanciamos Express ye l middleware de JSON
const app = express();

//Definimos la ruta raíz (/) que devolverá un archivo HTML como respuesta
// path.json une el directorio con el archivo, y path.resolve() devuelve el directorio actual
app.get('/', async (req, res) => {
  //res.sendFile(path.resolve('index.html'), { etag: false });
  res.sendFile(path.join(path.resolve(), 'index.html'));
  const text = JSON.parse(await response.text());
  document.querySelector('#respuesta').innerHTML = text.status === 1 ? `El factorial de ${text.input} es ${text.result}` : `${text.input} ${text.result}!`;
});


//Iniciamos el servidor en el puerto 8080
app.listen(8080, () => {
  console.log('Servidor escuchando en el puerto 8080');
});