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

const TablePage = props => {
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
      }
    ]
  };

  const data_collspan = {
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
        first: 'Larry the Bird',
        colspan: 2,
        handle: '@twitter'
      }
    ]
  };

  const data_responsive = {
    columns: [
      {
        label: '#',
        field: 'id',
        sort: 'asc'
      },
      {
        label: 'Heading',
        field: 'heading0',
        sort: 'asc'
      },
      {
        label: 'Heading',
        field: 'heading1',
        sort: 'asc'
      },
      {
        label: 'Heading',
        field: 'heading2',
        sort: 'asc'
      },
      {
        label: 'Heading',
        field: 'heading3',
        sort: 'asc'
      },
      {
        label: 'Heading',
        field: 'heading4',
        sort: 'asc'
      },
      {
        label: 'Heading',
        field: 'heading5',
        sort: 'asc'
      },
      {
        label: 'Heading',
        field: 'heading6',
        sort: 'asc'
      },
      {
        label: 'Heading',
        field: 'heading7',
        sort: 'asc'
      },
      {
        label: 'Heading',
        field: 'heading8',
        sort: 'asc'
      }
    ],
    rows: [
      {
        id: 1,
        heading0: 'Cell',
        heading1: 'Cell',
        heading2: 'Cell',
        heading3: 'Cell',
        heading4: 'Cell',
        heading5: 'Cell',
        heading6: 'Cell',
        heading7: 'Cell',
        heading8: 'Cell'
      },
      {
        id: 2,
        heading0: 'Cell',
        heading1: 'Cell',
        heading2: 'Cell',
        heading3: 'Cell',
        heading4: 'Cell',
        heading5: 'Cell',
        heading6: 'Cell',
        heading7: 'Cell',
        heading8: 'Cell'
      },
      {
        id: 3,
        heading0: 'Cell',
        heading1: 'Cell',
        heading2: 'Cell',
        heading3: 'Cell',
        heading4: 'Cell',
        heading5: 'Cell',
        heading6: 'Cell',
        heading7: 'Cell',
        heading8: 'Cell'
      }
    ]
  };

  return (
    <lgBContainer className='mt-3'>
      <DocsLink
        title='Tables'
        href='https://lgbootstrap.com/docs/react/tables/basic/'
      />
      <lgBRow className='py-3'>
        <lgBCol lg='12'>
          <SectionContainer noBorder title='Basic example'>
            <lgBCard>
              <lgBCardBody>
                <lgBTable>
                  <lgBTableHead>
                    <tr>
                      <th>#</th>
                      <th>First</th>
                      <th>Last</th>
                      <th>Handle</th>
                    </tr>
                  </lgBTableHead>
                  <lgBTableBody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@lgo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </lgBTableBody>
                </lgBTable>
              </lgBCardBody>
            </lgBCard>
          </SectionContainer>
        </lgBCol>
      </lgBRow>

      <lgBRow className='py-3'>
        <lgBCol lg='12'>
          <SectionContainer noBorder title='Head options'>
            <lgBCard>
              <lgBCardBody>
                <lgBTable className='mb-5'>
                  <lgBTableHead
                    columns={data.columns}
                    color='primary-color'
                    textWhite
                  />
                  <lgBTableBody rows={data.rows} />
                </lgBTable>

                <lgBTable>
                  <lgBTableHead columns={data.columns} color='dark' />
                  <lgBTableBody rows={data.rows} />
                </lgBTable>
              </lgBCardBody>
            </lgBCard>
          </SectionContainer>
        </lgBCol>
      </lgBRow>

      <lgBRow className='py-3'>
        <lgBCol lg='12'>
          <SectionContainer noBorder title='Striped rows'>
            <lgBCard>
              <lgBCardBody>
                <lgBTable striped>
                  <lgBTableHead columns={data.columns} />
                  <lgBTableBody rows={data.rows} />
                </lgBTable>
              </lgBCardBody>
            </lgBCard>
          </SectionContainer>
        </lgBCol>
      </lgBRow>

      <lgBRow className='py-3'>
        <lgBCol lg='12'>
          <SectionContainer noBorder title='Bordered'>
            <lgBCard>
              <lgBCardBody>
                <lgBTable bordered>
                  <lgBTableHead
                    columns={data_collspan.columns}
                    color='primary-color'
                    textWhite
                  />
                  <lgBTableBody rows={data_collspan.rows} />
                </lgBTable>
              </lgBCardBody>
            </lgBCard>
          </SectionContainer>
        </lgBCol>
      </lgBRow>

      <lgBRow className='py-3'>
        <lgBCol lg='12'>
          <SectionContainer noBorder title='Borderless'>
            <lgBCard>
              <lgBCardBody>
                <lgBTable borderless>
                  <lgBTableHead columns={data_collspan.columns} />
                  <lgBTableBody rows={data_collspan.rows} />
                </lgBTable>
              </lgBCardBody>
            </lgBCard>
          </SectionContainer>
        </lgBCol>
      </lgBRow>

      <lgBRow className='py-3'>
        <lgBCol lg='12'>
          <SectionContainer noBorder title='Hoverable'>
            <lgBCard>
              <lgBCardBody>
                <lgBTable hover>
                  <lgBTableHead
                    columns={data_collspan.columns}
                    color='secondary-color'
                    textWhite
                  />
                  <lgBTableBody rows={data_collspan.rows} />
                </lgBTable>
              </lgBCardBody>
            </lgBCard>
          </SectionContainer>
        </lgBCol>
      </lgBRow>

      <lgBRow className='py-3'>
        <lgBCol lg='12'>
          <SectionContainer noBorder title='Small'>
            <lgBCard>
              <lgBCardBody>
                <lgBTable small>
                  <lgBTableHead
                    columns={data_collspan.columns}
                    color='primary-color'
                    textWhite
                  />
                  <lgBTableBody rows={data_collspan.rows} />
                </lgBTable>
              </lgBCardBody>
            </lgBCard>
          </SectionContainer>
        </lgBCol>
      </lgBRow>

      <lgBRow className='py-3'>
        <lgBCol lg='12'>
          <SectionContainer noBorder title='Captions'>
            <lgBCard>
              <lgBCardBody>
                <lgBTable>
                  <caption>List of users</caption>
                  <lgBTableHead
                    columns={data.columns}
                    color='indigo'
                    textWhite
                  />
                  <lgBTableBody rows={data.rows} />
                </lgBTable>
              </lgBCardBody>
            </lgBCard>
          </SectionContainer>
        </lgBCol>
      </lgBRow>

      <lgBRow className='py-3'>
        <lgBCol lg='12'>
          <SectionContainer noBorder title='Responsive'>
            <lgBCard>
              <lgBCardBody>
                <lgBTable responsive>
                  <lgBTableHead
                    columns={data_responsive.columns}
                    color='primary-color'
                    textWhite
                  />
                  <lgBTableBody rows={data_responsive.rows} />
                </lgBTable>
              </lgBCardBody>
            </lgBCard>
          </SectionContainer>
        </lgBCol>
      </lgBRow>
    </lgBContainer>
  );
};

export default TablePage;
