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

const AdvancedNavPage = () => {
  return (
    <>
      <lgBEdgeHeader color='indigo darken-3' className='sectionPage' />
      <lgBAnimation type='zoomIn' duration='500ms'>
        <lgBContainer>
          <lgBRow>
            <lgBCol lg='8' className='mt-3 mx-auto'>
              <lgBJumbotron>
                <h1 className='text-center'>
                  <lgBIcon icon='code' className='indigo-text mr-2' />
                  Advanced
                </h1>
                <ul className='list-unstyled example-components-list'>
                  <h6 className='mt-3 grey-text'>
                    <strong>FREE</strong>{' '}
                  </h6>
                  <MenuLink to='/advanced/alerts' title='Alerts' />
                  <MenuLink to='/advanced/carousel' title='Carousel' />
                  <MenuLink to='/advanced/charts' title='Charts' />
                  <MenuLink to='/advanced/collapse' title='Collapse' />
                  <MenuLink to='/advanced/popover' title='Popover' />
                  <MenuLink to='/advanced/scrollbar' title='ScrollBar' />
                  <MenuLink to='/advanced/tooltips' title='Tooltips' />
                  <MenuLink
                    to='/advanced/videocarousel'
                    title='Video Carousel'
                  />
                  
                </ul>
              </lgBJumbotron>
            </lgBCol>
          </lgBRow>
        </lgBContainer>
      </lgBAnimation>
    </>
  );
};

export default AdvancedNavPage;
