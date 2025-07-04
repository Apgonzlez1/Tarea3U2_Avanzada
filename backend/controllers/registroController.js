const pool = require("../db/db");

const registrarUsuario = async (req, res) => {
  const { nombre, email, password, edad, biografia, rol } = req.body;

  try {
    const emailExistente = await pool.query("SELECT * FROM usuarios WHERE email = $1", [email]);
    if (emailExistente.rows.length > 0) {
      return res.status(400).json({ message: "Correo ya registrado" });
    }

    await pool.query(
      "INSERT INTO usuarios (nombre, email, password, edad, biografia, rol) VALUES ($1, $2, $3, $4, $5, $6)",
      [nombre, email, password, edad, biografia, rol]
    );

    res.status(201).json({ message: "Usuario registrado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

module.exports = { registrarUsuario };
