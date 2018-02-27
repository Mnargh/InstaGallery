import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import Likebutton from "../components/likeButton";

describe("LikeButton component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Likebutton />);
    console.log(wrapper);
  });

  it("LikeButton component renders correctly", () => {
      console.log(wrapper);
    expect(wrapper.html()).toEqual('<img src="likeicon.svg" class="LikeIcon"/>');
  });

});
