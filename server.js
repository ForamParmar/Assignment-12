const express = require("express");
const app = express();
app.use(express.json());
const port = 4000;
const mongoose = require("mongoose");

const userModel = require("./models/user");

mongoose
  .connect("mongodb://localhost:27017/dcs")
  .then(() => console.log("mongo db connected"));

app.get("/", (req, res) => res.send("Hello Fullstack!"));

// Register user
app.post("/api/registration", (req, res) => {
    const newUser = req.body;
    userModel.create(newUser);
    return res.json({ data: "registered successfully" });
  });

// Login user
app.post("/api/login", (req, res) => {
    const { username, password} = req.body;
    userModel.findOne({ username: username}, (err, user) => 
    {
      if(user)
      {
        if(password === user.password ) {
          return res.json({ data: "Login successfully"})
        } else {
          return res.json({ data: "Password did not match!!" });
        }
      } 
      else {
        return res.json({ data: "User does not exist!!" });
      } 
    });
  });

app.listen(port, () => console.log(`server running on port 4000`));