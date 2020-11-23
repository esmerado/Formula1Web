import React from 'react';
import {
  lgBPagination,
  lgBPageItem,
  lgBPageNav,
  lgBContainer,
  lgBCol,
  lgBRow
} from 'lgbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

const PaginationPage = () => {
  return (
    <lgBContainer>
      <DocsLink
        title='Pagination'
        href='https://lgbootstrap.com/docs/react/components/pagination/'
      />

      <lgBRow>
        <lgBCol>
          <SectionContainer
            header='Basic example'
            className='d-flex justify-content-center'
          >
            <lgBPagination style={{ marginTop: '1rem' }}>
              <lgBPageItem disabled>
                <lgBPageNav aria-label='Previous'>
                  <span aria-hidden='true'>&laquo;</span>
                </lgBPageNav>
              </lgBPageItem>
              <lgBPageItem active>
                <lgBPageNav>
                  1 <span className='sr-only'>(current)</span>
                </lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>2</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>3</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>4</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>5</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem disabled>
                <lgBPageNav aria-label='Previous'>
                  <span aria-hidden='true'>&raquo;</span>
                </lgBPageNav>
              </lgBPageItem>
            </lgBPagination>
          </SectionContainer>
        </lgBCol>
      </lgBRow>

      <lgBRow>
        <lgBCol>
          <SectionContainer
            header='Bootstrap Pagination'
            className='d-flex justify-content-center'
          >
            <lgBPagination style={{ marginTop: '1rem' }} circle>
              <lgBPageItem disabled>
                <lgBPageNav>
                  <span>First</span>
                </lgBPageNav>
              </lgBPageItem>
              <lgBPageItem disabled>
                <lgBPageNav aria-label='Previous'>
                  <span aria-hidden='true'>&laquo;</span>
                  <span className='sr-only'>Previous</span>
                </lgBPageNav>
              </lgBPageItem>
              <lgBPageItem active>
                <lgBPageNav>
                  1 <span className='sr-only'>(current)</span>
                </lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>2</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>3</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>4</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>5</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>&raquo;</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>Last</lgBPageNav>
              </lgBPageItem>
            </lgBPagination>
          </SectionContainer>
        </lgBCol>
      </lgBRow>

      <lgBRow>
        <lgBCol>
          <SectionContainer
            header='lgBPagination color'
            className='d-flex align-items-center flex-column'
          >
            <lgBPagination style={{ marginTop: '1rem' }} color='blue'>
              <lgBPageItem disabled>
                <lgBPageNav aria-label='Previous'>
                  <span aria-hidden='true'>&laquo;</span>
                  <span className='sr-only'>Previous</span>
                </lgBPageNav>
              </lgBPageItem>
              <lgBPageItem active>
                <lgBPageNav>
                  1 <span className='sr-only'>(current)</span>
                </lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>2</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>3</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>4</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>5</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>&raquo;</lgBPageNav>
              </lgBPageItem>
            </lgBPagination>

            <lgBPagination style={{ marginTop: '1rem' }} color='red'>
              <lgBPageItem disabled>
                <lgBPageNav aria-label='Previous'>
                  <span aria-hidden='true'>&laquo;</span>
                  <span className='sr-only'>Previous</span>
                </lgBPageNav>
              </lgBPageItem>
              <lgBPageItem active>
                <lgBPageNav>
                  1 <span className='sr-only'>(current)</span>
                </lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>2</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>3</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>4</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>5</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>&raquo;</lgBPageNav>
              </lgBPageItem>
            </lgBPagination>

            <lgBPagination style={{ marginTop: '1rem' }} color='teal'>
              <lgBPageItem disabled>
                <lgBPageNav aria-label='Previous'>
                  <span aria-hidden='true'>&laquo;</span>
                  <span className='sr-only'>Previous</span>
                </lgBPageNav>
              </lgBPageItem>
              <lgBPageItem active>
                <lgBPageNav>
                  1 <span className='sr-only'>(current)</span>
                </lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>2</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>3</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>4</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>5</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>&raquo;</lgBPageNav>
              </lgBPageItem>
            </lgBPagination>

            <lgBPagination style={{ marginTop: '1rem' }} color='dark'>
              <lgBPageItem disabled>
                <lgBPageNav aria-label='Previous'>
                  <span aria-hidden='true'>&laquo;</span>
                  <span className='sr-only'>Previous</span>
                </lgBPageNav>
              </lgBPageItem>
              <lgBPageItem active>
                <lgBPageNav>
                  1 <span className='sr-only'>(current)</span>
                </lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>2</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>3</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>4</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>5</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>&raquo;</lgBPageNav>
              </lgBPageItem>
            </lgBPagination>

            <lgBPagination style={{ marginTop: '1rem' }} color='bluegrey'>
              <lgBPageItem disabled>
                <lgBPageNav aria-label='Previous'>
                  <span aria-hidden='true'>&laquo;</span>
                  <span className='sr-only'>Previous</span>
                </lgBPageNav>
              </lgBPageItem>
              <lgBPageItem active>
                <lgBPageNav>
                  1 <span className='sr-only'>(current)</span>
                </lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>2</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>3</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>4</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>5</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>&raquo;</lgBPageNav>
              </lgBPageItem>
            </lgBPagination>

            <lgBPagination style={{ marginTop: '1rem' }} color='amber'>
              <lgBPageItem disabled>
                <lgBPageNav aria-label='Previous'>
                  <span aria-hidden='true'>&laquo;</span>
                  <span className='sr-only'>Previous</span>
                </lgBPageNav>
              </lgBPageItem>
              <lgBPageItem active>
                <lgBPageNav>
                  1 <span className='sr-only'>(current)</span>
                </lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>2</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>3</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>4</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>5</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>&raquo;</lgBPageNav>
              </lgBPageItem>
            </lgBPagination>

            <lgBPagination style={{ marginTop: '1rem' }} color='purple'>
              <lgBPageItem disabled>
                <lgBPageNav aria-label='Previous'>
                  <span aria-hidden='true'>&laquo;</span>
                  <span className='sr-only'>Previous</span>
                </lgBPageNav>
              </lgBPageItem>
              <lgBPageItem active>
                <lgBPageNav>
                  1 <span className='sr-only'>(current)</span>
                </lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>2</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>3</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>4</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>5</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>&raquo;</lgBPageNav>
              </lgBPageItem>
            </lgBPagination>

            <lgBPagination style={{ marginTop: '1rem' }} color='darkgrey'>
              <lgBPageItem disabled>
                <lgBPageNav aria-label='Previous'>
                  <span aria-hidden='true'>&laquo;</span>
                  <span className='sr-only'>Previous</span>
                </lgBPageNav>
              </lgBPageItem>
              <lgBPageItem active>
                <lgBPageNav>
                  1 <span className='sr-only'>(current)</span>
                </lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>2</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>3</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>4</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>5</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>&raquo;</lgBPageNav>
              </lgBPageItem>
            </lgBPagination>
          </SectionContainer>
        </lgBCol>
      </lgBRow>

      <lgBRow>
        <lgBCol>
          <SectionContainer
            header='Sizing'
            className='d-flex align-items-center flex-column'
          >
            <lgBPagination style={{ marginTop: '1rem' }} size='lg'>
              <lgBPageItem>
                <lgBPageNav aria-label='Previous'>
                  <span aria-hidden='true'>&laquo;</span>
                  <span className='sr-only'>Previous</span>
                </lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>
                  1 <span className='sr-only'>(current)</span>
                </lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>2</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>3</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>&raquo;</lgBPageNav>
              </lgBPageItem>
            </lgBPagination>

            <lgBPagination style={{ marginTop: '1rem' }} size='sm'>
              <lgBPageItem>
                <lgBPageNav aria-label='Previous'>
                  <span aria-hidden='true'>&laquo;</span>
                  <span className='sr-only'>Previous</span>
                </lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>
                  1 <span className='sr-only'>(current)</span>
                </lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>2</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>3</lgBPageNav>
              </lgBPageItem>
              <lgBPageItem>
                <lgBPageNav>&raquo;</lgBPageNav>
              </lgBPageItem>
            </lgBPagination>
          </SectionContainer>
        </lgBCol>
      </lgBRow>
    </lgBContainer>
  );
};

export default PaginationPage;
