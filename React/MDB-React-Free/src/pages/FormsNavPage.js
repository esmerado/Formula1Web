import React from 'react';
import {
  lgBEdgeHeader,
  lgBContainer,
  lgBRow,
  lgBCol,
  lgBJumbotron,
  lgBIcon,
  lgBAnimation
} from 'lgbreact';
import MenuLink from '../components/menuLink';

const FormsNavPage = () => {
  return (
    <>
      <lgBEdgeHeader color='indigo darken-3' className='sectionPage' />
      <lgBAnimation type='zoomIn' duration='500ms'>
        <lgBContainer>
          <lgBRow>
            <lgBCol lg='8' className='mt-3 mx-auto'>
              <lgBJumbotron>
                <h1 className='text-center'>
                  <lgBIcon icon='edit' className='indigo-text mr-2' />
                  Forms
                </h1>
                <ul className='list-unstyled example-components-list'>
                  <h6 className='mt-3 grey-text'>
                    <strong>FREE</strong>{' '}
                  </h6>
                  <MenuLink to='/forms/forms' title='Forms' />
                  <MenuLink to='/forms/input' title='Input' />
                  <MenuLink to='/forms/inputgroup' title='Input Group' />
                  <MenuLink to='/forms/validation' title='Validation' />
                  
                </ul>
              </lgBJumbotron>
            </lgBCol>
          </lgBRow>
        </lgBContainer>
      </lgBAnimation>
    </>
  );
};

export default FormsNavPage;
