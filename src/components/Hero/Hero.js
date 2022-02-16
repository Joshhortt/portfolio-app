import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Freelance Web Designer & Front-End Developer based in Beja, Portugal. 
        Experienced in designing & developing Wordpress Websites.<br/> 
        I am also becoming more experienced in building systems that implement Business 
        Logic & interact with server-side technology such as React & Redux.
      </SectionText>
      <Button onClick={() => window.location = 'https://creativelightbox.com'}>Visit Blog</Button>
    </LeftSection>
  </Section>
);

export default Hero;