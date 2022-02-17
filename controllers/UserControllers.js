const database = require('../database');
class UserController {
  async create(user) {
    const results = await database.insert('user', user);
    console.log(results);
    return results;
  }

  async readAll() {
    const users = await database.query('SELECT * FROM user');

    return users;
  }

  async readOne(id) {
    const user = await database.query('SELECT * FROM user WHERE id=' + id);
    return user;
  }

  async delete(id) {
    const user = await database.del('user', id);
    return user;
  }
}

module.exports = UserController;
