const express = require("express");

const app = express();

app.get("/tmdb", async (req, res) => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/week?apikey=628f811dd14b86f8fea17c431c364235"
  );
  res.send({ data: response.data });
  res.send({ message: "Welcome to Node demo 2k19" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started in port ${port}`);
});
