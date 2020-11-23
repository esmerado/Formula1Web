import React from 'react';
import { lgBContainer, lgBAlert } from 'lgbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

const AlertPage = () => {
  return (
    <lgBContainer>
      <DocsLink
        title='Alerts'
        href='https://lgbootstrap.com/docs/react/advanced/alerts/'
      />

      <SectionContainer header='Basic examples'>
        <lgBAlert color='primary' dismiss>
          A simple primary alert—check it out!
        </lgBAlert>
        <lgBAlert color='secondary' dismiss>
          A simple secondary alert—check it out!
        </lgBAlert>
        <lgBAlert color='success' dismiss>
          A simple success alert—check it out!
        </lgBAlert>
        <lgBAlert color='danger' dismiss>
          A simple success alert—check it out!
        </lgBAlert>
        <lgBAlert color='warning' dismiss>
          A simple warning alert—check it out!
        </lgBAlert>
        <lgBAlert color='info' dismiss>
          A simple info alert—check it out!
        </lgBAlert>
        <lgBAlert color='dark' dismiss>
          A simple dark alert—check it out!
        </lgBAlert>
        <SectionContainer dark noBottom>
          <lgBAlert color='light' dismiss>
            A simple light alert—check it out!
          </lgBAlert>
        </SectionContainer>
      </SectionContainer>

      <SectionContainer header='Link color'>
        <lgBAlert color='primary'>
          A simple primary alert with{' '}
          <a href='#!' className='alert-link'>
            an example link
          </a>
          . Give it a click if you like.
        </lgBAlert>
        <lgBAlert color='secondary'>
          A simple primary alert with{' '}
          <a href='#!' className='alert-link'>
            an example link
          </a>
          . Give it a click if you like.
        </lgBAlert>
        <lgBAlert color='success'>
          A simple primary alert with{' '}
          <a href='#!' className='alert-link'>
            an example link
          </a>
          . Give it a click if you like.
        </lgBAlert>
        <lgBAlert color='danger'>
          A simple primary alert with{' '}
          <a href='#!' className='alert-link'>
            an example link
          </a>
          . Give it a click if you like.
        </lgBAlert>
        <lgBAlert color='warning'>
          A simple primary alert with{' '}
          <a href='#!' className='alert-link'>
            an example link
          </a>
          . Give it a click if you like.
        </lgBAlert>
        <lgBAlert color='info'>
          A simple primary alert with{' '}
          <a href='#!' className='alert-link'>
            an example link
          </a>
          . Give it a click if you like.
        </lgBAlert>
        <lgBAlert color='dark'>
          A simple primary alert with{' '}
          <a href='#!' className='alert-link'>
            an example link
          </a>
          . Give it a click if you like.
        </lgBAlert>
        <SectionContainer dark noBottom>
          <lgBAlert color='light'>
            A simple primary alert with{' '}
            <a href='#!' className='alert-link'>
              an example link
            </a>
            . Give it a click if you like.
          </lgBAlert>
        </SectionContainer>
      </SectionContainer>

      <SectionContainer header='Additional content'>
        <lgBAlert color='success'>
          <h4 className='alert-heading'>Well done!</h4>
          <p>
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
          </p>
          <hr />
          <p className='mb-0'>
            Whenever you need to, be sure to use margin utilities to keep things
            nice and tidy.
          </p>
        </lgBAlert>
      </SectionContainer>

      <SectionContainer header='With methods'>
        <lgBAlert
          color='danger'
          dismiss
          onClose={() =>
            alert(
              'This event fires immediately when the close instance method is called.'
            )
          }
          onClosed={() =>
            alert(
              'This event is fired when the alert has been closed (will wait for CSS transitions to complete).'
            )
          }
        >
          Alert component exposes a few events for hooking into alert
          functionality.
        </lgBAlert>
      </SectionContainer>
    </lgBContainer>
  );
};

export default AlertPage;
