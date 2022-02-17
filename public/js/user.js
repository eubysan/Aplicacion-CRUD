const valores = window.location.search;
// mostramos los valores en consola
// console.log(valores);
// resultado
// ?id=6

// creamos la instancia
const urlParams = new URLSearchParams(valores);

// accedemos a los valores
let id = parseInt(urlParams.get('id'));
const nombreInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const idInput = document.querySelector('#id');

fetch('/api/user/' + id)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    idInput.value = data[0].id;
    nombreInput.value = data[0].username;
    emailInput.value = data[0].email;
  });

// actualizar registro
fetch('/api/userid/' + id, {
  method: 'POST',
  body: JSON.stringify({
    id: idInput.value,
    username: nombreInput.value,
    email: emailInput.value,
  }),
  headers: {
    'Content-Type': 'application/json', // Y le decimos que los datos se enviaran como JSON
  },
})
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .catch((error) => console.error('Error:', error))
  .then((res) => console.log('Success:', res));
