import React from 'react';
import {
  lgBBtnGroup,
  lgBIcon,
  lgBContainer,
  lgBCol,
  lgBRow,
  lgBDropdown,
  lgBDropdownToggle,
  lgBDropdownMenu,
  lgBDropdownItem,
  lgBBtn
} from 'lgbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

const ButtonPage = () => {
  return (
    <lgBContainer>
      <DocsLink
        title='Buttons'
        href='https://lgbootstrap.com/docs/react/components/buttons/'
      />

      <SectionContainer className='text-center' header='Disabled'>
        <lgBBtn disabled color='primary'>
          Primary disabled
        </lgBBtn>
        <lgBBtn disabled href='#' color='primary'>
          Primary href disabled
        </lgBBtn>
      </SectionContainer>

      <SectionContainer className='text-center' header='Active'>
        <lgBBtn
          active
          href='https://www.lgbootstrap.com'
          target='_blank'
          color='primary'
        >
          Primary href target blank
        </lgBBtn>
        <lgBBtn active color='primary'>
          Primary active
        </lgBBtn>
      </SectionContainer>

      <SectionContainer className='text-center' header='Basic examples'>
        <lgBBtn color='primary'>Primary</lgBBtn>
        <lgBBtn>Default</lgBBtn>
        <lgBBtn color='secondary'>Secondary</lgBBtn>
        <lgBBtn color='success'>Success</lgBBtn>
        <lgBBtn color='info'>Info</lgBBtn>
        <lgBBtn color='warning'>Warning</lgBBtn>
        <lgBBtn color='danger'>Danger</lgBBtn>
      </SectionContainer>

      <SectionContainer className='text-center' header='Additional styles'>
        <lgBBtn color='elegant'>Elegant</lgBBtn>
        <lgBBtn color='unique'>Unique</lgBBtn>
        <lgBBtn color='pink'>Pink</lgBBtn>
        <lgBBtn color='purple'>Purple</lgBBtn>
        <lgBBtn color='deep-purple'>Deep-purple</lgBBtn>
        <lgBBtn color='indigo'>Indigo</lgBBtn>
        <lgBBtn color='light-blue'>Light blue</lgBBtn>
        <lgBBtn color='cyan'>Cyan</lgBBtn>
        <lgBBtn color='dark-green'>Dark-green</lgBBtn>
        <lgBBtn color='light-green'>Light-green</lgBBtn>
        <lgBBtn color='yellow'>Yellow</lgBBtn>
        <lgBBtn color='amber'>Amber</lgBBtn>
        <lgBBtn color='deep-orange'>Deep-orange</lgBBtn>
        <lgBBtn color='brown'>Brown</lgBBtn>
        <lgBBtn color='blue-grey'>Blue-grey</lgBBtn>
        <lgBBtn color='lgb-color'>lgB</lgBBtn>
      </SectionContainer>

      <SectionContainer className='text-center' header='Outline'>
        <lgBBtn outline color='primary'>
          Primary
        </lgBBtn>
        <lgBBtn outline>Default</lgBBtn>
        <lgBBtn outline color='secondary'>
          Secondary
        </lgBBtn>
        <lgBBtn outline color='success'>
          Success
        </lgBBtn>
        <lgBBtn outline color='info'>
          Info
        </lgBBtn>
        <lgBBtn outline color='warning'>
          Warning
        </lgBBtn>
        <lgBBtn outline color='danger'>
          Danger
        </lgBBtn>
      </SectionContainer>

      <SectionContainer className='text-center' header='With icons'>
        <div className='mb-3'>
          <lgBBtn color='primary'>
            <lgBIcon icon='magic' className='mr-1' /> Left
          </lgBBtn>
          <lgBBtn color='default'>
            Right <lgBIcon icon='magic' className='ml-1' />
          </lgBBtn>
        </div>

        <div>
          <lgBBtn color='indigo lighten-2'>
            <lgBIcon icon='hourglass-start' />
          </lgBBtn>
          <lgBBtn color='blue lighten-2'>
            <lgBIcon icon='heart' />
          </lgBBtn>
          <lgBBtn color='light-blue lighten-2'>
            <lgBIcon icon='user' />
          </lgBBtn>
          <lgBBtn color='cyan lighten-2'>
            <lgBIcon icon='twitter' brand />
          </lgBBtn>
        </div>
      </SectionContainer>

      <SectionContainer className='text-center' header='Tags'>
        <lgBBtn color='primary' href='#'>
          Link
        </lgBBtn>
        <lgBBtn color='primary' type='submit'>
          lgBBtn
        </lgBBtn>
      </SectionContainer>

      <SectionContainer className='text-center' header='Block level buttons'>
        <lgBBtn block style={{ marginBottom: '1rem' }}>
          Block level button
        </lgBBtn>
        <lgBBtn block color='primary' style={{ marginBottom: '0rem' }}>
          Block level button
        </lgBBtn>
      </SectionContainer>

      <SectionContainer
        title='Button Group'
        header='Vertical alignment'
        className='text-center'
      >
        <lgBBtnGroup vertical>
          <lgBBtn>Left</lgBBtn>
          <lgBBtn>Middle</lgBBtn>
          <lgBBtn>Right</lgBBtn>
        </lgBBtnGroup>
      </SectionContainer>

      <SectionContainer className='text-center' header='Sizing'>
        <div className='my-3'>
          <lgBBtnGroup size='lg'>
            <lgBBtn>Left</lgBBtn>
            <lgBBtn>Middle</lgBBtn>
            <lgBBtn>Right</lgBBtn>
          </lgBBtnGroup>
        </div>

        <div className='my-3'>
          <lgBBtnGroup>
            <lgBBtn>Left</lgBBtn>
            <lgBBtn>Middle</lgBBtn>
            <lgBBtn>Right</lgBBtn>
          </lgBBtnGroup>
        </div>

        <div className='my-3'>
          <lgBBtnGroup size='sm'>
            <lgBBtn>Left</lgBBtn>
            <lgBBtn>Middle</lgBBtn>
            <lgBBtn>Right</lgBBtn>
          </lgBBtnGroup>
        </div>
      </SectionContainer>

      <SectionContainer header='Button toolbar'>
        <div
          className='btn-toolbar'
          role='toolbar'
          aria-label='Toolbar with button groups'
        >
          <lgBBtnGroup className='mr-2'>
            <lgBBtn>1</lgBBtn>
            <lgBBtn>2</lgBBtn>
            <lgBBtn>3</lgBBtn>
            <lgBBtn>4</lgBBtn>
          </lgBBtnGroup>
          <lgBBtnGroup className='mr-2'>
            <lgBBtn>5</lgBBtn>
            <lgBBtn>6</lgBBtn>
            <lgBBtn>7</lgBBtn>
          </lgBBtnGroup>
          <lgBBtnGroup>
            <lgBBtn>8</lgBBtn>
          </lgBBtnGroup>
        </div>
      </SectionContainer>

      <SectionContainer className='text-center' header='Nesting'>
        <lgBBtnGroup>
          <lgBBtn color='info' size='lg'>
            1
          </lgBBtn>
          <lgBBtn color='info' size='lg'>
            2
          </lgBBtn>
          <lgBBtnGroup>
            <lgBDropdown>
              <lgBDropdownToggle caret color='info' className='h-100'>
                Dropdown
              </lgBDropdownToggle>
              <lgBDropdownMenu basic color='info'>
                <lgBDropdownItem>Dropdown link</lgBDropdownItem>
                <lgBDropdownItem>Dropdown link</lgBDropdownItem>
              </lgBDropdownMenu>
            </lgBDropdown>
          </lgBBtnGroup>
        </lgBBtnGroup>
      </SectionContainer>

      <SectionContainer
        header='Vertical variation'
        className='d-flex justify-content-center'
      >
        <lgBCol xl='2' lg='3' lg='4' className='mb-lg-0 mb-4'>
          <lgBBtnGroup vertical>
            <lgBBtn color='amber' className='ml-0'>
              Button
            </lgBBtn>
            <lgBBtn color='amber'>Button</lgBBtn>
            <lgBBtn color='amber'>Button</lgBBtn>
            <lgBBtn color='amber'>Button</lgBBtn>
            <lgBBtn color='amber'>Button</lgBBtn>
            <lgBBtn color='amber'>Button</lgBBtn>
          </lgBBtnGroup>
        </lgBCol>

        <lgBCol xl='2' lg='3' lg='4'>
          <lgBBtnGroup vertical>
            <lgBBtn color='indigo' className='ml-0'>
              Button
            </lgBBtn>
            <lgBBtn color='indigo'>Button</lgBBtn>

            <lgBDropdown className='w-100'>
              <lgBDropdownToggle caret color='indigo' className='m-0'>
                Dropdown
              </lgBDropdownToggle>
              <lgBDropdownMenu basic color='info'>
                <lgBDropdownItem>Dropdown link</lgBDropdownItem>
                <lgBDropdownItem>Dropdown link</lgBDropdownItem>
              </lgBDropdownMenu>
            </lgBDropdown>

            <lgBBtn color='indigo'>Button</lgBBtn>
            <lgBBtn color='indigo'>Button</lgBBtn>

            <lgBDropdown className='w-100'>
              <lgBDropdownToggle caret color='indigo' className='m-0 rounded-0'>
                Dropdown
              </lgBDropdownToggle>
              <lgBDropdownMenu basic color='indigo'>
                <lgBDropdownItem>Dropdown link</lgBDropdownItem>
                <lgBDropdownItem>Dropdown link</lgBDropdownItem>
              </lgBDropdownMenu>
            </lgBDropdown>
            <lgBDropdown className='w-100'>
              <lgBDropdownToggle caret color='indigo' className='m-0 rounded-0'>
                Dropdown
              </lgBDropdownToggle>
              <lgBDropdownMenu basic color='indigo'>
                <lgBDropdownItem>Dropdown link</lgBDropdownItem>
                <lgBDropdownItem>Dropdown link</lgBDropdownItem>
              </lgBDropdownMenu>
            </lgBDropdown>
            <lgBDropdown className='w-100'>
              <lgBDropdownToggle caret color='indigo' className='m-0 rounded-0'>
                Dropdown
              </lgBDropdownToggle>
              <lgBDropdownMenu basic color='indigo'>
                <lgBDropdownItem>Dropdown link</lgBDropdownItem>
                <lgBDropdownItem>Dropdown link</lgBDropdownItem>
              </lgBDropdownMenu>
            </lgBDropdown>
          </lgBBtnGroup>
        </lgBCol>
      </SectionContainer>

      <SectionContainer header='Multicolored button group'>
        <lgBRow className='d-flex align-items-center justify-content-center'>
          <lgBCol xl='4' lg='12' className='mb-xl-0 mb-4 align-self-center'>
            <lgBBtnGroup>
              <lgBBtn color='primary'>Left</lgBBtn>
              <lgBBtn color='warning'>Middle</lgBBtn>
              <lgBBtn color='danger'>Right</lgBBtn>
            </lgBBtnGroup>
          </lgBCol>

          <lgBCol
            xl='4'
            lg='12'
            className='mb-xl-0 mb-4 d-flex justify-content-center'
          >
            <lgBBtnGroup vertical>
              <lgBBtn color='primary'>1</lgBBtn>
              <lgBBtn color='pink'>2</lgBBtn>
              <lgBBtn color='success'>3</lgBBtn>
              <lgBBtn color='amber'>4</lgBBtn>
              <lgBBtn color='red'>5</lgBBtn>
            </lgBBtnGroup>
          </lgBCol>

          <lgBCol xl='4' lg='12' className='mb-xl-0 align-self-center'>
            <div className='btn-toolbar' role='toolbar'>
              <lgBBtnGroup>
                <lgBBtn color='lgb-color lighten-2'>1</lgBBtn>
                <lgBBtn color='indigo lighten-2'>2</lgBBtn>
                <lgBBtn color='blue lighten-2'>3</lgBBtn>
                <lgBBtn color='light-blue lighten-2'>4</lgBBtn>
              </lgBBtnGroup>
            </div>
          </lgBCol>
        </lgBRow>
      </SectionContainer>
    </lgBContainer>
  );
};

export default ButtonPage;
