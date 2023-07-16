const { users } = require("../database/db");
const { v4: uuid } = require("uuid");

const obtenerUsusarios = (req, res) => {
  return res.json({
    ok: true,
    msg: "Usuarios obtenidos",
    data: users,
  });
};

const crearUsuario = (req, res) => {
  const { user_name, password } = req.body;
  const user = {
    id: uuid(),
    //Se puede omitir asi si el nombre se llamará igual a la variable
    user_name,
    password: password,
  };

  users.push(user);

  return res.json({
    ok: true,
    msg: "Usuario creado",
    data: user,
  });
};

const actualizarUsuario = (req, res) => {
  const { id } = req.params;
  const { user_name, password } = req.body;

  const user = users.find((user) => user.id === id);
  user.user_name = user_name;
  user.password = password;

  return res.json({
    ok: true,
    msg: "Usuario actualizado",
    data: user,
  });
};

const eliminarUsuario = (req, res) => {
  const { id } = req.params;

  const user = users.find((user) => user.id === id);
  const index = users.indexOf(user);
  users.splice(index, 1);

  return res.json({
    ok: true,
    msg: "Usuario eliminado",
    data: user,
  });
};

module.exports = {
  obtenerUsusarios,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
};
