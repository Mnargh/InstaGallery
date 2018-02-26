import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Post from "../components/post";
import Username from "../components/username";

describe("Post component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Post username={"Tom"} />);
  });

  it("Post renders as a div", () => {
    expect(wrapper.type()).toBe("div");
  });

  it("Post renders a username component inside of it", () => {
    expect(wrapper.find('Username')).toHaveLength(1);
  });

});
