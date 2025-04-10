import React from 'react';
import { AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';
// import { AiFillInstagram, AiFillLinkedin, } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+351-912-730-592">(+351) 912-086-010</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:joshhortt@yahoo.com">
            josecalvario@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Building one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Joshhortt">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.twitter.com/josh_hortt/">
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
          {/* <SocialIcons href="https://www.linkedin.com/in/jose-calvario/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons> */}
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
