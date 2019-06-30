const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({ message: "Welcome to Node demo" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started in port ${port}`);
});
