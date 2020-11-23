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

const AddonsNavPage = () => {
  return (
    <>
      <lgBEdgeHeader color='indigo darken-3' className='sectionPage' />
      <lgBAnimation type='zoomIn' duration='500ms'>
        <lgBContainer>
          <lgBRow>
            <lgBCol lg='8' className='mt-3 mx-auto'>
              <lgBJumbotron>
                <h1 className='text-center'>
                  <lgBIcon icon='window-restore' className='mr-2 indigo-text' />
                  Addons
                </h1>
                <ul className='list-unstyled example-components-list'>
                  <h6 className='mt-3 grey-text'>
                    <strong>FREE</strong>
                  </h6>
                  <MenuLink to='/addons/edge-header' title='Edge Header' />
                  <MenuLink to='/addons/iframe' title='Iframe' />
                  <MenuLink to='/addons/notifications' title='Notifications' />
                  <MenuLink to='/addons/treeview' title='Treeview' />
                  <MenuLink to='/addons/rating' title='Rating' />
                  
                </ul>
              </lgBJumbotron>
            </lgBCol>
          </lgBRow>
        </lgBContainer>
      </lgBAnimation>
    </>
  );
};

export default AddonsNavPage;
