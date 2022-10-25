import React, { useContext } from "react";
import { Col, Form, Row, Button, ButtonGroup } from "react-bootstrap";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  //   const [name, setName] = useState(user?.displayName);
  return (
    <div style={{ minHeight: "85vh" }}>
      <Row>
        <Col
          lg="8"
          className="mx-auto mt-5 text-start border border-warning py-3  rounded align-self-center"
        >
          <h2 className="text-center">Profile</h2> <hr />
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                defaultValue={user?.displayName}
                placeholder="Enter Full Name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Photo Url</Form.Label>
              <Form.Control
                defaultValue={user?.photoURL}
                type="text"
                name="photo"
                placeholder="Enter Photo Url"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                defaultValue={user?.email}
                readOnly
                name="email"
                type="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                name="confirm"
                type="password"
                placeholder="Password"
              />
              <p className="text-danger text-center mt-2 mb-0 pb-0"></p>
            </Form.Group>
            <ButtonGroup aria-label="Basic example" className="w-100">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </ButtonGroup>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
