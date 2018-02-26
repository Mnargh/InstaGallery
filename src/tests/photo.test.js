import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import Photo from "../components/photo";

describe("Photo component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Photo photo={"cat1.jpeg"}/>);
  });

  it("Photo component displays the image of the post", () => {
    expect(wrapper.html()).toEqual('<img src="cat1.jpeg" class="Photo"/>');
  });
});
