const express = require("express");
const app = express();

app.use(express.static("public"));

app.listen(process.env.PORT || 4242, () => {
  console.log("ready...");
});
