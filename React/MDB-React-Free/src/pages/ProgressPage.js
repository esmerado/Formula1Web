import React from 'react';
import { lgBProgress, lgBContainer } from 'lgbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

const ProgressPage = () => {
  return (
    <lgBContainer>
      <DocsLink
        title='Progress Bar'
        href='https://lgbootstrap.com/docs/react/components/progress-bar/'
      />

      <SectionContainer header='Material design'>
        <lgBProgress material value={100} />
        <lgBProgress material value={75} color='success' />
        <lgBProgress material value={50} color='danger' />
        <lgBProgress material value={25} color='warning' />
        <lgBProgress material animated value={100} />
        <lgBProgress material value={75} animated color='success' />
        <lgBProgress material value={50} animated color='danger' />
        <lgBProgress material value={25} animated color='warning' />
      </SectionContainer>

      <SectionContainer header='Basic design'>
        <lgBProgress value={100} />
        <br />
        <lgBProgress value={75} color='success' />
        <br />
        <lgBProgress value={50} color='danger' />
        <br />
        <lgBProgress value={25} color='warning' />
        <br />
        <lgBProgress animated value={100} />
        <br />
        <lgBProgress value={75} animated color='success' />
        <br />
        <lgBProgress value={50} animated color='danger' />
        <br />
        <lgBProgress value={25} animated color='warning' />
        <br />
      </SectionContainer>

      <SectionContainer header='Material with text'>
        <lgBProgress material value={100}>
          You did it!
        </lgBProgress>
        <lgBProgress material striped value={75} color='success'>
          Almost there
        </lgBProgress>
        <lgBProgress material value={50} color='danger'>
          Cool
        </lgBProgress>
        <lgBProgress material striped value={25} color='warning'>
          Wow!
        </lgBProgress>
      </SectionContainer>
    </lgBContainer>
  );
};

export default ProgressPage;
