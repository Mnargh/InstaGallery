import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import Description from "../components/description";

describe("Description component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Description description={"This is a nice picture"} />);
  });

  it("Description component displays the image of the post", () => {
    expect(wrapper.html()).toEqual('<div class="Description">This is a nice picture</div>');
  });
});
