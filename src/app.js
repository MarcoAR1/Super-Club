const express = require("express");
const mainRoutes = require("./routes/mainRoutes");
const loginRoutes = require("./routes/loginRoutes");
const session = require("express-session");
const registerRoutes = require("./routes/registerRoutes");

const app = express();
const PORT = 3000;

console.clear();

app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(session({ secret: "ola k ase" }));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/register", registerRoutes);
app.use("/login", loginRoutes);
app.use("/", mainRoutes);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
