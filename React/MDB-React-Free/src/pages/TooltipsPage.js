import React from 'react';
import { lgBTooltip, lgBContainer, lgBBtn } from 'lgbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

const TooltipsPage = () => {
  const style = { display: 'inline-block', maxWidth: '50vh' };
  return (
    <lgBContainer>
      <DocsLink
        title='Tooltips'
        href='https://lgbootstrap.com/docs/react/advanced/tooltips/'
      />

      <SectionContainer header='Basic'>
        Tight pants next level keffiyeh{' '}
        <lgBTooltip
          domElement
          tag='span'
          style={{ display: 'inline' }}
          placement='top'
        >
          <span className='blue-text'> you probably </span>
          <span>Default tooltip</span>
        </lgBTooltip>
        haven't heard of them. Photo booth beard raw denim letterpress vegan
        messenger bag stumptown. Farm-to-table seitan, mcsweeney's fixie
        sustainable quinoa 8-bit american apparel{' '}
        <lgBTooltip
          domElement
          tag='span'
          style={{ display: 'inline' }}
          placement='top'
        >
          <span className='blue-text'> have a </span>
          <span>Another tooltip</span>
        </lgBTooltip>{' '}
        terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo
        thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney's
        cleanse vegan chambray. A really ironic artisan
        <lgBTooltip
          domElement
          tag='span'
          style={{ display: 'inline' }}
          placement='top'
        >
          <span className='blue-text'> whatever keytar </span>
          <span>Another one here too</span>
        </lgBTooltip>
        , scenester farm-to-table banksy Austin{' '}
        <lgBTooltip
          domElement
          tag='span'
          style={{ display: 'inline' }}
          placement='top'
        >
          <span className='blue-text'> twitter handle </span>
          <span>The last tip!</span>
        </lgBTooltip>
        freegan cred raw denim single-origin coffee viral.
      </SectionContainer>

      <SectionContainer header='Four tooltips' className='text-center p-5'>
        <lgBTooltip placement='top'>
          <lgBBtn color='primary'>Top tooltip</lgBBtn>
          <div>lgBTooltip on top</div>
        </lgBTooltip>

        <div>
          <div style={style} className='text-right'>
            <lgBTooltip placement='left'>
              <lgBBtn color='primary'>Left tooltip</lgBBtn>
              <div>lgBTooltip on left</div>
            </lgBTooltip>
          </div>

          <div style={style} className='text-left'>
            <lgBTooltip placement='right'>
              <lgBBtn color='primary'>Right tooltip</lgBBtn>
              <div>lgBTooltip on right</div>
            </lgBTooltip>
          </div>
        </div>

        <lgBTooltip placement='bottom'>
          <lgBBtn color='primary'>Bottom tooltip</lgBBtn>
          <div>lgBTooltip on bottom</div>
        </lgBTooltip>
      </SectionContainer>

      <SectionContainer header='Custom HTML' className='text-center p-5'>
        <lgBTooltip placement='bottom' clickable>
          <lgBBtn color='primary' >Tooltip with HTML</lgBBtn>
          <span><em>Tooltip</em> <u>with</u> <b>HTML</b></span>
        </lgBTooltip>
      </SectionContainer>
    </lgBContainer>
  );
};

export default TooltipsPage;
