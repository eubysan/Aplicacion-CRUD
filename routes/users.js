const express = require('express');
const path = require('path');
const UserController = require('../controllers/UserControllers');

function views(document) {
  return path.join(__dirname, '../', 'views', document);
}
const router = express.Router();
router.get('/', function (peticion, respuesta) {
  return respuesta.sendFile(views('index.html'));
});

// Definiendo el controlador
const userController = new UserController();

// Asignando middleware al router
//router.use('/users')

router.get('/user', function (request, response) {
  return response.sendFile(views('user.html'));
});

router.post('/user', async function (req, response) {
  const users = req.body;
  const user = await userController.create(users);
  // Nos lleva luego a la página principal
  if (user.success) {
    return response.redirect('/');
  } else {
    return response.redirect('/user');
  }
});

//INICIO: vista MOSTRAR usuario por ID ----------------------------------------
router.get('/update/', function (request, response) {
  return response.sendFile(views('user_update.html'));
});

router.get('/api/user/:id', async (req, res) => {
  const id = req.params.id;
  var user = await userController.readOne(id);
  return res.json(user);
});
//FIN: vista MOSTRAR usuario por ID -------------------------------------------

// INICIO: vista UPDATE usuario por ID ----------------------------------------
router.post('/update/', function (request, response) {
  return response.sendFile(views('user_update.html'));
});

router.post('/api/userid/:id', async function (req, response) {
  // const users = req.body;
  const id = req.params.id;
  const user = await userController.updateOne(id);
  console.log(user);
  // Nos lleva luego a la página principal
  if (user.success) {
    return response.redirect('/');
  } else {
    return response.redirect('/update/');
  }
});
//FIN: vista UPDATE usuario por ID -------------------------------------------

router.get('/users', (req, res) => {
  return res.sendFile(views('users.html'));
});

router.get('/api/users', async (req, res) => {
  var users = await userController.readAll();
  return res.json(users);
});

//INICIO: vista ELIMINAR usuario ----------------------------------------
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  var user = await userController.delete(id);
  var users = await userController.readAll();
  return res.json(users);
});
//FIN: vista ELIMINAR usuario ----------------------------------------

module.exports = router;
