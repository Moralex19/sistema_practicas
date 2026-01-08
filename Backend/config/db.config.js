const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "freddymorales",
  password: "FreddyMora",
  database: "sigea",
  port: 5432,
  max: 10,
});

pool.on("connect", () => console.log(" Conexión establecida con PostgreSQL"));
pool.on("error", (error) => console.error(" Error en la conexión a PostgreSQL:", error));

module.exports = pool; // 👈 export directo

// Test opcional
(async () => {
  try {
    const result = await pool.query("SELECT NOW()");
    console.log(" PostgreSQL responde:", result.rows[0].now);
  } catch (err) {
    console.error(" Error al probar conexión:", err);
  }
})();
