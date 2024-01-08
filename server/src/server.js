const express = require("express");
const app = express();
let PORT = 5000;
const sendMail = require("./Controller/controller")


app.get("/", (req, res) => {
  res.send("I am a server");
});

app.get("/mail", sendMail);

const start = async () => {
  try {
    app.listen(PORT,()=>{
      console.log(`server is running on port number ${PORT}`);
    });
  } catch (error) {}
};

start();
