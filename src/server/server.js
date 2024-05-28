var express = require("express");
var session = require("express-session");
var dotenv = require("dotenv");
var passport = require("passport");
var path = require("path");
require("./auth.js");
const app = express();
// app.use(express.json());
app.use(express.static(path.join(__dirname, "client")));
dotenv.config();

function isLogged(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}
app.use(
  session({
    secret: "anykeyterm",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.sendFile("./client/index.html");
});
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/auth/home",
    failureRedirect: "/auth/google/failure",
  })
);
app.get("/auth/home", isLogged, (req, res) => {
  var name = req.user.displayName;
  res.send(`hello ${name}!`);
});
app.get("/auth/google/failure", (req, res) => {
  res.send(`Hey There, Some Thing went Wrong. Try Later!`);
});

port = process.env.PORT;
app.listen(port, () => {
  console.log(`app is Running on ${port}`);
});
