import React, { Component } from "react";
import "../App.css";
import { Grid, Col, Row } from "react-bootstrap";
import Username from "./username";
import UserIcon from "./usericon";
import Photo from "./photo";

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
              <Col sm={2}>
                <Photo photo={this.props.photo} />
              </Col>
            </Row>
          </Grid>
        </center>
      </div>;
  }
}

export default Post;

// this.props.username