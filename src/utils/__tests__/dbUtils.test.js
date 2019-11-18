const {
  insertQuery,
  selectQuery,
  executeQuery,
  executeSignUpQuery,
  toggleTodoStateQuery,
  deleteQuery
} = require("../dbUtils");

let mockResult;
jest.mock("../utils", () => {
  return { pool: { query: jest.fn().mockImplementation(() => mockResult) } };
});

describe("dbUtils", () => {
  describe("insertQuery", () => {
    it("should call the insert query handler with proper args", async () => {
      mockResult = "mockResult";
      const actual = await insertQuery("testName", { testData: "testData" });
      const expected = "mockResult";
      expect(actual).toBe(expected);
    });
  });

  describe("selectQuery", () => {
    it("should call the select query handler with proper args", async () => {
      mockResult = "select query ok";
      const actual = await selectQuery("testName", { testData: "testData" });
      const expected = "select query ok";
      expect(actual).toBe(expected);
    });
  });

  describe("executeQuery", () => {
    it("should call the execute query handler with proper args", async () => {
      mockResult = "execute query ok";
      const actual = await executeQuery("testName", { testData: "testData" });
      const expected = "execute query ok";
      expect(actual).toBe(expected);
    });
  });

  describe("executeSignUpQuery", () => {
    it("should response with no errors when receive data", async () => {
      mockResult = [];
      const actual = await executeSignUpQuery("testName", {
        testData: "testData"
      });

      const expected = { error: false, message: "signup ok" };
      expect(JSON.stringify(actual)).toBe(JSON.stringify(expected));
    });

    xit("should response with errors when does not receive data", async () => {
      mockResult = [{ data: "" }];
      const actual = await executeSignUpQuery("testName", {
        testData: "testData"
      });

      const expected = { error: true, message: "username already exists" };
      expect(JSON.stringify(actual)).toBe(JSON.stringify(expected));
    });
  });

  describe("toggleTodoStateQuery", () => {
    const todo = { todo: "testTodo", time: "123", done: false };
    it("should response with no errors when receive data", async () => {
      mockResult = [{ data: "someTestData" }];
      const actual = await toggleTodoStateQuery(todo);

      const expected = { error: false, message: `Marked as true` };
      expect(JSON.stringify(actual)).toBe(JSON.stringify(expected));
    });

    it("should response with errors when does not receive data", async () => {
      mockResult = [];
      const actual = await toggleTodoStateQuery(todo);

      const expected = { error: true, message: "Something went wrong!" };
      expect(JSON.stringify(actual)).toBe(JSON.stringify(expected));
    });
  });

  describe("deleteQuery", () => {
    const todo = { todo: "testTodo", time: "123", done: false };
    it("should response with no errors when receive data", async () => {
      mockResult = [{ data: "someTestData" }];
      const actual = await deleteQuery(todo);

      const expected = { error: false, message: `Todo testTodo deleted` };
      expect(JSON.stringify(actual)).toBe(JSON.stringify(expected));
    });

    it("should response with errors when does not receive data", async () => {
      mockResult = [];
      const actual = await deleteQuery(todo);

      const expected = { error: true, message: "Issue deleting todo!" };
      expect(JSON.stringify(actual)).toBe(JSON.stringify(expected));
    });
  });
});
