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
    <SectionText>I gained lots of knowledge and confidence by creating mini projects using interactive React.js, Next.js, and Express.js.</SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js, Next.js, Redux, JavaScript, HTML5, CSS3, Tailwind CSS, Bootstrap
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejs size="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node.js, Express.js, Mongoose
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        {/* <DiZend size="3rem"/> */}
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Tools & Databases</ListTitle>
          <ListParagraph>
            MongoDB, Firebase, GitHub, VS Code, Postman
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider/>
  </Section>
);

export default Technologies;
