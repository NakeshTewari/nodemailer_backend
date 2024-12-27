const express = require("express");
const app = express();
const router = require("./routes/router");
const cors = require("cors");
<<<<<<< HEAD
const dotenv = require("dotenv");
=======
const dotenv=require("dotenv");
>>>>>>> 109cd982fdf8c973a17af54f754e281363e52c31

dotenv.config();

const port = process.env.PORT || 4000;

app.use(express.json());
<<<<<<< HEAD
app.use(cors());

=======
app.use(
  cors()
);
>>>>>>> 109cd982fdf8c973a17af54f754e281363e52c31
app.use(router);
app.use("/uploads", express.static(__dirname + "/uploads"));

app.listen(port, () => {
  console.log(`server start at port no: ${port}`);
});
