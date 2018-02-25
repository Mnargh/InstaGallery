import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import Username from "../components/username";

describe("Username component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Username username={"Tom"} />);
  });

  it("Username renders as a div", () => {
    expect(wrapper.type()).toBe("div");
  });

  it("Username sets username state from props passed to it", () => {
    expect(wrapper.props().children).toEqual('Tom');
  });

  it("Username state is set to the props passed to the component", () => {
    expect(wrapper.state().username).toEqual('Tom');
  });

  it("Username component displays the username", () => {
    expect(wrapper.text()).toEqual('Tom');
  });
});
