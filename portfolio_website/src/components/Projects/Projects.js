import React from 'react';

import { AiFillGithub, AiOutlineGlobal } from 'react-icons/ai';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const styles = {
  paddingTop: "4px",
}

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((projects) => (

        <BlogCard key={projects.id}>
          <Img src={projects.image} />
          <TitleContent>
            <HeaderThree title>{projects.title}</HeaderThree>
            <Hr />
            <CardInfo>{projects.description}</CardInfo>
          </TitleContent>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {projects.tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={projects.visit}><AiOutlineGlobal size="2rem" style={styles} />Demo</ExternalLinks>
            <ExternalLinks href={projects.source}><AiFillGithub size="2rem" style={styles} />Github</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;