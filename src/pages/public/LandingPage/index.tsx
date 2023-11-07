import { lazy } from "react";
import IntroContent from "@src/content/IntroContent.json";
import MiddleBlockContent from "@src/content/MiddleBlockContent.json";
import AboutContent from "@src/content/AboutContent.json";
import MissionContent from "@src/content/MissionContent.json";
import ProductContent from "@src/content/ProductContent.json";
import ContactContent from "@src/content/ContactContent.json";
import React from "react";

const Contact = lazy(() => import("@src/components/contactForm"));
const MiddleBlock = lazy(() => import("@src/components/middleBlock"));
const Container = lazy(() => import("@src/common/container"));
const ScrollToTop = lazy(() => import("@src/common/scrollToTop"));
const ContentBlock = lazy(() => import("@src/components/ContentBlock"));

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
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="dog_walking.svg"
        id="produto"
      />
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="good_doggy.svg"
        id="missao"
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
