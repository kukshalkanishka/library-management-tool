const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const view = require("ejs");
const { logger } = require("./src/utils/utils");
const handlers = require("./src/handlers/handlers");

const PORT = process.env.PORT || 8080;
const app = new express();

app.use(logger);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(handlers.redirect);
app.use(express.static("build"));
app.set("views", __dirname + "/build");
app.engine("html", view.renderFile);
app.set("view engine", "html");

app.post("/login", handlers.loginHandler);
app.post("/signup", handlers.signUpHandler);
app.post("/addBook", handlers.addBookHandler);
app.post("/todos", handlers.getBooksHandler);
app.patch("/toggleTodoState", handlers.toggleTodoStateHandler);
app.delete("/todo", handlers.deleteTodoHandler);

app.get("*", (req, res) => {
  res.render("index.html");
});

app.listen(PORT, () => console.log("server is running on - ", PORT));
