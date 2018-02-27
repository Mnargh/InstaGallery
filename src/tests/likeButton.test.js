import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import LikeButton from "../components/likeButton";

describe("LikeButton component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LikeButton />);
  });

  it("LikeButton component renders correctly", () => {
    expect(wrapper.html()).toEqual('<img src="likeicon.svg" class="LikeButton"/>');
  });

});
