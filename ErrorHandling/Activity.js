const express = require("express");
const app = express();

const ExpressError = require("./ExpressError");

app.get("/admin", (req, res) => {
  throw new ExpressError(403, "Access to admin is forbidden");
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something went wrong" } = err;
  res.status(statusCode).send(message);
});

app.listen(8080, () => console.log("Server running on port 8080"));
