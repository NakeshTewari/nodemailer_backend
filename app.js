const express = require("express");
const app = express();
const router = require("./routes/router");
const cors = require("cors");

const dotenv = require("dotenv");

const dotenv=require("dotenv");


dotenv.config();

const port = process.env.PORT || 4000;

app.use(express.json());

app.use(cors());


app.use(
  cors()
);

app.use(router);
app.use("/uploads", express.static(__dirname + "/uploads"));

app.listen(port, () => {
  console.log(`server start at port no: ${port}`);
});
