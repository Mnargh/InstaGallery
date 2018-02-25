import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import Username from "../components/username";

describe("Username component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Username />);
  });

  it("Username renders as a div", () => {
    expect(wrapper.type()).toBe("div");
  });
});
