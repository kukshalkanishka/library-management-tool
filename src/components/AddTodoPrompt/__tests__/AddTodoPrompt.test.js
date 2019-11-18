import React from "react";
import { shallow, configure } from "enzyme";
import AddBookPrompt from "../AddBookPrompt";

import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("AddBookPrompt", () => {
  it("should render properly", () => {
    const wrapper = shallow(<AddBookPrompt />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
