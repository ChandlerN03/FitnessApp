const mysql = require("mysql");
const express = require('express');
const axios = require("axios");
const cors = require('cors');



const bodyParser = require("body-parser");
const session = require ("express-session");
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

app.get("/member/:username", (req, res) => {
  const username = req.params.username;

  connection.query(
    "SELECT * FROM Member WHERE username = ?",
    [username],
    (err, result) => {
      if (err) {
        res.status(500).send({ err: err });
      }

      if (result.length > 0) {
        const memberInfo = result[0];
        res.send({ memberInfo });
      } else {
        res.status(404).send({ message: "Member not found" });
      }
    }
  );
});

app.get("/workout_logs/:username", (req, res) => {
  const username = req.params.username;

  connection.query(
    "SELECT * FROM Workout_Log WHERE username = ?",
    [username],
    (err, result) => {
      if (err) {
        console.error("Error fetching workout logs:", err);
        return res.status(500).send({ message: "Internal Server Error" });
      }

      console.log("Workout logs fetched successfully:", result);
      return res.send({ workoutLogs: result });
    }
  );
});


app.listen(3000, () =>{
  console.log("Running server");
})

