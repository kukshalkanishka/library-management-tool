import React from "react";
import { shallow, configure } from "enzyme";
import Login from "../Login";

import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Login", () => {
  it("should render properly", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
