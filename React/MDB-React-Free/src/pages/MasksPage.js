import React from 'react';
import { lgBMask, lgBView, lgBContainer, lgBRow, lgBCol } from 'lgbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

const MasksPage = () => {
  return (
    <lgBContainer className='mt-5'>
      <DocsLink
        title='Masks'
        href='https://lgbootstrap.com/docs/react/css/masks/'
      />

      <lgBRow className='justify-content-center'>
        <lgBCol lg='8'>
          <SectionContainer header='pattern={1}'>
            <lgBView>
              <img
                src='https://lgbootstrap.com/img/Photos/Others/nature-sm.jpg'
                className='img-fluid'
                alt=''
              />
              <lgBMask pattern={1} className='flex-center' />
            </lgBView>
          </SectionContainer>
        </lgBCol>

        <lgBCol lg='8'>
          <SectionContainer header='pattern={2}'>
            <lgBView>
              <img
                src='https://lgbootstrap.com/img/Photos/Others/nature-sm.jpg'
                className='img-fluid'
                alt=''
              />
              <lgBMask pattern={2} className='flex-center' />
            </lgBView>
          </SectionContainer>
        </lgBCol>

        <lgBCol lg='8'>
          <SectionContainer header='pattern={3}, waves'>
            <lgBView waves>
              <img
                src='https://lgbootstrap.com/img/Photos/Others/nature-sm.jpg'
                className='img-fluid'
                alt=''
              />
              <lgBMask pattern={3} className='flex-center' />
            </lgBView>
          </SectionContainer>
        </lgBCol>

        <lgBCol lg='8'>
          <SectionContainer header='overlay="blue-light"'>
            <lgBView>
              <img
                src='https://lgbootstrap.com/img/Photos/Others/nature-sm.jpg'
                className='img-fluid'
                alt=''
              />
              <lgBMask className='flex-center' overlay='blue-light' />
            </lgBView>
          </SectionContainer>
        </lgBCol>

        <lgBCol lg='8'>
          <SectionContainer header='overlay="blue-strong"'>
            <lgBView>
              <img
                src='https://lgbootstrap.com/img/Photos/Others/nature-sm.jpg'
                className='img-fluid'
                alt=''
              />
              <lgBMask className='flex-center' overlay='blue-strong' />
            </lgBView>
          </SectionContainer>
        </lgBCol>

        <lgBCol lg='8'>
          <SectionContainer header='overlay="blue-slight", waves'>
            <lgBView waves>
              <img
                src='https://lgbootstrap.com/img/Photos/Others/nature-sm.jpg'
                className='img-fluid'
                alt=''
              />
              <lgBMask className='flex-center' overlay='blue-slight' />
            </lgBView>
          </SectionContainer>
        </lgBCol>
      </lgBRow>
    </lgBContainer>
  );
};

export default MasksPage;
