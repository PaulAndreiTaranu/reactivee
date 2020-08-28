import React from "react";
import styled, { css } from "styled-components";

// STYLES
const Container = styled("div")`
   position: relative;
   margin: 45px 0;

   & .formInput {
      background: none;
      background-color: white;
      color: grey;
      font-size: 18px;
      padding: 10px 10px 10px 5px;
      display: block;
      width: 100%;
      border: none;
      border-radius: 0;
      border-bottom: 1px solid grey;
      margin: 25px 0;

      &:focus {
         outline: none;
      }

      &:focus ~ .formInputLabel {
         top: -14px;
         font-size: 12px;
         color: black;
      }
   }

   input[type="password"] {
      letter-spacing: 0.3em;
   }

   & .formInputLabel {
      color: grey;
      font-size: 16px;
      font-weight: normal;
      position: absolute;
      pointer-events: none;
      left: 5px;
      top: 10px;
      transition: 250ms ease-out all;

      &.shrink {
         top: -14px;
         font-size: 12px;
         color: black;
      }
   }
`;

const FormInput = ({ handleChange, label, ...otherProps }) => (
   <Container>
      <input className="formInput" onChange={handleChange} {...otherProps} />
      {label ? <label className={`${otherProps.value.length ? "shrink" : ""} formInputLabel`}>{label}</label> : null}
   </Container>
);

export default FormInput;
