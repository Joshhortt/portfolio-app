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
      Full Stack Web Developer based in Beja, Portugal. 
      Experienced in designing UI Web Components & developing .Net & React Applications.<br/> 
      </SectionText>
      <Button onClick={() => window.location = 'https://jahc.vercel.app/'}>Visit Blog</Button>
    </LeftSection>
  </Section>
);

export default Hero;