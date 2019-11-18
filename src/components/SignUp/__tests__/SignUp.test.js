import React from "react";
import { shallow, configure } from "enzyme";
import SignUp from "../SignUp";

import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("SignUp", () => {
  it("should render properly", () => {
    const wrapper = shallow(<SignUp />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
