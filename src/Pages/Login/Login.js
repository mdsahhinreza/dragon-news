import React, { useContext, useState } from "react";
import { Col, Form, Row, Button, ButtonGroup } from "react-bootstrap";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Login = () => {
  const [error, setError] = useState("");
  const location = useLocation();

  const from = location.state?.from?.pathname || "/home";
  const { providerLogin, logIn } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  const handleGitSignIn = () => {
    providerLogin(gitProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
        setError("");
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div style={{ minHeight: "85vh" }}>
      <Row>
        <Col
          lg="8"
          className="mx-auto mt-5 text-start border border-warning py-3  rounded align-self-center"
        >
          <h2 className="text-center">Login</h2> <hr />
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
              />
            </Form.Group>
            <p className="text-danger">{error}</p>
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
