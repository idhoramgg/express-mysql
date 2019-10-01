const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const connection = require('./config/database')
const app = express()

const userRouter = require('./app/routes/users')

const PORT = process.env.PORT || 3001;

app.use(cors())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json());

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

app.get('/', function (req, res) {
  res.send('welcome Oktober')
})
app.use('/', userRouter)

app.listen(PORT, () => console.log(`serVer is running on http://localhost:${PORT}`))