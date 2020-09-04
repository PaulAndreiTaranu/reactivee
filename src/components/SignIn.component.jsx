import React, { Component } from "react";
import FormInput from "./FormInput.component";
import CustomButton from "./CustomButton.component";
import { auth, signInWithGoogle } from "../firebase/firebase.utils";
import styled from "styled-components";

// STYLES
const Container = styled("div")`
  width: 45vw;
  display: flex;
  flex-direction: column;

  .title {
    margin: 10px 0;
  }

  .buttons {
    display: flex;
    justify-content: space-between;

    > * {
      width: 45%;
    }
  }
`;

const variants = {
  googleSignIn: {
    hidden: { y: "10vh", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.2 } },
    hover: {
      backgroundColor: "#5DADE2",
      color: "#fff",
      borderColor: "#000",
      borderStyle: "solid",
      borderWidth: "1px",
      transition: { duration: 0.3 },
    },
  },
  normal: {
    hidden: { y: "10vh", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.2 } },
    hover: {
      backgroundColor: "#fff",
      color: "#000",
      borderColor: "#000",
      borderStyle: "solid",
      borderWidth: "1px",
      transition: { duration: 0.3 },
    },
  },
};

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.error(error);
    }

    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <Container>
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton
              variants={variants.normal}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              type="submit"
            >
              Sign In
            </CustomButton>
            <CustomButton
              onClick={signInWithGoogle}
              variants={variants.googleSignIn}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              Sign With Google
            </CustomButton>
          </div>
        </form>
      </Container>
    );
  }
}
