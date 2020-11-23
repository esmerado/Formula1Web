import React from 'react';
import {
  lgBBreadcrumb,
  lgBBreadcrumbItem,
  lgBContainer,
  lgBNavbar,
  lgBNavbarNav,
  lgBNavItem
} from 'lgbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

const BreadcrumbPage = props => {
  return (
    <lgBContainer>
      <DocsLink
        title='Breadcrumb'
        href='https://lgbootstrap.com/docs/react/navigation/breadcrumb/'
      />

      <SectionContainer header='Basic examples'>
        <lgBBreadcrumb>
          <lgBBreadcrumbItem active>Home</lgBBreadcrumbItem>
        </lgBBreadcrumb>

        <lgBBreadcrumb>
          <lgBBreadcrumbItem>Home</lgBBreadcrumbItem>
          <lgBBreadcrumbItem active>Library</lgBBreadcrumbItem>
        </lgBBreadcrumb>

        <lgBBreadcrumb>
          <lgBBreadcrumbItem>Home</lgBBreadcrumbItem>
          <lgBBreadcrumbItem>Library</lgBBreadcrumbItem>
          <lgBBreadcrumbItem active>Data</lgBBreadcrumbItem>
        </lgBBreadcrumb>
      </SectionContainer>

      <SectionContainer header='With dark background'>
        <lgBBreadcrumb light color='default'>
          <lgBBreadcrumbItem>Home</lgBBreadcrumbItem>
          <lgBBreadcrumbItem active>Library</lgBBreadcrumbItem>
        </lgBBreadcrumb>

        <lgBBreadcrumb light color='primary'>
          <lgBBreadcrumbItem>Home</lgBBreadcrumbItem>
          <lgBBreadcrumbItem active>Library</lgBBreadcrumbItem>
        </lgBBreadcrumb>

        <lgBBreadcrumb light color='secondary'>
          <lgBBreadcrumbItem>Home</lgBBreadcrumbItem>
          <lgBBreadcrumbItem>Library</lgBBreadcrumbItem>
          <lgBBreadcrumbItem active>Data</lgBBreadcrumbItem>
        </lgBBreadcrumb>
      </SectionContainer>

      <SectionContainer header='With light background'>
        <lgBBreadcrumb color='cyan lighten-4'>
          <lgBBreadcrumbItem>Home</lgBBreadcrumbItem>
          <lgBBreadcrumbItem>Library</lgBBreadcrumbItem>
          <lgBBreadcrumbItem active>Data</lgBBreadcrumbItem>
        </lgBBreadcrumb>

        <lgBBreadcrumb color='pink lighten-4'>
          <lgBBreadcrumbItem>Home</lgBBreadcrumbItem>
          <lgBBreadcrumbItem active>Library</lgBBreadcrumbItem>
        </lgBBreadcrumb>

        <lgBBreadcrumb color='purple lighten-4'>
          <lgBBreadcrumbItem>Home</lgBBreadcrumbItem>
          <lgBBreadcrumbItem active>Library</lgBBreadcrumbItem>
        </lgBBreadcrumb>
      </SectionContainer>

      <SectionContainer header='With uppercases'>
        <lgBBreadcrumb uppercase color='cyan lighten-4'>
          <lgBBreadcrumbItem>Home</lgBBreadcrumbItem>
          <lgBBreadcrumbItem active>Library</lgBBreadcrumbItem>
        </lgBBreadcrumb>

        <lgBBreadcrumb bold uppercase color='cyan lighten-4'>
          <lgBBreadcrumbItem>Home</lgBBreadcrumbItem>
          <lgBBreadcrumbItem active>Library</lgBBreadcrumbItem>
        </lgBBreadcrumb>
      </SectionContainer>

      <SectionContainer header='With icons'>
        <lgBBreadcrumb light color='pink lighten-4'>
          <lgBBreadcrumbItem icon='star'>Home</lgBBreadcrumbItem>
        </lgBBreadcrumb>

        <lgBBreadcrumb light color='pink lighten-3'>
          <lgBBreadcrumbItem icon='star'>Home</lgBBreadcrumbItem>
          <lgBBreadcrumbItem icon='star' active>
            Library
          </lgBBreadcrumbItem>
        </lgBBreadcrumb>

        <lgBBreadcrumb light color='pink lighten-2'>
          <lgBBreadcrumbItem icon='star'>Home</lgBBreadcrumbItem>
          <lgBBreadcrumbItem icon='star'>Library</lgBBreadcrumbItem>
          <lgBBreadcrumbItem icon='star' active>
            Data
          </lgBBreadcrumbItem>
        </lgBBreadcrumb>
      </SectionContainer>

      <SectionContainer header='With arrows'>
        <lgBBreadcrumb color='indigo lighten-4'>
          <lgBBreadcrumbItem appendIcon icon='caret-right'>
            Home
          </lgBBreadcrumbItem>
          <lgBBreadcrumbItem appendIcon icon='caret-right'>
            Library
          </lgBBreadcrumbItem>
          <lgBBreadcrumbItem appendIcon active>
            Data
          </lgBBreadcrumbItem>
        </lgBBreadcrumb>

        <lgBBreadcrumb color='blue-grey lighten-4'>
          <lgBBreadcrumbItem appendIcon icon='angle-double-right'>
            Home
          </lgBBreadcrumbItem>
          <lgBBreadcrumbItem appendIcon icon='angle-double-right'>
            Library
          </lgBBreadcrumbItem>
          <lgBBreadcrumbItem appendIcon active>
            Data
          </lgBBreadcrumbItem>
        </lgBBreadcrumb>

        <lgBBreadcrumb color='purple lighten-4'>
          <lgBBreadcrumbItem appendIcon icon='angle-right'>
            Home
          </lgBBreadcrumbItem>
          <lgBBreadcrumbItem appendIcon icon='angle-right'>
            Library
          </lgBBreadcrumbItem>
          <lgBBreadcrumbItem appendIcon active>
            Data
          </lgBBreadcrumbItem>
        </lgBBreadcrumb>

        <lgBBreadcrumb color='red lighten-4'>
          <lgBBreadcrumbItem appendIcon icon='angle-double-left'>
            Home
          </lgBBreadcrumbItem>
          <lgBBreadcrumbItem appendIcon icon='angle-double-left'>
            Library
          </lgBBreadcrumbItem>
          <lgBBreadcrumbItem appendIcon active>
            Data
          </lgBBreadcrumbItem>
        </lgBBreadcrumb>

        <lgBBreadcrumb color='cyan lighten-4'>
          <lgBBreadcrumbItem appendIcon icon='angle-left'>
            Home
          </lgBBreadcrumbItem>
          <lgBBreadcrumbItem appendIcon icon='angle-left'>
            Library
          </lgBBreadcrumbItem>
          <lgBBreadcrumbItem appendIcon active>
            Data
          </lgBBreadcrumbItem>
        </lgBBreadcrumb>

        <lgBBreadcrumb color='amber lighten-4'>
          <lgBBreadcrumbItem appendIcon icon='caret-left'>
            Home
          </lgBBreadcrumbItem>
          <lgBBreadcrumbItem appendIcon icon='caret-left'>
            Library
          </lgBBreadcrumbItem>
          <lgBBreadcrumbItem appendIcon active>
            Data
          </lgBBreadcrumbItem>
        </lgBBreadcrumb>
      </SectionContainer>

      <SectionContainer header='With hamburger button'>
        <lgBNavbar color='indigo' style={{ marginTop: '20px' }} dark>
          <span className='navbar-toggler-icon' />
          <lgBNavbarNav left>
            <lgBBreadcrumb color='indigo'>
              <lgBBreadcrumbItem>Home</lgBBreadcrumbItem>
              <lgBBreadcrumbItem active>Library</lgBBreadcrumbItem>
            </lgBBreadcrumb>
          </lgBNavbarNav>
          <lgBNavbarNav right>
            <lgBNavItem>
              <input
                className='form-control form-control-sm ml-3 w-75'
                type='text'
                placeholder='Search'
                aria-label='Search'
              />
            </lgBNavItem>
          </lgBNavbarNav>
        </lgBNavbar>
      </SectionContainer>
    </lgBContainer>
  );
};

export default BreadcrumbPage;
