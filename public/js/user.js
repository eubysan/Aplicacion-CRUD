const valores = window.location.search;
// mostramos los valores en consola
// console.log(valores);
// resultado
// ?id=6

// creamos la instancia
const urlParams = new URLSearchParams(valores);

// accedemos a los valores
let id = urlParams.get('id');

const nombreInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');

fetch('/api/user/' + id)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    nombreInput.value = data[0].username;
    emailInput.value = data[0].email;
  });
