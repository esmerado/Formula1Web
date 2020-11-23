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

const TableResponsivePage = props => {
  const data = {
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

  const data_people = {
    columns: [
      {
        label: '#',
        field: 'id',
        sort: 'asc'
      },
      {
        label: 'Name',
        field: 'name',
        sort: 'asc'
      },
      {
        label: 'Surname',
        field: 'surname',
        sort: 'asc'
      },
      {
        label: 'Country',
        field: 'country',
        sort: 'asc'
      },
      {
        label: 'City',
        field: 'city',
        sort: 'asc'
      },
      {
        label: 'Position',
        field: 'position',
        sort: 'asc'
      },
      {
        label: 'Age',
        field: 'age',
        sort: 'asc'
      }
    ],
    rows: [
      {
        id: '1',
        name: 'Kate',
        surname: 'Moss',
        country: 'USA',
        city: 'New York City',
        position: 'Web Designer',
        age: '23'
      },
      {
        id: '2',
        name: 'Anna',
        surname: 'Wintour',
        country: 'United Kingdom',
        city: 'London',
        position: 'Frontend Developer',
        age: '36'
      },
      {
        id: '3',
        name: 'Tom',
        surname: 'Bond',
        country: 'Spain',
        city: 'Madrid',
        position: 'Photographer',
        age: '25'
      },
      {
        id: '4',
        name: 'Jerry',
        surname: 'Horwitz',
        country: 'Italy',
        city: 'Bari',
        position: 'Editor-in-chief',
        age: '41'
      },
      {
        id: '5',
        name: 'Janis',
        surname: 'Joplin',
        country: 'Poland',
        city: 'Warsaw',
        position: 'Video Maker',
        age: '39'
      },
      {
        id: '6',
        name: 'Gary',
        surname: 'Winogrand',
        country: 'Germany',
        city: 'Berlin',
        position: 'Photographer',
        age: '37'
      },
      {
        id: '7',
        name: 'Angie',
        surname: 'Smitd',
        country: 'USA',
        city: 'San Francisco',
        position: 'Teacher',
        age: '52'
      },
      {
        id: '8',
        name: 'John',
        surname: 'Mattis',
        country: 'France',
        city: 'Paris',
        position: 'Actor',
        age: '28'
      },
      {
        id: '9',
        name: 'Otto',
        surname: 'Morris',
        country: 'Germany',
        city: 'Munich',
        position: 'Singer',
        age: '35'
      }
    ]
  };

  const data_minimal_width = {
    columns: [
      {
        label: '#',
        field: 'id',
        sort: 'asc',
        minimal: 'sm'
      },
      {
        label: 'Lorem ipsum dolor',
        field: 'lorem ipsum dolor',
        sort: 'asc',
        minimal: 'lg'
      },
      {
        label: 'Lorem ipsum dolor',
        field: 'lorem ipsum',
        sort: 'asc',
        minimal: 'sm'
      },
      {
        label: 'Lorem ipsum dolor',
        field: 'lorem ',
        sort: 'asc',
        minimal: 'lg'
      }
    ],
    rows: [
      {
        id: '1',
        'lorem ipsum dolor': 'Lorem ipsum dolor',
        'lorem ipsum': 'Lorem ipsum dolor',
        lorem: 'Lorem ipsum dolor'
      },
      {
        id: '2',
        'lorem ipsum dolor': 'Lorem ipsum dolor',
        'lorem ipsum': 'Lorem ipsum dolor',
        lorem: 'Lorem ipsum dolor'
      },
      {
        id: '3',
        'lorem ipsum dolor': 'Lorem ipsum dolor',
        'lorem ipsum': 'Lorem ipsum dolor',
        lorem: 'Lorem ipsum dolor'
      }
    ]
  };

  return (
    <lgBContainer className='mt-3'>
      <DocsLink title='Table Responsive' href='https://lgbootstrap.com/docs/react/tables/responsive/' />
      <lgBRow className='py-3'>
        <lgBCol lg='12'>
          <SectionContainer noBorder header='Always responsive'>
            <lgBCard>
              <lgBCardBody>
                <lgBTable responsive>
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
          <SectionContainer noBorder header='Breakpoint specific'>
            <lgBCard>
              <lgBCardBody>
                <lgBTable responsiveSm>
                  <lgBTableHead columns={data.columns} color='primary-color' textWhite />
                  <lgBTableBody rows={data.rows} />
                </lgBTable>

                <lgBTable responsivelg>
                  <lgBTableHead columns={data.columns} color='default-color' textWhite />
                  <lgBTableBody rows={data.rows} />
                </lgBTable>

                <lgBTable responsiveLg>
                  <lgBTableHead columns={data.columns} color='secondary-color' textWhite />
                  <lgBTableBody rows={data.rows} />
                </lgBTable>

                <lgBTable responsiveXl>
                  <lgBTableHead columns={data.columns} color='success-color' textWhite />
                  <lgBTableBody rows={data.rows} />
                </lgBTable>
              </lgBCardBody>
            </lgBCard>
          </SectionContainer>
        </lgBCol>
      </lgBRow>

      <lgBRow className='py-3'>
        <lgBCol lg='12'>
          <SectionContainer noBorder header='Columns with auto width'>
            <lgBCard>
              <lgBCardBody>
                <lgBTable autoWidth striped>
                  <lgBTableHead columns={data_people.columns} />
                  <lgBTableBody rows={data_people.rows} />
                </lgBTable>
              </lgBCardBody>
            </lgBCard>
          </SectionContainer>
        </lgBCol>
      </lgBRow>

      <lgBRow className='py-3'>
        <lgBCol lg='12'>
          <SectionContainer noBorder header='Columns with minimal width'>
            <lgBCard>
              <lgBCardBody>
                <lgBTable striped bordered>
                  <lgBTableHead columns={data_minimal_width.columns} />
                  <lgBTableBody rows={data_minimal_width.rows} />
                </lgBTable>
              </lgBCardBody>
            </lgBCard>
          </SectionContainer>
        </lgBCol>
      </lgBRow>

      <lgBRow className='py-3'>
        <lgBCol lg='12'>
          <SectionContainer noBorder header='Columns with fixed width'>
            <lgBCard>
              <lgBCardBody>
                <lgBTable fixed bordered>
                  <lgBTableHead columns={data_people.columns} />
                  <lgBTableBody rows={data_people.rows} />
                </lgBTable>
              </lgBCardBody>
            </lgBCard>
          </SectionContainer>
        </lgBCol>
      </lgBRow>
    </lgBContainer>
  );
};

export default TableResponsivePage;
