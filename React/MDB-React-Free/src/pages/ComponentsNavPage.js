import React from 'react';
import {
  lgBContainer,
  lgBRow,
  lgBAnimation,
  lgBCol,
  lgBJumbotron,
  lgBIcon,
  lgBEdgeHeader
} from 'lgbreact';
import MenuLink from '../components/menuLink';

const ComponentsNavPage = () => {
  return (
    <>
      <lgBEdgeHeader color='indigo darken-3' className='sectionPage' />
      <lgBAnimation type='zoomIn' duration='500ms'>
        <lgBContainer>
          <lgBRow>
            <lgBCol lg='8' className='mt-3 mx-auto'>
              <lgBJumbotron>
                <h1 className='text-center'>
                  <lgBIcon icon='cubes' className='indigo-text mr-2' />
                  Components
                </h1>
                <ul className='list-unstyled example-components-list'>
                  <h6 className='mt-3 grey-text'><strong>FREE</strong> </h6>
                  <MenuLink to='/components/badge' title='Badge' />
                  <MenuLink to='/components/buttons' title='Buttons' />
                  <MenuLink to='/components/cards' title='Cards' />
                  <MenuLink to='/components/dropdown' title='Dropdown' />
                  <MenuLink to='/components/list-group' title='List group' />
                  <MenuLink to='/components/media' title='Media' />
                  <MenuLink to='/components/panels' title='Panels' />
                  <MenuLink to='/components/pagination' title='Pagination' />
                  <MenuLink to='/components/progress' title='Progress' />
                  <MenuLink to='/components/search' title='Search' />
                  <MenuLink to='/components/spinner' title='Loader/Spinner' />
                  <MenuLink to='/components/tabs' title='Tabs' />
                  <MenuLink to='/components/pills' title='Pills' />
                  
                </ul>
              </lgBJumbotron>
            </lgBCol>
          </lgBRow>
        </lgBContainer>
      </lgBAnimation>
    </>
  );
};

export default ComponentsNavPage;
