import React, { useContext, useState } from "react";
import { Col, Form, Row, Button, ButtonGroup } from "react-bootstrap";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const [error, setError] = useState(null);

  const [accepted, setAccespted] = useState(false);

  const navigate = useNavigate();

  const { createUser, updateProfileInfo, logOut, logIn, varifyEmail } =
    useContext(AuthContext);

  const handleAccepted = (event) => {
    setAccespted(event.target.checked);
  };

  const handleEmailVarification = () => {
    varifyEmail()
      .then(() => console.log("Varification Send Success"))
      .catch((error) => console.error(error.message));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (password.length < 6) {
      setError("Password Must be 6 Charecter");
      return;
    }

    if (password !== confirm) {
      setError("Password Confirm does not matched! ");
      return;
    }

    setError("");

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // setUser(user);
        console.log(user);
        form.reset();
        updateProfileInfo(name, photoURL)
          .then(() => console.log("Info Update Success"))
          .catch((error) => console.error(error.message));
        logOut();
        logIn(email, password);
        setError("");
        handleEmailVarification();
        toast("We Send A Varification Mail", {
          icon: "✉️",
        });
        navigate("/home");
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
          <h2 className="text-center">Registration</h2> <hr />
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter Full Name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Photo Url</Form.Label>
              <Form.Control
                type="text"
                name="photo"
                placeholder="Enter Photo Url"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
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
              <p className="text-danger text-center mt-2 mb-0 pb-0">{error}</p>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                onClick={handleAccepted}
                label={
                  <>
                    Accept <Link to="/terms">Terms and conditions</Link>
                  </>
                }
              />
            </Form.Group>
            <ButtonGroup aria-label="Basic example" className="w-100">
              <Button variant="primary" type="submit" disabled={!accepted}>
                Submit
              </Button>
              <Button variant="danger" type="reset">
                Reset
              </Button>
            </ButtonGroup>
          </Form>
          <div>
            <div className="my-3">
              <p className="m-0 p-0">
                Already member of DragonNews? Please{" "}
                <Link to="/login"> Login</Link>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
