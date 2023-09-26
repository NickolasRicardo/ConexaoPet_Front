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
