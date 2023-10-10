import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
// import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey, I am Aditya.
      </SectionTitle>
      <SectionText>
         ...A Web Developer
        {/* <br /> */}
        
        {/* Looking for an Opportunity to work on <a href="#projects" style={{color: 'cyan'}}>React.JS</a> */}
      </SectionText>
      {/* <Button onClick={()=>{window.location='https://dev.to/t/javascript'}}>Learn More</Button> */}
    </LeftSection>
  </Section>
);

export default Hero;