const { Pool } = require('pg');

// Configuración para desarrollo local y producción
const poolConfig = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: true
  }
};

// Para desarrollo local puedes desactivar SSL si es necesario
if (process.env.NODE_ENV === 'development') {
  poolConfig.ssl = false;
}

const pool = new Pool(poolConfig);

module.exports = {
  query: (text, params) => pool.query(text, params),
  getClient: async () => {
    const client = await pool.connect();
    const query = client.query;
    const release = client.release;
    
    // Set a timeout of 5 seconds
    const timeout = setTimeout(() => {
      console.error('A client has been checked out for more than 5 seconds!');
    }, 5000);
    
    // Monkey patch the query method
    client.query = (...args) => {
      clearTimeout(timeout);
      return query.apply(client, args);
    };
    
    client.release = () => {
      clearTimeout(timeout);
      client.release = release;
      return release.apply(client);
    };
    
    return client;
  }
};