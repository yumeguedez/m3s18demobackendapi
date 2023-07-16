const { Router } = require("express");
const {
  obtenerPeliculas,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
} = require("../controllers/movies.controller");

const router = Router();

router.get("/", obtenerPeliculas);

router.post("/", crearUsuario);

router.put("/:id", actualizarUsuario);

router.delete("/:id", eliminarUsuario);

module.exports = router;
