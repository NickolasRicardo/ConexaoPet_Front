import styled from "styled-components";
import { Field, Form } from "formik";
import { shade } from "polished";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
  max-height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(0, 132, 255, 1) 0%,
    rgba(2, 158, 255, 1) 50%,
    rgba(0, 212, 255, 1) 100%
  );
`;

export const ContainerPerfil = styled.div`
  width: 100vw;
  background: white;
`;

export const FormContent = styled.div`
  padding-left: 12%;
  padding-right: 12%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FormTitle = styled.h3`
  text-align: center;
  margin-bottom: 1em;
  font-size: 24px;
  color: rgb(34, 34, 34);
  font-weight: 800;
`;

export const StyledForm = styled(Form)``;

export const StyledField = styled(Field)`
  align-items: center;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 400;
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.75rem 0.75rem;

  &:focus,
  &:active {
    box-shadow: rgb(210, 213, 217) 0px 0px 2px 1px,
      rgb(227, 230, 232) 0px 0px 0px 3px;
    border: 1px solid rgb(26, 33, 43);
    outline: none;
  }

  /* Autocomplete styles in Chrome*/
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background-color: white;
    border: 1px solid lightgrey;
    box-shadow: 0 0 0px 1000px #fff inset;
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: black;
  }
`;

export const ButtonCss = styled.button`
  background: ${(p) => p.color || "#5363e3"};
  color: ${(p) => (p.color ? "#5363e3" : "#fff")};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 1px solid #edf3f5;
  border-radius: 4px;
  padding: 13px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);
  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: 1px solid #ff825c;
    background-color: #ff825c;
  }
`;
