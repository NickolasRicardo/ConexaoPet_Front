import { lazy } from "react";
import IntroContent from "../../../content/IntroContent.json";
import MiddleBlockContent from "../../../content/MiddleBlockContent.json";
import AboutContent from "../../../content/AboutContent.json";
import MissionContent from "../../../content/MissionContent.json";
import ProductContent from "../../../content/ProductContent.json";
import ContactContent from "../../../content/ContactContent.json";
import React from "react";

const Contact = lazy(() => import("../../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../../components/MiddleBlock"));
const Container = lazy(() => import("../../../common/Container"));
const ScrollToTop = lazy(() => import("../../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../../components/ContentBlock"));

function LandingPage() {
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
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="everyday_life.svg"
        id="sobre"
      />
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
        id="produto"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contato"
      />
    </Container>
  );
}

export { LandingPage };