import React from 'react';
import {
  lgBContainer,
  lgBRow,
  lgBCol,
  lgBCard,
  lgBCardBody,
  lgBTable,
  lgBTableBody,
  lgBTableHead
} from 'lgbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

const TableScrollPage = props => {
  const data = {
    columns: [
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
    ],
    rows: [
      {
        id: 1,
        first: 'Mark',
        last: 'Otto',
        handle: '@lgo'
      },
      {
        id: 2,
        first: 'Jacob',
        last: 'Thornton',
        handle: '@fat'
      },
      {
        id: 3,
        first: 'Larry',
        last: 'the Bird',
        handle: '@twitter'
      },
      {
        id: 4,
        first: 'Mark',
        last: 'Otto',
        handle: '@lgo'
      },
      {
        id: 5,
        first: 'Jacob',
        last: 'Thornton',
        handle: '@fat'
      },
      {
        id: 6,
        first: 'Larry',
        last: 'the Bird',
        handle: '@twitter'
      }
    ]
  };

  return (
    <lgBContainer className='mt-3'>
      <DocsLink title='lgBTable Scroll' href='https://lgbootstrap.com/docs/react/tables/scroll/' />
      <lgBRow className='py-3'>
        <lgBCol lg='12'>
          <SectionContainer noBorder header='Static table vertical scroll'>
            <lgBCard>
              <lgBCardBody>
                <lgBTable scrollY>
                  <lgBTableHead columns={data.columns} />
                  <lgBTableBody rows={data.rows} />
                </lgBTable>
              </lgBCardBody>
            </lgBCard>
          </SectionContainer>
        </lgBCol>
      </lgBRow>
    </lgBContainer>
  );
};

export default TableScrollPage;
