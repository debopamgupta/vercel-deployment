const express = require("express");
const app = express();

app.get("/testapi", (req, res) => {
  console.log("REQUEST TO THE API CAME IN!");
  res.json({
    success: true,
    message: "HELLO 😊😀😉😍😄🤣😃",
  });
});

app.use(express.static("public"));

app.listen(process.env.PORT || 4500, () => {
  if (process.env.PORT)
    console.log(`sweet server running on http://localhost:${process.env.PORT}`);
  else console.log(`sweet server running on http://localhost:4500`);
});
