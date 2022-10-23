import React, { useContext } from "react";
import { Col, Form, Row, Button, ButtonGroup } from "react-bootstrap";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
const Login = () => {
  const { providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  const handleGitSignIn = () => {
    providerLogin(gitProvider);
  };
  return (
    <div style={{ minHeight: "85vh" }}>
      <Row>
        <Col
          lg="8"
          className="mx-auto mt-5 text-start border border-warning py-3  rounded align-self-center"
        >
          <h2 className="text-center">Login</h2> <hr />
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div className="text-center">
              <Button variant="primary" type="submit">
                Submit
              </Button>
              <Button variant="danger" type="reset" className="ms-2">
                Reset
              </Button>
            </div>
          </Form>
          <div>
            <div className="my-3">
              <p className="m-0 p-0">
                New in Dragon news? Please <Link to="/register"> Register</Link>
              </p>
              <p className="m-0 p-0">
                Forget password? <Link>Reset Now</Link>
              </p>
            </div>
          </div>
          <ButtonGroup vertical className="w-100 my-2">
            <Button
              variant="outline-primary"
              className="mb-2"
              onClick={handleGoogleSignIn}
            >
              <FaGoogle></FaGoogle> Login with Google
            </Button>
            <Button variant="outline-dark" onClick={handleGitSignIn}>
              <FaGithub></FaGithub> Login with Github
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
