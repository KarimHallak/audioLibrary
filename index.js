const express = require("express");

const app = express();
require("dotenv").config();

const databaseConnection=require('./src/config/database.config')
databaseConnection()
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//endpoints

app.use('/api',require('./src/album/album.route'))
app.use('/api',require('./src/category/category.route'))

app.use("*", (_, res) => {
  res.status(404).json({ msg: "problem man" });
});

app.listen(process.env.PORT, () => {
  console.log(`working in port`+process.env.PORT);
});
