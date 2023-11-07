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

export const CheckoutBox = styled.section`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 112px;
  border-radius: 6px;
  justify-content: space-between;
  border: 1px solid;

  img {
    border-radius: 6px;
    margin: 10px;
    width: 54px;
    height: 57px;
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.154px;
    color: #242d60;
    height: 100%;
    width: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  }

  h3,
  h5 {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.154px;
    color: #242d60;
    margin: 0;
  }

  h5 {
    opacity: 0.5;
  }

  button {
    height: 34px;
    background: #556cd6;
    color: white;
    width: 100%;
    font-size: 14px;
    border: 0;
    font-weight: 500;
    cursor: pointer;
    letter-spacing: 0.6;
    border-radius: 0 0 6px 6px;
    transition: all 0.2s ease;
    box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
  }

  button:hover {
    opacity: 0.8;
  }
  .product {
    display: flex;
  }
  .description {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
