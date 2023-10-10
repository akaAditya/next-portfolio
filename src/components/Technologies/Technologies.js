import React from 'react';
import { DiFirebase, DiReact, DiNodejs } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I gained lots of knowledge and confidence by creating mini projects using interactive ReactJS library and NextJS.</SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experienced with <br />
            ReactJS, NextJS, JavaScript ES6+, HTML5, CSS3, Tailwind, React-Bootstrap
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejs size="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Learning <br />
            NodeJS, ExpressJS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        {/* <DiZend size="3rem"/> */}
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Tools & Databases</ListTitle>
          <ListParagraph>
            Experienced with <br />
            MongoDB, Firebase, GitHub, VS Code
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider/>
  </Section>
);

export default Technologies;
