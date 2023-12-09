const mysql = require("mysql");
const express = require('express');
const axios = require("axios");
const cors = require('cors');



const bodyParser = require("body-parser");
const session = require ("express-session");
// Enable CORS for all routes
//onst bodyParser = require("body-parser");

const app = express();
//const port = 3000;

app.use(express.json());
app.use(cors());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "kavunkal",
  database: "FitnessApp",
  connectionLimit: 10
});

app.post("/register", (req, res) => {
  const { Fullname, Age, Gender,DOB, Height, Weight, Email, PhoneNumber, Username, Password } = req.body;
  console.log("Request payload:", req.body);

  connection.query(
    "INSERT into Member (Full_name, age, gender, DOB, height, weight, email, phone_number, username, password) VALUES (?, ?,?,?, ?, ?, ?, ?, ?, ?)",
    [Fullname, Age, Gender, DOB, Height, Weight, Email, PhoneNumber, Username, Password],
    (err, result) => {
      if (err) {
        console.error("Error during registration:", err);
        return res.status(500).send({ message: "Internal Server Error" });
      }

      console.log("Registration successful:", result);
      return res.send({ message: "User registered successfully", result });

    }
  );
});


app.post("/login",(req,res)=>{
  const username = req.body.username;
  const password = req.body.password;

  connection.query(
    "SELECT * from Member where username = ? and password = ?",
    [username,password],
    (err,result) => {
      if (err){
        res.send({err:err});
      }
      
      if (result.length>0){
        res.send(result);}
        else{
        res.send({message: "Wrong username/password combination"});
      }
    }
  );
})

app.listen(3000, () =>{
  console.log("Running server");
})

