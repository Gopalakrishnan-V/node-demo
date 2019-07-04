const express = require("express");
const axios = require("axios");

const app = express();

app.get("/tmdb", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=628f811dd14b86f8fea17c431c364235&language=en-US"
    );
    console.log("Response", response);
    // res.send({ data: response.data });
    res.send({ data: response.data });
  } catch (e) {
    console.log("catch", e);
    res.send({ message: "Something went wrong" });
  }

  // res.send({ message: "Welcome to Node demo 2k19" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started in port ${port}`);
});
