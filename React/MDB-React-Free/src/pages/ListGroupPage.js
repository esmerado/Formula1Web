import React from 'react';
import {
  lgBListGroup,
  lgBListGroupItem,
  lgBRow,
  lgBBadge,
  lgBContainer
} from 'lgbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

const ListGroupPage = () => {
  return (
    <lgBContainer>
      <DocsLink
        title='List Group'
        href='https://lgbootstrap.com/docs/react/components/list-group/'
      />
      <lgBRow>
        <SectionContainer
          className='d-flex justify-content-center'
          header='Basic example'
        >
          <lgBListGroup className='my-4 mx-4' style={{ width: '22rem' }}>
            <lgBListGroupItem>Cras justo odio</lgBListGroupItem>
            <lgBListGroupItem>Dapibus ac facilisis in</lgBListGroupItem>
            <lgBListGroupItem>Morbi leo risus</lgBListGroupItem>
            <lgBListGroupItem>Porta ac consectetur ac</lgBListGroupItem>
            <lgBListGroupItem>Vestibulum at eros</lgBListGroupItem>
          </lgBListGroup>
        </SectionContainer>

        <SectionContainer
          className='d-flex justify-content-center'
          header='Labels'
        >
          <lgBListGroup className='my-4 mx-4' style={{ width: '22rem' }}>
            <lgBListGroupItem className='d-flex justify-content-between align-items-center'>
              Cras justo odio
              <lgBBadge color='primary' pill>
                14
              </lgBBadge>
            </lgBListGroupItem>
            <lgBListGroupItem className='d-flex justify-content-between align-items-center'>
              Dapibus ac facilisis in
              <lgBBadge color='primary' pill>
                2
              </lgBBadge>
            </lgBListGroupItem>
            <lgBListGroupItem className='d-flex justify-content-between align-items-center'>
              Morbi leo risus
              <lgBBadge color='primary' pill>
                1
              </lgBBadge>
            </lgBListGroupItem>
          </lgBListGroup>
        </SectionContainer>

        <SectionContainer
          className='d-flex justify-content-center'
          header='Linked items'
        >
          <lgBListGroup className='my-4 mx-4' style={{ width: '22rem' }}>
            <lgBListGroupItem href='#' active>
              Cras justo odio
            </lgBListGroupItem>
            <lgBListGroupItem href='#'>
              Dapibus ac facilisis in
            </lgBListGroupItem>
            <lgBListGroupItem href='#'>Morbi leo risus</lgBListGroupItem>
            <lgBListGroupItem href='#'>
              Porta ac consectetur ac
            </lgBListGroupItem>
            <lgBListGroupItem href='#'>Vestibulum at eros</lgBListGroupItem>
          </lgBListGroup>
        </SectionContainer>

        <SectionContainer
          className='d-flex justify-content-center'
          header='Links and buttons'
        >
          <lgBListGroup className='my-4 mx-4' style={{ width: '22rem' }}>
            <lgBListGroupItem href='#' active>
              Cras justo odio
            </lgBListGroupItem>
            <lgBListGroupItem href='#' hover>
              Dapibus ac facilisis in
            </lgBListGroupItem>
            <lgBListGroupItem href='#' hover>
              Morbi leo risus
            </lgBListGroupItem>
            <lgBListGroupItem href='#' hover>
              Porta ac consectetur ac
            </lgBListGroupItem>
            <lgBListGroupItem href='#' disabled>
              Vestibulum at eros
            </lgBListGroupItem>
          </lgBListGroup>
        </SectionContainer>

        <SectionContainer
          className='d-flex justify-content-center'
          header='Contextual classes'
        >
          <lgBListGroup className='my-4 mx-4' style={{ width: '22rem' }}>
            <lgBListGroupItem color='primary'>Cras justo odio</lgBListGroupItem>
            <lgBListGroupItem color='secondary'>
              Dapibus ac facilisis in
            </lgBListGroupItem>
            <lgBListGroupItem color='danger'>Morbi leo risus</lgBListGroupItem>
            <lgBListGroupItem color='warning'>
              Porta ac consectetur ac
            </lgBListGroupItem>
            <lgBListGroupItem color='info'>Vestibulum at eros</lgBListGroupItem>
            <lgBListGroupItem color='light'>
              Vestibulum at eros
            </lgBListGroupItem>
            <lgBListGroupItem color='dark'>Vestibulum at eros</lgBListGroupItem>
          </lgBListGroup>
        </SectionContainer>

        <SectionContainer
          className='d-flex justify-content-center'
          header='Custom content'
        >
          <lgBListGroup className='my-4 mx-4' style={{ width: '22rem' }}>
            <lgBListGroupItem active href='#'>
              <div className='d-flex w-100 justify-content-between'>
                <h5 className='mb-1'>List group item heading</h5>
                <small>3 days ago</small>
              </div>
              <p className='mb-1'>
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              </p>
              <small>Donec id elit non mi porta.</small>
            </lgBListGroupItem>
            <lgBListGroupItem hover href='#'>
              <div className='d-flex w-100 justify-content-between'>
                <h5 className='mb-1'>List group item heading</h5>
                <small className='text-muted'>3 days ago</small>
              </div>
              <p className='mb-1'>
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              </p>
              <small className='text-muted'>Donec id elit non mi porta.</small>
            </lgBListGroupItem>
            <lgBListGroupItem hover href='#'>
              <div className='d-flex w-100 justify-content-between'>
                <h5 className='mb-1'>List group item heading</h5>
                <small className='text-muted'>3 days ago</small>
              </div>
              <p className='mb-1'>
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              </p>
              <small className='text-muted'>Donec id elit non mi porta.</small>
            </lgBListGroupItem>
          </lgBListGroup>
        </SectionContainer>
      </lgBRow>
    </lgBContainer>
  );
};

export default ListGroupPage;
