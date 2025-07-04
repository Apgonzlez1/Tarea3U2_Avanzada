const { body, validationResult } = require("express-validator");

const validarRegistro = [
  body("nombre").notEmpty().withMessage("Nombre requerido"),
  body("email").isEmail().withMessage("Correo inválido"),
  body("password").isLength({ min: 8 }).withMessage("Mínimo 8 caracteres"),
  body("edad").isInt({ min: 18, max: 99 }).withMessage("Edad entre 18 y 99"),
  body("biografia").isLength({ max: 300 }),
  (req, res, next) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(400).json({ errores: errores.array() });
    }
    next();
  }
];

module.exports = { validarRegistro };
