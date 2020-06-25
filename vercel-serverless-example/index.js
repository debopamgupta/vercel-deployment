const express = require("express");
const app = express();
const api = require("./api/index");
const hello = require("./api/hello");
const json = require("./api/json");

app.use(express.static("public"));

app.get("/api", api);
app.get("/api/hello", hello);
app.get("/api/json", json);
app.listen(process.env.PORT || 4242, () => {
  console.log("ready...");
});
