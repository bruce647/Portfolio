import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi! I'm Guanxing Lan, <br />
        a Full-Stack Developer
      </SectionTitle>
      <SectionText>
      Bring your idea to life and get set up for success!
      </SectionText>
      <Button onClick={() => window.location = 'https://drive.google.com/file/d/1gIlIQ6bTRg7muzI4ozpi9CvEhdkZD-hl/view?usp=sharing'}>Download Resume</Button>
    </LeftSection>

  </Section>
);

export default Hero;