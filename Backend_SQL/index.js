const { faker, tr } = require ('@faker-js/faker');
const mysql = require('mysql2');
const express= require("express");
const app = express();
const PORT = 8080;
const path = require("path");
const { render } = require('ejs');
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

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

// Routes----------------------------------------------------

// Home Page Route---------------------------
app.get("/", (req, res) => {
  let q = "SELECT count(*) from practice";
  try{
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs", {count});
    });
  } catch(err){
    console.log(err);
    res.send("Some error in database");
  }
});

// GET/user Route---------------------------
app.get("/user", (req, res) => {
  let q = "SELECT * from practice";
  try{
    connection.query(q, (err, result) => {
      if (err) throw err;
      let users = result;
      res.render("show_users.ejs", {users});
    });
  } catch(err){
    console.log(err);
    res.send("Some error in database");
  }
});

// GET/user/:id/edit Route---------------------------
app.get("/user/:id/edit", (req, res) => {
  let {id} = req.params;
  let q = `SELECT * FROM practice WHERE id='${id}'`;
  try{
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit_user.ejs", {user});
    });
  } catch(err){
    console.log(err);
    res.send("Some error in database");
  }
});

// GET/user/:id/edit Route---------------------------
app.patch("/user/:id", (req, res) => {
  let {id} = req.params;
  let {password: formPass, username: newUsername} = req.body;
  let q = `SELECT * FROM practice WHERE id='${id}'`;
  try{
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if(formPass != user.password){
        res.send("Wrong Password");
      }
      else{
        let q2 = `UPDATE practice SET username='${newUsername}' WHERE id='${id}'`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("/user");
        });
      }
    });
  } catch(err){
    console.log(err);
    res.send("Some error in database");
  }
});

// POST Request (/user/new) Route---------------------------
app.get("/user/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/user/new", (req, res) => {
  let { username, email, password } = req.body;
  let id = uuidv4();
  //Query to Insert New User
  let q = `INSERT INTO practice (id, username, email, password) VALUES ('${id}','${username}','${email}','${password}') `;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      console.log("added new user");
      res.redirect("/user");
    });
  } catch (err) {
    res.send("Some error in database");
  }
});

// POST Request (/user/new) Route---------------------------
app.get("/user/:id/delete", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM practice WHERE id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("delete.ejs", { user });
    });
  } catch (err) {
    res.send("some error with DB");
  }
});

app.delete("/user/:id/", (req, res) => {
  let { id } = req.params;
  let { password } = req.body;
  let q = `SELECT * FROM practice WHERE id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];

      if (user.password != password) {
        res.send("WRONG Password entered!");
      } else {
        let q2 = `DELETE FROM practice WHERE id='${id}'`; //Query to Delete
        connection.query(q2, (err, result) => {
          if (err) throw err;
          else {
            console.log(result);
            console.log("deleted!");
            res.redirect("/user");
          }
        });
      }
    });
  } catch (err) {
    res.send("some error with DB");
  }
});


// Port Listener---------------------------
app.listen(PORT, () => {
  console.log("Server is Listening");
})