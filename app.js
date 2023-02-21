const express = require("express");
const app = express();
const connectDB = require("./db/connect");
require("dotenv").config(); // Invoke the .env files
const notfound = require('./middleware/not-found')

// middleware
app.use(express.static('./public'))
app.use(express.json()); // In order to access the req.body

const port = process.env.PORT || 3000;

const tasks = require("./routes/tasks");

app.use("/api/v1/tasks", tasks);
app.use(notfound) // It is used to handle 404 Errors

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, (req, res) => {
      console.log("Server is Listening");
    });
  } catch (error) {
    console.log(error);
  }
};

start();


