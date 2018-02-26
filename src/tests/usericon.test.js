import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import UserIcon from "../components/usericon";

describe("UserIcon component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<UserIcon usericon={"heacan1.jpg"}/>);
  });

  it("UserIcon renders as a div", () => {
    expect(wrapper.type()).toBe("div");
  });

  it("Username component displays the username", () => {
    expect(wrapper.html()).toEqual("<div class=\"Usericon\"><img src=\"heacan1.jpg\" class=\"Icon\"/></div>");
  });
});
