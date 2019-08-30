var mysql      = require('mysql');
module.exports = () => {
  return mysql.createConnection({
    host     : 'localhost',
    user     : 'monica',
    password : '123',
    database : 'visibilidad'
  });
}

