const express = require("express");
const router = express.Router();

const controller = require("../controller/escolhaController");

router.post("/salvar", controller.salvar);
router.get("/historico", controller.listar);

module.exports = router;