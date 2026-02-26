const express = require("express");
const controller = require("./controller");

const router = express.Router();

router.post("/usuarios", controller.criarUsuario);
router.get("/usuarios", controller.listarUsuarios);

module.exports = router;