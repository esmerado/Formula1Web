import React from 'react';
import { lgBIcon, lgBContainer } from 'lgbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

const FaPage = props => {
  return (
    <lgBContainer className='mt-3'>
      <DocsLink
        title='Icons'
        href='https://lgbootstrap.com/docs/react/content/icons-usage/'
      />

      <SectionContainer header='Sizing' className='text-center'>
        <p>
          <lgBIcon icon='camera-retro' />
        </p>
        <p>
          <lgBIcon icon='camera-retro' size='lg' />
        </p>
        <p>
          <lgBIcon icon='camera-retro' size='2x' />
        </p>
        <p>
          <lgBIcon icon='camera-retro' size='4x' />
        </p>
        <p>
          <lgBIcon icon='camera-retro' size='5x' />
        </p>
        <p>
          <lgBIcon icon='camera-retro' size='10x' />
        </p>
      </SectionContainer>

      <SectionContainer header='Colors' className='text-center'>
        <p>
          <lgBIcon icon='bolt' size='3x' className='amber-text pr-3' />
        </p>
        <p>
          <lgBIcon icon='bug' size='3x' className='red-text pr-3' />
        </p>
        <p>
          <lgBIcon icon='heart' size='3x' className='indigo-text pr-3' />
        </p>
        <p>
          <lgBIcon icon='bell' size='3x' className='cyan-text pr-3' />
        </p>
        <p>
          <lgBIcon icon='birthday-cake' size='3x' className='green-text pr-3' />
        </p>
      </SectionContainer>

      <SectionContainer header='Position' style={{ minHeight: '100px' }}>
        <lgBIcon icon='quote-left' size='3x' border pull='right' />
        <lgBIcon icon='quote-left' size='3x' border pull='left' />
      </SectionContainer>

      <SectionContainer header='Animation' className='text-center'>
        <p>
          <lgBIcon icon='spinner' size='5x' spin />
        </p>
        <p>
          <lgBIcon icon='spinner' size='5x' pulse />
        </p>
        <p>
          <lgBIcon icon='circle-notch' size='5x' spin />
        </p>
        <p>
          <lgBIcon icon='sync' size='5x' spin />
        </p>
        <p>
          <lgBIcon icon='cog' spin size='5x' />
        </p>
      </SectionContainer>

      <SectionContainer header='Rotation' className='text-center'>
        <p>
          <lgBIcon icon='camera-retro' size='5x' rotate='90' />
        </p>
        <p>
          <lgBIcon icon='camera-retro' size='5x' rotate='180' />
        </p>
        <p>
          <lgBIcon icon='camera-retro' size='5x' rotate='270' />
        </p>
        <p>
          <lgBIcon icon='camera-retro' size='5x' flip='vertical' />
        </p>
      </SectionContainer>
    </lgBContainer>
  );
};

export default FaPage;
