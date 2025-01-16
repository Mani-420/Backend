const { faker } = require ('@faker-js/faker');
const mysql = require('mysql2');
const express= require("express");
const app = express();
const PORT = 8080;

// Create the connection to database---------------------------
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'manitahir420',
});

// Fake Data*---------------------------
let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// // Data Insertion---------------------------
// let q = "INSERT INTO practice (id, username, email, password) VALUES ?";
// let data = [];
// for (let i = 1; i <= 100; i++){
//   data.push(getRandomUser());
// }
// try{
//   connection.query(q, [data], (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   });
// } catch(err){
//   console.log(err);
// }

// Ending Connection---------------------------
// connection.end();

// Routes---------------------------
// Home Page Route---------------------------

app.get("/", (req, res) => {
  let q = "SELECT count(*) from practice";
  try{
    connection.query(q, (err, result) => {
      if (err) throw err;
      console.log(result[0]["count(*)"]);
      res.send(result[0]);
    });
  } catch(err){
    console.log(err);
    res.send("Some error in database");
  }
});


// Port Listener---------------------------
app.listen(PORT, () => {
  console.log("Server is Listening");
})