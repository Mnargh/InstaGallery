import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import Likes from "../components/likes";

describe("Likes component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Likes likes={53} />);
  });

  it("Likes component displays multiple likes correctly", () => {
    expect(wrapper.html()).toEqual('<div class="Likes">53 Likes</div>');
  });

  it("Likes component displays a single like correctly", () => {
      wrapper = shallow(<Likes likes={1} />)
    expect(wrapper.html()).toEqual('<div class="Likes">1 Like</div>');
  });

  it("Likes component displays no likes correctly", () => {
    wrapper = shallow(<Likes likes={0} />);
    expect(wrapper.html()).toEqual('<div class="Likes">No Likes</div>');
  });
});
