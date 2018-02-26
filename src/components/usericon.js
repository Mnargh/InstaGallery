import React, { Component } from "react";
import { Image } from 'react-bootstrap';
import "../App.css";

class UserIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
    <div className="Usericon">
      <Image src={require(`../avatars/${this.props.usericon}`)} className="Icon" />
    </div>
    );
  }
} 

export default UserIcon;
