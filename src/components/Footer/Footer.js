import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { Button, CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import useDownloader from 'react-use-downloader';
import { resume } from '@/constants/constants';

const Footer = () => {
  const {download} = useDownloader();
  const fileUrl = resume;
  const fileName = 'AdityaKumarPatel_SDE.pdf'; 
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href='tel: +919617870603'>+91 9617870603</LinkItem>
        </LinkColumn>
        <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=mymail.adityapatel@gmail.com'>mymail.adityapatel@gmail.com</LinkItem>
        </LinkColumn>
        <LinkColumn>
        <LinkTitle>Resume</LinkTitle>
        <LinkItem onClick={()=>download(fileUrl, fileName)}>Download</LinkItem>
        </LinkColumn>
        {/* <Button class="button" role="button" onClick={()=>download(fileUrl, fileName)}>Download Resume</Button> */}
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time <br />
            For more projects, please visit to my GitHub.
          </Slogan>
        </CompanyContainer>

        <SocialContainer>
          <SocialIcons href="https://github.com/akaAditya" target='_blank'>
          <AiFillGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/aditya-patel-29b512194/" target='_blank'>
          <AiFillLinkedin size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://twitter.com/adityapatel1612" target="_blank">
          <AiFillTwitterCircle size="3rem"/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
