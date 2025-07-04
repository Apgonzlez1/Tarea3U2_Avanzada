const express = require("express");
const router = express.Router();
const { validarRegistro } = require("../validators/registroValidator");
const { registrarUsuario } = require("../controllers/registroController");

router.post("/", validarRegistro, registrarUsuario);

module.exports = router;
