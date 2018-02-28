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
      description={"Nice cat"} 
      likes={53}
      liked={false}
      />);
  });

  it("Post renders as a div", () => {
    expect(wrapper.type()).toBe("div");
  });

  describe("Rendering child components", () => {
    it("Post renders a username component inside of it", () => {
      expect(wrapper.find("Username")).toHaveLength(1);
    });

    it("Post renders a usericon component inside of it", () => {
      expect(wrapper.find("UserIcon")).toHaveLength(1);
    });

    it("Post renders a photo component inside of it", () => {
      expect(wrapper.find("Photo")).toHaveLength(1);
    });

    it("Post renders a description component inside of it", () => {
      expect(wrapper.find("Description")).toHaveLength(1);
    });

    it("Post renders a Likes component inside of it", () => {
      expect(wrapper.find("Likes")).toHaveLength(1);
    });

    it("Post renders a likeButton component inside of it", () => {
      expect(wrapper.find("LikeButton")).toHaveLength(1);
    });
  });
  
  describe("Liking Posts", () => {
    it("Post state includes the number of likes from the json file", () => {
      expect(wrapper.state("likes")).toEqual(53);
    });

    it("Post state includes the number of likes from the json file", () => {
      expect(wrapper.state("liked")).toEqual(false);
    });

    it("Post state increases the number of likes by one when the like button is clicked", () => {
      wrapper.find("LikeButton").simulate("click");
      expect(wrapper.state("likes")).toEqual(54);
    });

    it("Post state changes liked to true when the like button is clicked", () => {
      expect(wrapper.state("liked")).toEqual(false);
      wrapper.find("LikeButton").simulate("click");
      expect(wrapper.state("liked")).toEqual(true);
    });

    it("Post state decreases the number of likes by one when the post is unliked", () => {
      wrapper.find("LikeButton").simulate("click");
      expect(wrapper.state("likes")).toEqual(54);
      wrapper.find("LikeButton").simulate("click");
      expect(wrapper.state("likes")).toEqual(53);
    });
  });
  

});
