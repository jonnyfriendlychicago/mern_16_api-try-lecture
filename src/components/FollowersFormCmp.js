import React from "react";
import axios from "axios"; // installed via terminal: npm install axios
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { useState } from "react";

function FollowersFormCmp() {
  const [userName, userNameSetter] = useState("");
  const [followers, followersSetter] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${userName}/followers`) // YO!  gotta use backTicks here, or won't work, b/c of sqiggle brackets
      .then((res) => {
        followersSetter(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Container>
        <Row >
                <Card style= {{padding: "5px"}}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group
                            className="mb-3 bg-white"
                            controlid="FollowerFormItem01"
                        >
                            <Form.Label>Search by Username: </Form.Label>
                            <Form.Control
                            type="text"
                            onChange={(e) => userNameSetter(e.target.value)}
                            style={{ width: "300px", height: "25px" }}
                            />
                        </Form.Group>
                        <Form.Group controlid="FollowerFormItem02">
                            <Form.Control
                            type="submit"
                            value="Let's Go!"
                            style={{ width: "100px" }}
                            className="btn btn-primary"
                            />
                        </Form.Group>
                    </Form>
                </Card>
        </Row>

        <Row>
          
            <p>Followers: </p>
            {followers.map((follower) => (
                <Card key={follower.id}>
                <a href={follower.html_url}>{follower.login}</a>
                </Card>
            ))}
        </Row>
      </Container>
    </>
  );
}

export default FollowersFormCmp;
