let usersData = [];
const users = document.querySelector('#users tbody');

// funcion para elminar registro
function eliminar(id) {
  fetch('/' + id, {
    method: 'DELETE',
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      usersData = data;
      renderUsers();
    });
}

fetch('/api/users')
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    usersData = data;
    renderUsers();
  });

function renderUsers() {
  users.innerHTML = '';
  usersData.forEach((user) => {
    users.innerHTML =
      users.innerHTML +
      `
        <tr>
          <td class='id'>${user.id}</td>
          <td>${user.username}</td>
          <td>${user.email}</td>
          <td class='acciones' onclick="location.href='/update/?id=${user.id}'"><button><i class="bi bi-pencil-square"></i>Editar</button><button onclick="eliminar(${user.id})"><i class="bi bi-trash3"></i>Eliminar</button></td>
        </tr>
        `;
  });
}
