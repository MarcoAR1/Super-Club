<<<<<<< HEAD
const express = require("express");
const mainRoutes = require("./routes/mainRoutes");
const loginRoutes = require("./routes/loginRoutes");
const session = require("express-session");
=======
const express = require('express')
const mainRoutes = require('./routes/mainRoutes')
const { check, validationResult, body } = require("express-validator");
const registerRoutes = require("./routes/registerRoutes");
>>>>>>> 4be69d5598c87e3ab2b59d7ef53bc97dac33bb97

const app = express();
const PORT = 3000;

console.clear();

app.set("view engine", "ejs");
<<<<<<< HEAD
app.set("views", "src/views");

app.use(session({ secret: "ola k ase" }));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
=======

//validacion
app.use(express.urlencoded());
app.use(express.json());


app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', 'src/views')
app.use("/register", registerRoutes)
app.use('/', mainRoutes)
>>>>>>> 4be69d5598c87e3ab2b59d7ef53bc97dac33bb97

app.use("/login", loginRoutes);
app.use("/", mainRoutes);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
