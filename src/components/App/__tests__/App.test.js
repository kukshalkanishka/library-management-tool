import React from "react";
import { shallow, configure } from "enzyme";
import App from "../App";

import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("App", () => {
  it("should render properly", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
