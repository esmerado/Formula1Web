import React from 'react';
import { lgBEdgeHeader, lgBContainer, lgBRow, lgBCol, lgBJumbotron, lgBIcon, lgBAnimation } from 'lgbreact';
import MenuLink from '../components/menuLink';

const ModalsNavPage = () => {
  return (
    <>
      <lgBEdgeHeader color='indigo darken-3' className='sectionPage' />
      <lgBAnimation type='zoomIn' duration='500ms'>
        <lgBContainer>
          <lgBRow>
            <lgBCol lg='8' className='mt-3 mx-auto'>
              <lgBJumbotron>
                <h1 className='text-center'>
                  <lgBIcon icon='window-restore' className='indigo-text mr-2' />
                  Modals
                </h1>
                <ul className='list-unstyled example-components-list'>
                  <h6 className='mt-3 grey-text'><strong>FREE</strong> </h6>
                  <MenuLink to='/modals/modal' title='Modal' />
                  <MenuLink to='/modals/modal-form' title='Modal Form' />
                  <MenuLink to='/modals/modal-examples' title='Modal Templates & Examples' />

                  
                </ul>
              </lgBJumbotron>
            </lgBCol>
          </lgBRow>
        </lgBContainer>
      </lgBAnimation>
    </>
  );
}

export default ModalsNavPage;
