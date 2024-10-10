const express = require("express");
const app = express();
const dotenv = require("dotenv");
const userRoute = require("./routes/users");
const cors = require("cors");

dotenv.config();

app.use(cors());

app.use(express.json());

app.use("/api/users", userRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});
