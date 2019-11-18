import React from "react";
import { shallow, configure } from "enzyme";
import Options from "../Options";

import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Options", () => {
  it("should render properly", () => {
    const wrapper = shallow(<Options />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
