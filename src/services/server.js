import express from 'express';
import cors from 'cors';
import pool from './db.js';

const app = express();

// Configurar CORS para permitir solicitudes desde localhost:5173
app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use(express.json());

app.post('/save-data', async (req, res) => {
  const { nombre, apellido } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO usuarios (nombre, apellido) VALUES ($1, $2) RETURNING *',
      [nombre, apellido]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error al guardar los datos');
  }
});

app.listen(5000, () => {
  console.log('Servidor escuchando en puerto 5000');
});
