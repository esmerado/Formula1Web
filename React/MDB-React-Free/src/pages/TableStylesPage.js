import React from 'react';
import {
  lgBBtn,
  lgBContainer,
  lgBRow,
  lgBCol,
  lgBCard,
  lgBCardBody,
  lgBTable,
  lgBTableBody,
  lgBTableHead,
  lgBIcon
} from 'lgbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

const TableStylesPage = props => {
  const columns = [
    {
      label: '#',
      field: 'id',
      sort: 'asc'
    },
    {
      label: 'First',
      field: 'first',
      sort: 'asc'
    },
    {
      label: 'Last',
      field: 'last',
      sort: 'asc'
    },
    {
      label: 'Handle',
      field: 'handle',
      sort: 'asc'
    }
  ];

  const rows_regular_btn = [
    {
      id: 1,
      first: (
        <lgBBtn color='purple' size='sm'>
          Button
        </lgBBtn>
      ),
      last: 'Otto',
      handle: '@lgo'
    },
    {
      id: 2,
      first: 'Jacob',
      last: (
        <lgBBtn color='purple' size='sm'>
          Button
        </lgBBtn>
      ),
      handle: '@fat'
    },
    {
      id: 3,
      first: 'Larry',
      last: 'the Bird',
      handle: (
        <lgBBtn color='purple' size='sm'>
          Button
        </lgBBtn>
      )
    }
  ];

  const rows_outline_btn = [
    {
      id: 1,
      first: (
        <lgBBtn color='purple' outline size='sm'>
          Button
        </lgBBtn>
      ),
      last: 'Otto',
      handle: '@lgo'
    },
    {
      id: 2,
      first: 'Jacob',
      last: (
        <lgBBtn color='purple' outline size='sm'>
          Button
        </lgBBtn>
      ),
      handle: '@fat'
    },
    {
      id: 3,
      first: 'Larry',
      last: 'the Bird',
      handle: (
        <lgBBtn color='purple' outline size='sm'>
          Button
        </lgBBtn>
      )
    }
  ];

  const rows_rounded_btn = [
    {
      id: 1,
      first: (
        <lgBBtn color='default' rounded size='sm'>
          Button
        </lgBBtn>
      ),
      last: 'Otto',
      handle: '@lgo'
    },
    {
      id: 2,
      first: 'Jacob',
      last: (
        <lgBBtn color='default' rounded size='sm'>
          Button
        </lgBBtn>
      ),
      handle: '@fat'
    },
    {
      id: 3,
      first: 'Larry',
      last: 'the Bird',
      handle: (
        <lgBBtn color='default' rounded size='sm'>
          Button
        </lgBBtn>
      )
    }
  ];

  const data_icons = {
    columns: [
      {
        label: '#',
        field: 'id',
        sort: 'asc'
      },
      {
        label: [<lgBIcon key='Lorem' icon='leaf' className='mr-2 blue-text' aria-hidden='true' />, 'Lorem'],
        field: 'lorem',
        sort: 'asc'
      },
      {
        label: [<lgBIcon key='Ipsum' icon='leaf' className='mr-2 teal-text' aria-hidden='true' />, 'Ipsum'],
        field: 'ipsum',
        sort: 'asc'
      },
      {
        label: [<lgBIcon key='Dolor' icon='leaf' className='mr-2 indigo-text' aria-hidden='true' />, 'Dolor'],
        field: 'dolor',
        sort: 'asc'
      }
    ],
    rows: [
      {
        id: 1,
        lorem: [<lgBIcon key='cell1' icon='gem' className='mr-2 grey-text' aria-hidden='true' />, 'Cell1'],
        ipsum: [<lgBIcon key='cell2' icon='download' className='mr-2 grey-text' aria-hidden='true' />, 'Cell2'],
        dolor: [<lgBIcon key='cell3' icon='book' className='mr-2 grey-text' aria-hidden='true' />, 'Cell3']
      },
      {
        id: 2,
        lorem: [
          <lgBIcon key='cell1' icon='graduation-cap' className='mr-2 grey-text' aria-hidden='true' />,
          'Cell1'
        ],
        ipsum: [<lgBIcon key='cell2' icon='gift' className='mr-2 grey-text' aria-hidden='true' />, 'Cell2'],
        dolor: [<lgBIcon key='cell3' icon='image' className='mr-2 grey-text' aria-hidden='true' />, 'Cell3']
      },
      {
        id: 3,
        lorem: [<lgBIcon key='cell1' icon='magic' className='mr-2 grey-text' aria-hidden='true' />, 'Cell1'],
        ipsum: [<lgBIcon key='cell2' icon='table' className='mr-2 grey-text' aria-hidden='true' />, 'Cell2'],
        dolor: [<lgBIcon key='cell3' icon='edit' className='mr-2 grey-text' aria-hidden='true' />, 'Cell3']
      }
    ]
  };

  return (
    <lgBContainer className='mt-3'>
      <DocsLink
        title='Tables with additional elements'
        href='https://lgbootstrap.com/docs/react/tables/additional/'
      />
      <lgBRow className='py-3'>
        <lgBCol lg='12'>
          <SectionContainer header='With regular buttons' noBorder>
            <lgBCard>
              <lgBCardBody>
                <lgBTable btn>
                  <lgBTableHead columns={columns} />
                  <lgBTableBody rows={rows_regular_btn} />
                </lgBTable>
              </lgBCardBody>
            </lgBCard>
          </SectionContainer>
        </lgBCol>
      </lgBRow>

      <lgBRow className='py-3'>
        <lgBCol lg='12'>
          <SectionContainer header='With outline buttons' noBorder>
            <lgBCard>
              <lgBCardBody>
                <lgBTable btn>
                  <lgBTableHead columns={columns} />
                  <lgBTableBody rows={rows_outline_btn} />
                </lgBTable>
              </lgBCardBody>
            </lgBCard>
          </SectionContainer>
        </lgBCol>
      </lgBRow>

      <lgBRow className='py-3'>
        <lgBCol lg='12'>
          <SectionContainer header='With rounded buttons' noBorder>
            <lgBCard>
              <lgBCardBody>
                <lgBTable btn>
                  <lgBTableHead columns={columns} />
                  <lgBTableBody rows={rows_rounded_btn} />
                </lgBTable>
              </lgBCardBody>
            </lgBCard>
          </SectionContainer>
        </lgBCol>
      </lgBRow>

      <lgBRow className='py-3'>
        <lgBCol lg='12'>
          <SectionContainer header='With icons' noBorder>
            <lgBCard>
              <lgBCardBody>
                <lgBTable btn fixed>
                  <lgBTableHead columns={data_icons.columns} />
                  <lgBTableBody rows={data_icons.rows} />
                </lgBTable>
              </lgBCardBody>
            </lgBCard>
          </SectionContainer>
        </lgBCol>
      </lgBRow>
    </lgBContainer>
  );
};

export default TableStylesPage;
