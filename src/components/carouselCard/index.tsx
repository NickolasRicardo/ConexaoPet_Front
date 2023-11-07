import React, { useState, useEffect } from "react";
import { Body, Container, Image, Title } from "./styles";

export interface ICarouselCardProps {
  image: string;
  title: string;
  body: string;
}

function ICarouselCard(values: ICarouselCardProps) {
  return (
    <>
      <Container>
        <Image src={values.image} />
        <Title>{values.title}</Title>
        <Body>{values.body}</Body>
      </Container>
    </>
  );
}

export default ICarouselCard;
