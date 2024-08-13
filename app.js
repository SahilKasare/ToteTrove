const express = require("express");
const app = express();
const CookieParser = require("cookie-parser");
const path = require("path");
const indexRouter = require("./routes/indexRouter");
const ownersRouter = require("./routes/ownersRouter");
const productsRouter = require("./routes/productsRouter");
const usersRouter = require("./routes/usersRouter");
const ejs = require("ejs");
const db = require("./config/mongoose-connection");
const flash = require("connect-flash");
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(CookieParser());
app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static(path.join(__dirname, "views")));
// app.set("views", path.join(__dirname, "views"));
app.set("view engine", ejs);

app.listen(3000);
app.use("/", indexRouter);
app.use("/owners", ownersRouter);
app.use("/products", productsRouter);
app.use("/users", usersRouter);

