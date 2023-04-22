const express = require('express')
const app = express()
const mongoose = require('mongoose')
const UserModel = require('./models/Users')

app.use(express.json())

mongoose.connect("mongodb+srv://kevinalexanderduran:mississippi8@cluster0.dixqgal.mongodb.net/users?retryWrites=true&w=majority")
app.get("/getUsers", (req, res) => {
    UserModel.find({})
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
});

app.post("/createUser", async (req,res) => {
    const user = req.body
    const newUser = new UserModel(user)
    await newUser.save();
    res.json()
})

app.listen(3001,()=>{
    console.log("SERVER RUNNING...")
})