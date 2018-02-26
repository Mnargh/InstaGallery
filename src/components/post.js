import React, { Component } from "react";
import "../App.css";
import Username from "./username";
import UserIcon from "./usericon";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="Post">
        <Username username={this.props.username} />
        <UserIcon usericon={this.props.usericon} />
      </div>;
  }
}

export default Post;

// this.props.username