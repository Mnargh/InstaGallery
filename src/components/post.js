import React, { Component } from "react";
import "../App.css";
import { Grid, Col, Row } from "react-bootstrap";
import Username from "./username";
import UserIcon from "./usericon";
import Photo from "./photo";
import Description from "./description";
import Like from "./likes"
import LikeButton from "./likeButton"

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="Post">
        <center>
          <Grid>
            <Row className="UserInfo">
              <Col sm={1}>
                <UserIcon usericon={this.props.usericon} />
              </Col>
              <Col sm={1}>
                <Username username={this.props.username} />
              </Col>
            </Row>
            <Row className="PostPhoto">
              <Photo photo={this.props.photo} />
            </Row>
            <Row className="Likes">
              <Col sm={1}>
                <LikeButton />
                <Like likes={this.props.likes} />
              </Col>
            </Row>
            <Row className="description">
              <Col sm={8}>
                <Description description={this.props.description} />
              </Col>
            </Row>
          </Grid>
        </center>
      </div>;
  }
}

export default Post;

// this.props.username