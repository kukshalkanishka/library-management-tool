import React from "react";
import { shallow, configure } from "enzyme";
import BookList from "../BookList";

import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("BookList", () => {
  it("should render properly", () => {
    const todos = [{ todo: "dummyTodo", time: "123" }];
    const toggleTodoState = jest.fn();
    const deleteTodo = jest.fn();
    const wrapper = shallow(
      <BookList
        todos={todos}
        toggleTodoState={toggleTodoState}
        deleteTodo={deleteTodo}
      />
    );
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
