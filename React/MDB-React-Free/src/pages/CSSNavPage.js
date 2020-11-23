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

const CSSPage = () => {
  return (
    <>
    <lgBEdgeHeader color='indigo darken-3' className='sectionPage' />
      <lgBAnimation type='zoomIn' duration='500ms'>
        <lgBContainer>
          <lgBRow>
            <lgBCol lg='8' className='mx-auto'>
                <lgBJumbotron className='mt-3'>
                  <h1 className='text-center'>
                    <lgBIcon icon='css3' brand className='indigo-text mr-w' />
                    CSS
                  </h1>
                  <ul className='list-unstyled example-components-list'>
                    <h6 className='mt-3 grey-text'><strong>FREE</strong></h6>
                    <MenuLink to='/css/animations' title='Animation' />
                    <MenuLink to='/css/hover' title='Hover effects' />
                    <MenuLink to='/css/icons' title='Icons' />
                    <MenuLink to='/css/jumbotron' title='Jumbotron' />
                    <MenuLink to='/css/masks' title='Masks' />
                    <MenuLink to='/css/masonry' title='Masonry Layout' />
                  </ul>
                </lgBJumbotron>
            </lgBCol>
          </lgBRow>
        </lgBContainer>
      </lgBAnimation>
    </>
  );
};

export default CSSPage;
