import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import UserIcon from "../components/usericon";

describe("UserIcon component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<UserIcon />);
  });

  it("UserIcon renders as a div", () => {
    expect(wrapper.type()).toBe("div");
  });
});
