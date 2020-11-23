import React from 'react';
import {
  lgBFreeBird,
  lgBInput,
  lgBCol,
  lgBRow,
  lgBCardBody,
  lgBCardTitle,
  lgBBtn,
  lgBContainer,
  lgBEdgeHeader
} from 'lgbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

const EdgeHeaderPage = props => {
  return (
    <lgBContainer className='mt-3 text-center'>
      <DocsLink
        title='Edge Header'
        href='https://lgbootstrap.com/plugins/react/edge-header/'
      />
      <SectionContainer>
        <lgBEdgeHeader color='lgb-color darken-2' />
        <lgBFreeBird>
          <lgBRow>
            <lgBCol
              lg='8'
              lg='7'
              className='text-left mx-auto float-none white z-depth-1 py-2 px-2'
            >
              <lgBCardBody>
                <lgBCardTitle>Material Design Edge Headers</lgBCardTitle>
                <p className='pb-4'>Example of Material Design Form</p>
                <form>
                  <lgBInput label='Your name' group type='text' icon='user' />
                  <lgBInput
                    label='Your email'
                    group
                    type='email'
                    icon='envelope'
                  />
                  <lgBInput
                    type='textarea'
                    rows='2'
                    label='Textarea'
                    icon='pencil-alt'
                  />
                  <lgBBtn color='lgb-color' className='text-xs-left'>
                    Submit
                  </lgBBtn>
                </form>
                <div className='my-2'>
                  <p style={{ fontWeight: '300', fontSize: '0.75rem' }}>
                    Never submit your passwords here
                  </p>
                </div>
              </lgBCardBody>
            </lgBCol>
          </lgBRow>
        </lgBFreeBird>
      </SectionContainer>
    </lgBContainer>
  );
};

export default EdgeHeaderPage;
