import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Post from "../components/post";
import Username from "../components/username";

describe("Post component", () => {
  let Postwrapper;
  beforeEach(() => {
    Postwrapper = shallow(<Post />);
  });

  it("Post renders as a div", () => {
    expect(Postwrapper.type()).toBe("div");
  });

  // test for post receiving props/rendering props

  it("Post renders a username component inside of it", () => {
    expect(Postwrapper.find('Username')).toHaveLength(1);
  });
});
