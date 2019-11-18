import React from "react";
import { shallow, configure } from "enzyme";
import Book from "../Todo";

import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Todo", () => {
  it("should render properly", () => {
    const todo = { todo: "dummyTodo", date: "1234" };
    const toggleTodoState = jest.fn();
    const deleteTodo = jest.fn();
    const wrapper = shallow(
      <Book
        todo={todo}
        toggleTodoState={toggleTodoState}
        deleteTodo={deleteTodo}
      />
    );
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
