import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Post from "../components/post";
import Username from "../components/username";
import Photo from "../components/photo";
import Description from "../components/photo";
import UserIcon from "../components/usericon";
import Likes from "../components/likes";
import LikeButton from "../components/likeButton";

describe("Post component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Post 
      username={"Tom"} 
      usericon={"heacan1.jpg"} 
      photo={"cat1.jpeg"} 
      description={"Nice cat"} />);
  });

  it("Post renders as a div", () => {
    expect(wrapper.type()).toBe("div");
  });

  it("Post renders a username component inside of it", () => {
    expect(wrapper.find('Username')).toHaveLength(1);
  });

  it("Post renders a usericon component inside of it", () => {
    expect(wrapper.find('UserIcon')).toHaveLength(1);
  });

  it("Post renders a photo component inside of it", () => {
    expect(wrapper.find('Photo')).toHaveLength(1);
  });

  it("Post renders a description component inside of it", () => {
    expect(wrapper.find('Description')).toHaveLength(1);
  });

  it("Post renders a Likes component inside of it", () => {
    expect(wrapper.find("Likes")).toHaveLength(1);
  });

  it("Post renders a likeButton component inside of it", () => {
    expect(wrapper.find("LikeButton")).toHaveLength(1);
  });


});
