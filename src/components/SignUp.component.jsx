import React, { Component } from "react";
import FormInput from "./FormInput.component";
import CustomButton from "./CustomButton.component";
import { auth, createUserProfileDocument } from "../firebase/firebase.utils";
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

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });
      this.state = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      };
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <Container>
        <h2 className="title">I do not have and account</h2>
        <span>Sign up with your email and password</span>
        <form className="signUpForm" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Display Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Display Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
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
              Sign Up
            </CustomButton>
          </div>
        </form>
      </Container>
    );
  }
}
