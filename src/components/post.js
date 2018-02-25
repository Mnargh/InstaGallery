import React, { Component } from "react";
import "../App.css";
import Username from "./username";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Post">
        <Username username={this.props.username}/>
      </div>
    );
  }
}

export default Post;

// this.props.username