import React from 'react';
import { lgBCol, lgBContainer, lgBRow, lgBFooter } from 'lgbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

const FooterPage = () => {
  return (
    <lgBContainer>
      <DocsLink
        title='Footer'
        href='https://lgbootstrap.com/docs/react/navigation/footer/'
      />
      <SectionContainer header='Basic example'>
        <lgBFooter color='blue' className='font-small pt-4 mt-4'>
          <lgBContainer fluid className='text-center text-lg-left'>
            <lgBRow>
              <lgBCol lg='6'>
                <h5 className='title'>Footer Content</h5>
                <p>
                  Here you can use rows and columns here to organize your footer
                  content.
                </p>
              </lgBCol>
              <lgBCol lg='6'>
                <h5 className='title'>Links</h5>
                <ul>
                  <li className='list-unstyled'>
                    <a href='#!'>Link 1</a>
                  </li>
                  <li className='list-unstyled'>
                    <a href='#!'>Link 2</a>
                  </li>
                  <li className='list-unstyled'>
                    <a href='#!'>Link 3</a>
                  </li>
                  <li className='list-unstyled'>
                    <a href='#!'>Link 4</a>
                  </li>
                </ul>
              </lgBCol>
            </lgBRow>
          </lgBContainer>
          <div className='footer-copyright text-center py-3'>
            <lgBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright:{' '}
              <a href='https://www.lgBootstrap.com'> lgBootstrap.com </a>
            </lgBContainer>
          </div>
        </lgBFooter>
      </SectionContainer>
    </lgBContainer>
  );
};

export default FooterPage;
