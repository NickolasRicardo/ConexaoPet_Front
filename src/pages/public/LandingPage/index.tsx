import { lazy } from "react";
import IntroContent from "@src/content/IntroContent.json";
import MiddleBlockContent from "@src/content/MiddleBlockContent.json";
import MissionContent from "@src/content/MissionContent.json";
import ProductContent from "@src/content/ProductContent.json";
import ContactContent from "@src/content/ContactContent.json";
import React from "react";
import { Slide } from "react-awesome-reveal";
import petsIcon from "@assets/pets.png";
import Card, { ICarouselCardProps } from "@components/carouselCard";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button, Paper } from "@mui/material";

const Contact = lazy(() => import("@src/components/contactForm"));
const MiddleBlock = lazy(() => import("@src/components/middleBlock"));
const Container = lazy(() => import("@src/common/container"));
const ScrollToTop = lazy(() => import("@src/common/scrollToTop"));
const ContentBlock = lazy(() => import("@src/components/ContentBlock"));

function LandingPage() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const cardJob: ICarouselCardProps[] = [
    {
      body: "Vai viajar por um dia ou mais? Nossos conectores podem hospedar o seu pet, enquanto você aproveita a viagem, seu pet descansa e se diverte.",
      image: petsIcon,
      title: "Hospedagem",
    },
    {
      body: "Passar o dia todo sozinho esperando o seu tutor pode ser triste. Nossos conectores estão a disposição para cuidar do seu companheiro pelo tempo que estiver ausente.",
      image: petsIcon,
      title: "Creche",
    },
    {
      body: "Caminhadas são excelentes para cães muito agitados, além de previnir obesidade em animais. Temos conectores que realizam passeios de 1 hora com seu cão e ainda podem ensiná-los a sentar e a acalmar-se.",
      image: petsIcon,
      title: "Pet walker",
    },
    {
      body: "Nem todo bichinho quer ou pode sair de casa. Não tem problema, nossos conectores podem ir até a sua casa e cuidar do seu amiguinho o tempo que precisar.",
      image: petsIcon,
      title: "Pet sitter",
    },
    {
      body: "Higiene está diretamente ligada ao bem estar do seu animal, nada como pêlos aparados e limpinhos para sujar de novo enquanto brinca.",
      image: petsIcon,
      title: "Banho e tosa",
    },
  ];
  return (
    <Container>
      <ScrollToTop />

      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />

      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        id={"sobre"}
      />
      {/* <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="everyday_life.svg"
        id="sobre"
      /> */}
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="good_doggy.svg"
        id="missao"
      />
      <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="dog_walking.svg"
        id={""}
      />
      <MiddleBlock
        title={"Quais serviços ofereçemos?"}
        content={
          "A plataforma possui varios profissionais que desempenham várias atividades diferentes relacionadas aos seus bichinhos, os trabalhos oferecidos são:  "
        }
        id={"produto"}
      />
      <Slide direction="up" triggerOnce>
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          showDots={true}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {cardJob.map((item) => {
            return (
              <Card body={item.body} title={item.title} image={item.image} />
            );
          })}
        </Carousel>
      </Slide>
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contato"
      />
    </Container>
  );
}

export { LandingPage };
