import React from 'react';
import { lgBNotification, lgBContainer } from 'lgbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

const NotificationPage = () => {
  return (
    <lgBContainer>
      <DocsLink
        title='Notifications'
        href='https://lgbootstrap.com/docs/react/addons/notification/'
      />

      <SectionContainer header='Default'>
        <lgBNotification
          iconClassName='text-primary'
          show
          fade
          title='Bootstrap'
          message='Hello, world! This is a toast message.'
          text='11 mins ago'
        />
      </SectionContainer>

      <SectionContainer
        title='Accessibility'
        description='Notification with autohide! Refresh page and wait 3 sec'
      >
        <lgBNotification
          iconClassName='text-primary'
          show
          fade
          title='Bootstrap'
          message='Hello, world! This is a toast message.'
          text='11 mins ago'
          autohide={3000}
        />
      </SectionContainer>

      <SectionContainer header='Custom icons'>
        <lgBNotification
          iconClassName='green-text'
          icon='envelope'
          show
          fade
          title='Bootstrap'
          message='Hello, world! This is a toast message.'
          text='11 mins ago'
        />
      </SectionContainer>

      <SectionContainer header='Translucent' dark>
        <lgBNotification
          iconClassName='text-primary'
          show
          fade
          title='Bootstrap'
          message='Hello, world! This is a toast message.'
          text='11 mins ago'
        />
      </SectionContainer>

      <SectionContainer header='Stacking'>
        <lgBNotification
          iconClassName='text-primary'
          show
          fade
          title='Bootstrap'
          message='See? Just like this.'
          text='just now'
        />
        <lgBNotification
          iconClassName='text-primary'
          show
          fade
          title='Bootstrap'
          message='Heads up, toasts will stack automatically'
          text='2 seconds ago'
        />
      </SectionContainer>

      <SectionContainer header='Placement' noBorder>
        <SectionContainer dark>
          <div style={{ minHeight: '200px', position: 'relative' }}>
            <lgBNotification
              iconClassName='text-primary'
              show
              fade
              title='Bootstrap'
              message='Hello, world! This is a toast message.'
              text='11 mins ago'
              style={{
                position: 'absolute',
                top: 0,
                right: 0
              }}
            />
          </div>
        </SectionContainer>
        <SectionContainer
          style={{
            backgroundImage:
              "url('https://lgbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(122).jpg')",
            minHeight: '350px'
          }}
        >
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0
              }}
            >
              <lgBNotification
                iconClassName='text-primary'
                show
                fade
                title='Bootstrap'
                message='See? Just like this.'
                text='just now'
              />
              <lgBNotification
                icon='user'
                show
                fade
                title='Bootstrap'
                message='Heads up, toasts will stack automatically'
                text='2 seconds ago'
              />
              <lgBNotification
                iconClassName='green-text'
                icon='envelope'
                show
                fade
                title='Bootstrap'
                message='Hello, world! This is a toast message.'
                text='11 mins ago'
              />
            </div>
          </div>
        </SectionContainer>
      </SectionContainer>

      <SectionContainer header='Customizable'>
        <lgBNotification
          autohide={0} // by default = ∞ ms
          bodyClassName='p-5 font-weight-bold white-text'
          className='stylish-color-dark'
          closeClassName='blue-grey-text'
          fade
          icon='bell'
          iconClassName='blue-grey-text'
          message='Hello, world! This is a toast message.'
          show
          text='11 mins ago'
          title='Bootstrap'
          titleClassName='elegant-color-dark white-text'
        />
      </SectionContainer>
    </lgBContainer>
  );
};

export default NotificationPage;
