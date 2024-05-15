import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Full Stack Web Developer based in Beja, Portugal. Experienced in
        Wordpress & developing Next.js Applications.
        <br />
      </SectionText>
      <Button
        onClick={() => (window.location = "https://creativelightbox.net/")}
      >
        Visit my Blog
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
