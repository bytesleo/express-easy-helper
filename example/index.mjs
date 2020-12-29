import express from "express";
import api from "../dist/bundle.js";
const app = express();

app.get("/", function (req, res) {
  return api.success(res, { hello: "world" });
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
