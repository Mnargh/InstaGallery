import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import Image from "../components/image";

describe("Image component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Image />);
  });

  it("Image renders as a div", () => {
    expect(wrapper.type()).toBe("div");
  });
});
