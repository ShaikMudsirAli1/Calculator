const express = require("express");
//For Calculating install npm body-parser package in terminal: type this command to npm install body-parser package
const bodyParser = require("body-parser");

const app = express(); //set up new app using express module
app.use(bodyParser.urlencoded({ extended: true })); //when we trying to parse data that comes from an html form we use urlencoded

app.get("/home", function (req, res) {
  //call back function
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  // console.log("Thanks for posting that");
  //console.log(req.body);//give the  form data in the console
  //console.log(req.body.num1);//we can tap into specific input
  var num1 = Number(req.body.num1); //Number method add two numbers instead of appending 3+4 34 to add 3+4=7
  var num2 = Number(req.body.num2);

  result = num1 + num2;
  res.send("The result of the calculation is : " + result);
});

app.listen(3000, function () {
  //spin up the server
  console.log("Server successfully started on port 3000."); //3000 is common port when people are developing locally.
});
