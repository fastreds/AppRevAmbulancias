// api/db-test.js
require('dotenv').config();
const { Pool } = require('pg');

export default async function handler(req, res) {
  try {
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false }
    });

    const result = await pool.query('SELECT NOW() as hora_actual');
    await pool.end();
    
    res.status(200).json({
      message: "Conexión exitosa a Neon!",
      hora: result.rows[0].hora_actual
    });
  } catch (error) {
    res.status(500).json({
      error: "Error de conexión",
      detalles: error.message
    });
  }
}