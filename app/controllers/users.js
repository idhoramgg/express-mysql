const connection = require('../../config/database');
const bcrypt = require('bcrypt')

module.exports = {
  getAllUser: (req, res) => {
    connection.query('SELECT * from users', (error, result, fields) => {
      if (error) {
        res.status(500).send({
          message: 'error getting users',
          error
        })
      } else {
        res.status(200).send({
          message: `Users`,
          result,

        })
      }
    })
  },
  deleteUser: (req, res) => {
    connection.query('DELETE FROM users where id = ?',
      [req.params.id], (error, result, fields) => {
        if (error) {
          res.status(500).send({
            message: 'error delete users',
            error
          })
        } else {
          res.status(200).send({
            message: `Users delete`,
            result,

          })
        }
      })
  },
  updateUser: (req, res) => {
    connection.query('UPDATE users SET name = ?, email = ?, password = ? where id = ?',
      [req.body.name, req.body.email, req.body.password, req.params.id], (error, result, fields) => {

        if (error) {
          res.status(500).send({
            message: 'error update users',
            error
          })
        } else {
          res.status(200).send({
            message: 'Users deleted',
            result,

          })
        }
      })
  },
  addUser: (req, res) => {
    bcrypt.hash(req.body.password, 10, function (err, hash) {
      if (err) {
        res.send({
          message: 'password is invalid',
          err
        })
      } else {
        connection.query('INSERT INTO users(name, email, password, status) values(?,?,?,?)',
          [req.body.name, req.body.email, hash, req.body.status], (error, result, fields) => {

            if (error) {
              res.status(500).send({
                message: 'error update users',
                error
              })
            } else {
              res.status(200).send({
                message: 'Users deleted',
                result,

              })
            }
          })
        }
    })
  }
}


/*
  CRUD METHOD CONTROLLERS - MYSQL
*/