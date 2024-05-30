const express = require("express");

const app = express();
const PORT = 3311 || process.env.PORT;

app.get("/", (request, response) => {
  console.log("API endpoint utama diakses");
  response.send("ini adalaha route utama");
});

app.listen(PORT, () => {
  console.log("server running on port", PORT);
});
