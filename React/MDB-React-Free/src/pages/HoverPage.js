import React from 'react';
import { lgBMask, lgBView, lgBContainer, lgBRow, lgBCol } from 'lgbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

const HoverPage = () => {
  return (
    <lgBContainer className='mt-5'>
      <DocsLink
        title='Hover Effects'
        href='https://lgbootstrap.com/docs/react/css/hover-effects/'
      />

      <SectionContainer header='Overlay'>
        <lgBRow>
          <lgBCol lg='4'>
            <lgBView hover>
              <img
                src='https://lgbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(75).jpg'
                className='img-fluid'
                alt=''
              />
              <lgBMask className='flex-center' overlay='red-strong'>
                <p className='white-text'>Strong overlay</p>
              </lgBMask>
            </lgBView>
          </lgBCol>
          <lgBCol lg='4'>
            <lgBView hover>
              <img
                src='https://lgbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(75).jpg'
                className='img-fluid'
                alt=''
              />
              <lgBMask className='flex-center' overlay='red-light'>
                <p className='white-text'>Light overlay</p>
              </lgBMask>
            </lgBView>
          </lgBCol>
          <lgBCol lg='4'>
            <lgBView hover>
              <img
                src='https://lgbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(75).jpg'
                className='img-fluid'
                alt=''
              />
              <lgBMask className='flex-center' overlay='red-slight'>
                <p className='white-text'>Super light overlay</p>
              </lgBMask>
            </lgBView>
          </lgBCol>
        </lgBRow>
      </SectionContainer>

      <SectionContainer noBorder>
        <lgBRow>
          <lgBCol lg='6'>
            <SectionContainer header='Zoom'>
              <lgBView hover zoom>
                <img
                  src='https://lgbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(66).jpg'
                  className='img-fluid'
                  alt=''
                />
                <lgBMask className='flex-center'>
                  <p className='white-text'>Zoom effect</p>
                </lgBMask>
              </lgBView>
            </SectionContainer>
          </lgBCol>
          <lgBCol lg='6'>
            <SectionContainer header='Shadow'>
              <img
                src='https://lgbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(42).jpg'
                className='img-fluid hoverable'
                alt=''
              />
            </SectionContainer>
          </lgBCol>
        </lgBRow>
      </SectionContainer>
    </lgBContainer>
  );
};

export default HoverPage;
