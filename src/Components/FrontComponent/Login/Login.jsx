import React, { useState } from "react";
import { PiPencilLineBold } from "react-icons/pi";
import { BiSolidUser } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsArrowRightCircle } from "react-icons/bs";
import { BiHappyHeartEyes } from "react-icons/bi";
import { Modal } from "react-bootstrap";
import { Form, Field } from "react-final-form";
import { useNavigate } from "react-router-dom";
import MessageModal from "../../../Modal/MessageModal/MessageModal";

function Login(props) {
  const navigate = useNavigate();
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [error, seterror] = useState();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if(loginData?.username && loginData?.password){
      localStorage.setItem('userCred',JSON.stringify(loginData))
    }
    if (
      loginData?.username === "sumitsingh.in" &&
      loginData?.password === "Test@123"
    ) {
      navigate("/dashboard");
    } else {
      seterror(true);
    }
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id=" text-center">
          <h3 className=" text-secondary">
            Sign In with{" "}
            <span className="text-primary">
              Edu
              <span className="text-secondary">
                Skon <PiPencilLineBold />
              </span>
            </span>
          </h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12 " style={{ marginTop: "10%" }}>
              <h2 className="text-primary">
                Edu
                <span className="text-secondary">
                  Skon <PiPencilLineBold />
                </span>
              </h2>
              <p className="text-secondary">
                Start your journey with EduSkon...
              </p>
              <span className="text-secondary">
                EduSkon is democratising education, making it accessible to all.
                Join the revolution, learn on India's largest learning platform.
              </span>
            </div>
            <div className="col-md-6 col-12 ">
              <div className="card border-0 shadow p-3">
                <div className="card-body form_container">
                  <form onSubmit={onSubmit} className="p-2 ">
                    <div className="mb-3 bg-text form_container">
                      <label
                        htmlFor="exampleInputName"
                        className="form-label styled_text"
                      >
                        <BiSolidUser
                          className="styled_text"
                          style={{ marginBottom: "5px" }}
                        />{" "}
                        Username
                      </label>
                      <input
                        name="username"
                        type="text"
                        className="form-control"
                        value={loginData?.username}
                        onChange={(e) => {
                          setLoginData({
                            ...loginData,
                            username: e.target.value,
                          });
                          seterror(false);
                        }}
                        id="exampleInputUserName"
                        aria-describedby="emailHelp"
                        required
                      />
                    </div>
                    <div className="mb-1 bg-text form_container">
                      <label
                        htmlFor="exampleInput"
                        className="form-label styled_text"
                      >
                        <RiLockPasswordLine
                          className=""
                          style={{ marginBottom: "5px" }}
                        />{" "}
                        Password
                      </label>
                      <input
                        name="password"
                        type="password"
                        value={loginData?.password}
                        onChange={(e) => {
                          setLoginData({
                            ...loginData,
                            password: e.target.value,
                          });
                          seterror(false);
                        }}
                        className="form-control"
                        id="exampleInputPassword"
                        aria-describedby="passwordHelp"
                        required
                      />
                    </div>
                    {error && (
                      <p className="text-danger">Incorrect username or password!</p>
                    )}
                    {/* <div className="mb-3 form-check">
                          <Field
                            name="checkbox"
                            component="input"
                            type="checkbox"
                            className="form-check-input bg-text"
                            required
                          />
                          <a
                            href="#"
                            className="form-check-label bg-text"
                            htmlFor="exampleCheck1"
                          >
                            Term & Conditions{" "}
                            <BiHappyHeartEyes
                              className="bg-text"
                              style={{ marginBottom: "5px" }}
                            />
                          </a>
                        </div> */}
                    <div className="d-flex justify-content-end mt-2">
                      <button type="submit" className="btn btn-success m-0">
                        Login <BsArrowRightCircle className="bg-success" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card p-1 bg-transparent border-0">
                <div className="card-body">
                  <div className="sign-up-text text-center styled_text">
                    New to EduSkon ?{" "}
                    <span
                      className="bg-transparent text-primary"
                      style={{ cursor: "pointer" }}
                      onClick={() => setShowMessageModal(true)}
                    >
                      Sign-up
                    </span>
                    {/* {renderModal()} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {
          <MessageModal
            show={showMessageModal}
            handleClose={() => setShowMessageModal(false)}
          />
        }
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default Login;
