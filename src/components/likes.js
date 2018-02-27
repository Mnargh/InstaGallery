import React, { Component } from "react";
import "../App.css";

class Likes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  likesToString(value) {
    let likePlural;
    let likeString;

    if (value === 1) likePlural = " Like";
    if (value > 1) likePlural = " Likes";
    likeString = String(value).concat(likePlural);
    if (value === 0) likeString = "No Likes";
    return likeString;
  }


  render() {
    return (
      <div className="Likes">
         {this.likesToString(this.props.likes)}
      </div>
    );
  }
}

export default Likes;
