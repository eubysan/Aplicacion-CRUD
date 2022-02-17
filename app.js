const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3050;
// se importa las rutas
const userRoutes = require('./routes/users');
// se usa las rutas

// se define la carpeta de archivos estaticos public
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); // Cada vez que se haga uso de la app, se ejecute express.urlencoded()

app.use(userRoutes);

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
