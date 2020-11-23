import React from 'react';
import { lgBBadge, lgBContainer, lgBIcon } from 'lgbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

const BadgePage = props => {
  return (
    <lgBContainer>
      <DocsLink
        title='Badges'
        href='https://lgbootstrap.com/docs/react/components/badges/'
      />

      <SectionContainer
        header={
          <>
            Using <code>Headings</code> tag
          </>
        }
      >
        <table className='m-2'>
          <thead>
            <tr>
              <th>
                <h4>Header</h4>
              </th>
              <th>
                <h4 className='ml-2'>lgBBadge</h4>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <h1>H1:</h1>
              </td>
              <td>
                <h1>
                  <lgBBadge>Default</lgBBadge>
                </h1>
              </td>
            </tr>
            <tr>
              <td>
                <h2>H2:</h2>
              </td>
              <td>
                <h2>
                  <lgBBadge color='primary'>Primary</lgBBadge>
                </h2>
              </td>
            </tr>
            <tr>
              <td>
                <h3>H3:</h3>
              </td>
              <td>
                <h3>
                  <lgBBadge pill color='success'>
                    Success pill
                  </lgBBadge>
                </h3>
              </td>
            </tr>
            <tr>
              <td>
                <h4>H4:</h4>
              </td>
              <td>
                <h4>
                  <lgBBadge color='info'>Info</lgBBadge>
                </h4>
              </td>
            </tr>
            <tr>
              <td>
                <h5>H5:</h5>
              </td>
              <td>
                <h5>
                  <lgBBadge color='warning'>warning</lgBBadge>
                </h5>
              </td>
            </tr>
            <tr>
              <td>
                <h6>H6:</h6>
              </td>
              <td>
                <h6>
                  <lgBBadge color='danger'>danger</lgBBadge>
                </h6>
              </td>
            </tr>
          </tbody>
        </table>
      </SectionContainer>


      <SectionContainer header='Customization' className='text-center'>
        <h5>
          <lgBBadge className='mr-3' color='default'>
            Default
          </lgBBadge>
          <lgBBadge className='mr-3' color='primary'>
            Primary
          </lgBBadge>
          <lgBBadge className='mr-3' color='success'>
            Success
          </lgBBadge>
          <lgBBadge className='mr-3' color='info'>
            Info
          </lgBBadge>
          <lgBBadge className='mr-3' color='warning'>
            Warning
          </lgBBadge>
          <lgBBadge className='mr-3' color='danger'>
            Danger
          </lgBBadge>
          <lgBBadge className='mr-3' color='light'>
            Light
          </lgBBadge>
          <lgBBadge className='mr-3' color='dark'>
            Dark
          </lgBBadge>
        </h5>
        <h5 className='mt-4'>
          <lgBBadge className='mr-2 mt-2' pill color='default'>
            Default
          </lgBBadge>
          <lgBBadge className='mr-2 mt-2' pill color='primary'>
            Primary
          </lgBBadge>
          <lgBBadge className='mr-2 mt-2' pill color='success'>
            Success
          </lgBBadge>
          <lgBBadge className='mr-2 mt-2' pill color='info'>
            Info
          </lgBBadge>
          <lgBBadge className='mr-2 mt-2' pill color='warning'>
            Warning
          </lgBBadge>
          <lgBBadge className='mr-2 mt-2' pill color='danger'>
            Danger
          </lgBBadge>
          <lgBBadge className='mr-2 mt-2' pill color='light'>
            Light
          </lgBBadge>
          <lgBBadge className='mr-2 mt-2' pill color='dark'>
            Dark
          </lgBBadge>
        </h5>
        <h5 className='mt-4'>
          <lgBBadge className='mr-2 mt-2' color='default'>
            <lgBIcon fab icon='facebook-f' />
          </lgBBadge>
          <lgBBadge className='mr-2 mt-2' color='primary'>
            <lgBIcon fab icon='instagram' />
          </lgBBadge>
          <lgBBadge className='mr-2 mt-2' color='success'>
            <lgBIcon fab icon='snapchat-ghost' />
          </lgBBadge>
          <lgBBadge className='mr-2 mt-2' color='info'>
            <lgBIcon icon='anchor' />
          </lgBBadge>
          <lgBBadge className='mr-2 mt-2' color='warning'>
            <lgBIcon far icon='sun' />
          </lgBBadge>
          <lgBBadge className='mr-2 mt-2' color='danger'>
            <lgBIcon icon='battery-three-quarters' />
          </lgBBadge>
        </h5>
        <h5 className='mt-4'>
          <lgBBadge className='mr-2 mt-2' color='pink'>
            <lgBIcon icon='wheelchair' />
          </lgBBadge>
          <lgBBadge className='mr-2 mt-2' color='light-blue'>
            <lgBIcon far icon='heart' />
          </lgBBadge>
          <lgBBadge className='mr-2 mt-2' color='purple'>
            <lgBIcon icon='bullhorn' />
          </lgBBadge>
          <lgBBadge className='mr-2 mt-2' color='orange'>
            <lgBIcon fab icon='btc' />
          </lgBBadge>
          <lgBBadge className='mr-2 mt-2' color='purple'>
            <lgBIcon far icon='comments' />
          </lgBBadge>
          <lgBBadge className='mr-2 mt-2' color='orange'>
            <lgBIcon icon='coffee' />
          </lgBBadge>
          <lgBBadge className='mr-2 mt-2' color='green'>
            <lgBIcon icon='user' />
          </lgBBadge>
        </h5>
        <h5 className='mt-4'>
          <lgBBadge className='mr-2 mt-2' pill color='indigo'>
            <lgBIcon fab icon='android' size='2x' />
          </lgBBadge>
          <lgBBadge className='mr-2 mt-2' pill color='cyan'>
            <lgBIcon icon='cog' size='2x' />
          </lgBBadge>
          <lgBBadge className='mr-2 mt-2' pill color='orange'>
            <lgBIcon fab icon='btc' size='2x' />
          </lgBBadge>
          <lgBBadge className='mr-2 mt-2' pill color='teal'>
            <lgBIcon icon='heart' size='2x' />
          </lgBBadge>
          <lgBBadge className='mr-2 mt-2' pill color='green'>
            <lgBIcon fab icon='apple' size='2x' />
          </lgBBadge>
          <lgBBadge className='mr-2 mt-2' pill color='purple'>
            <lgBIcon icon='users' size='2x' />
          </lgBBadge>
        </h5>
      </SectionContainer>
    </lgBContainer>
  );
};

export default BadgePage;
