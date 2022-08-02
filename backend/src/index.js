const express = require("express");
const connect = require("./configs/db");
const userController = require("./controllers/userController");
const productController = require("./controllers/productController");

const { register,login} = require("./controllers/authController");
const app = express();


app.use(express.json());

app.use("/users", userController);

app.post("/register", register);

app.post("/login", login);

app.use("/products", productController);



app.listen(7000, async () => {
  try {
    await connect();
    console.log("listening on port 7000");
  } catch (err) {
    console.log(err.message);
  }
});