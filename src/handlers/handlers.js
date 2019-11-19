const {
  insertQuery,
  executeQuery,
  executeSignUpQuery,
  toggleTodoStateQuery,
  deleteQuery
} = require("../utils/dbUtils");

const restrictedURLsWhenLoggedIn = ["/", "/login.html", "/signup.html"];

const restrictedURLsWhenNotLoggedIn = ["/home"];

const {TABLES, LABLES} = require("../constants/constants");

const isLoggedIn = username => {
  return username !== undefined;
};

const signUpHandler = async (req, res) => {
  const {username, password} = req.body;
  const signUpStatus = await executeSignUpQuery(username);
  if (signUpStatus.error) {
    return res.send(JSON.stringify(signUpStatus.message));
  }
  await insertQuery(TABLES.todoUsers, {username, password});
  res.redirect("/login");
};

const loginHandler = async (req, res) => {
  const {username, password} = req.body;
  const query = `select * from ${TABLES.todoUsers} where ${TABLES.todoUsers}.username="${username}" AND ${TABLES.todoUsers}.password="${password}";`;
  const result = await executeQuery(query);
  if (result.length) {
    res.cookie("username", username);
    return res.redirect("/home");
  }
  return res.send(LABLES.LOGIN_ERROR);
};

const addBookHandler = async (req, res) => {
  const {book} = req.body;
  await insertQuery(TABLES.books, {
    name: book,
    id: JSON.stringify(Date.now())
  });
  res.redirect("/home");
};

const getGroupedBooks = function (books) {
  return books.reduce((groupedBooks, book) => {
    if (groupedBooks[book.name]) {
      groupedBooks[book.name]['number'] = groupedBooks[book.name]['number'] + 1;
      groupedBooks[book.name]['ids'].push(book.id);
      return groupedBooks;
    }
    groupedBooks[book.name] = {number: 1, ids: [book.id]};
    return groupedBooks;
  }, {});
};

const getBooksHandler = async (req, res) => {
  const query = `select * from ${TABLES.books}`;
  const books = await executeQuery(query);
  if (!books) {
    res.send({groupedBooks: {}});
    return;
  }
  const groupedBooks = getGroupedBooks(books);
  res.send({groupedBooks});
};

const toggleTodoStateHandler = async (req, res) => {
  const todo = req.body;
  await toggleTodoStateQuery(todo);
  const updatedTodo = await getBooksHandler(req, res);
  res.send(updatedTodo);
};

const deleteTodoHandler = async (req, res) => {
  const {todo} = req.body;
  await deleteQuery(todo);
  const updatedTodo = await getBooksHandler(req, res);
  res.send(updatedTodo);
};

const redirect = (req, res, next) => {
  const {username} = req.cookies;
  if (isLoggedIn(username) && restrictedURLsWhenLoggedIn.includes(req.url)) {
    return res.redirect("/home");
  }
  if (
    !isLoggedIn(username) &&
    restrictedURLsWhenNotLoggedIn.includes(req.url)
  ) {
    return res.redirect("/");
  }
  next();
};

module.exports = {
  loginHandler,
  signUpHandler,
  addBookHandler: addBookHandler,
  getBooksHandler: getBooksHandler,
  toggleTodoStateHandler,
  deleteTodoHandler,
  redirect
};
