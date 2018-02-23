import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Post from "../components/postfeed";

describe("Postfeed component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Post />);
  });

  it("Postfeed renders as a div", () => {
    expect(wrapper.type()).toBe("div");
  });
});
