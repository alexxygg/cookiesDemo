const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");

app.use(cookieParser("THIS IS MY SECRET"));

app.get("/greet", (req, res) => {
  const { name = "Anonymous", age, location } = req.cookies;
  res.send(`Hey there ${name}, who's ${location} treating you today?`);
});

app.get("/register", (req, res) => {
  res.cookie("name", "George");
  res.cookie("age", 58);
  res.cookie("location", "California");
  console.log(req.cookies);
  res.send("DATA SAVED FOR YOUR NEXT VISIT");
});

app.get("/sendsignedcookie", (req, res) => {
  res.cookie("fruit", "orange", { signed: true });
  console.log(req.cookies);
  console.log(req.signedCookies);
  res.send("DONE, FRUIT COOKIE SIGNED");
});

// app.get("/seesignedcookies", (req, res) => {
//   console.log(req.cookies);
//   console.log(req.signedCookies);
//   res.send("DONE");
// });

app.listen(3200, () => {
  console.log("PORT 3200 ACTIVE");
});
