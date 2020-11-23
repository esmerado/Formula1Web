import React from 'react';
import {
  lgBDataTable,
  lgBContainer,
  lgBRow,
  lgBCol,
  lgBCard,
  lgBCardBody,
  lgBBadge
} from 'lgbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

class DatatableApiPage extends React.Component {
  state = {
    data: {}
  };

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/Rotarepmi/exjson/db')
      .then(res => res.json())
      .then(json => {
        let data = json;
        let { columns, rows } = json;

        columns.push({
          label: 'Own Data',
          field: 'id',
          sort: 'asc',
          width: 150
        });

        rows = rows.map((row, key) => ({
          ...row,
          id: (
            <lgBBadge
              color='info'
              className='w-100'
              searchvalue={key}
              key={key}
            >
              {key}
            </lgBBadge>
          )
        }));

        data = {
          columns,
          rows
        };
        this.setState({ data });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <lgBContainer className='mt-3'>
        <DocsLink
          title='Datatable'
          href='https://lgbootstrap.com/docs/react/tables/datatables/'
        />
        <lgBRow className='py-3'>
          <lgBCol lg='12'>
            <SectionContainer header='Datatable with data from API' noBorder>
              <lgBCard>
                <lgBCardBody>
                  <lgBDataTable
                    striped
                    bordered
                    hover
                    data='https://my-json-server.typicode.com/Rotarepmi/exjson/db'
                  />
                </lgBCardBody>
              </lgBCard>
            </SectionContainer>
          </lgBCol>
        </lgBRow>

        <lgBRow className='py-3'>
          <lgBCol lg='12'>
            <SectionContainer
              header='With scrollX and scrollY properties'
              noBorder
            >
              <lgBCard>
                <lgBCardBody>
                  <lgBDataTable
                    striped
                    bordered
                    hover
                    scrollX
                    scrollY
                    maxHeight='300xp'
                    data='https://my-json-server.typicode.com/Rotarepmi/exjson/db'
                  />
                </lgBCardBody>
              </lgBCard>
            </SectionContainer>
          </lgBCol>
        </lgBRow>

        <lgBRow className='py-3'>
          <lgBCol lg='12'>
            <SectionContainer
              header='Datatable with data from API + custom data'
              noBorder
            >
              <lgBCard>
                <lgBCardBody>
                  <lgBDataTable
                    striped
                    bordered
                    hover
                    data={data}
                    sortRows={['id']}
                  />
                </lgBCardBody>
              </lgBCard>
            </SectionContainer>
          </lgBCol>
        </lgBRow>
      </lgBContainer>
    );
  }
}
export default DatatableApiPage;
