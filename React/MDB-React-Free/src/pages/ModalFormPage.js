import React, { Component } from 'react';
import {
  lgBContainer,
  lgBBtn,
  lgBModal,
  lgBModalBody,
  lgBModalHeader,
  lgBModalFooter,
  lgBInput,
  lgBIcon
} from 'lgbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

class ModalFormPage extends Component {
  state = {
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false
  };

  toggle = nr => () => {
    const modalNumber = `modal${nr}`;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  render() {
    const { modal1, modal2, modal3, modal4, modal5, modal6 } = this.state;
    return (
      <lgBContainer>
        <DocsLink
          title='Modal Form'
          href='https://lgbootstrap.com/docs/react/modals/basic/'
        />

        <SectionContainer header='Simple modal login' flexCenter>
          <lgBBtn rounded onClick={this.toggle(1)}>
            Launch Modal Login Form
          </lgBBtn>
          <lgBModal isOpen={modal1} toggle={this.toggle(1)}>
            <lgBModalHeader
              className='text-center'
              titleClass='w-100 font-weight-bold'
              toggle={this.toggle(1)}
            >
              Sign in
            </lgBModalHeader>
            <lgBModalBody>
              <form className='mx-3 grey-text'>
                <lgBInput
                  label='Type your email'
                  icon='envelope'
                  group
                  type='email'
                  validate
                  error='wrong'
                  success='right'
                />
                <lgBInput
                  label='Type your password'
                  icon='lock'
                  group
                  type='password'
                  validate
                />
              </form>
            </lgBModalBody>
            <lgBModalFooter className='justify-content-center'>
              <lgBBtn onClick={this.toggle(1)}>Login</lgBBtn>
            </lgBModalFooter>
          </lgBModal>
        </SectionContainer>

        <SectionContainer header='Simple modal register' flexCenter>
          <lgBBtn rounded onClick={this.toggle(2)}>
            Launch Modal Register Form
          </lgBBtn>
          <lgBModal isOpen={modal2} toggle={this.toggle(2)}>
            <lgBModalHeader
              className='text-center'
              titleClass='w-100 font-weight-bold'
              toggle={this.toggle(2)}
            >
              Sign in
            </lgBModalHeader>
            <lgBModalBody>
              <form className='mx-3 grey-text'>
                <lgBInput
                  label='Your name'
                  icon='user'
                  group
                  type='text'
                  validate
                  error='wrong'
                  success='right'
                />
                <lgBInput
                  label='Your email'
                  icon='envelope'
                  group
                  type='email'
                  validate
                  error='wrong'
                  success='right'
                />
                <lgBInput
                  label='Your password'
                  icon='lock'
                  group
                  type='password'
                  validate
                />
              </form>
            </lgBModalBody>
            <lgBModalFooter className='justify-content-center'>
              <lgBBtn color='deep-orange' onClick={this.toggle(2)}>
                SIGN UP
              </lgBBtn>
            </lgBModalFooter>
          </lgBModal>
        </SectionContainer>

        <SectionContainer header='Simple modal subscription' flexCenter>
          <lgBBtn rounded onClick={this.toggle(3)}>
            Launch Modal subscription Form
          </lgBBtn>
          <lgBModal isOpen={modal3} toggle={this.toggle(3)}>
            <lgBModalHeader
              className='text-center'
              titleClass='w-100 font-weight-bold'
              toggle={this.toggle(3)}
            >
              Subscribe
            </lgBModalHeader>
            <lgBModalBody>
              <form className='mx-3 grey-text'>
                <lgBInput
                  label='Your name'
                  icon='user'
                  group
                  type='text'
                  validate
                />
                <lgBInput
                  label='Your email'
                  icon='envelope'
                  group
                  type='email'
                  validate
                  error='wrong'
                  success='right'
                />
              </form>
            </lgBModalBody>
            <lgBModalFooter className='justify-content-center'>
              <lgBBtn color='indigo' onClick={this.toggle(3)}>
                Send
                <lgBIcon icon='paper-plane' className='ml-2' />
              </lgBBtn>
            </lgBModalFooter>
          </lgBModal>
        </SectionContainer>

        <SectionContainer header='Simple modal contact' flexCenter>
          <lgBBtn rounded onClick={this.toggle(4)}>
            Launch Modal Contact Form
          </lgBBtn>
          <lgBModal isOpen={modal4} toggle={this.toggle(4)}>
            <lgBModalHeader
              className='text-center'
              titleClass='w-100 font-weight-bold'
              toggle={this.toggle(4)}
            >
              Write to us
            </lgBModalHeader>
            <lgBModalBody>
              <form className='mx-3 grey-text'>
                <lgBInput
                  label='Your name'
                  icon='user'
                  group
                  type='text'
                  validate
                />
                <lgBInput
                  label='Your email'
                  icon='envelope'
                  group
                  type='email'
                  validate
                  error='wrong'
                  success='right'
                />
                <lgBInput label='Your Subject' icon='tag' group type='text' />
                <lgBInput
                  type='textarea'
                  rows='2'
                  label='Your message'
                  icon='pencil'
                />
              </form>
            </lgBModalBody>
            <lgBModalFooter className='justify-content-center'>
              <lgBBtn color='unique' onClick={this.toggle(4)}>
                Send
                <lgBIcon icon='paper-plane' className='ml-2' />
              </lgBBtn>
            </lgBModalFooter>
          </lgBModal>
        </SectionContainer>

        <SectionContainer header='Modal with avatar' flexCenter>
          <lgBBtn rounded onClick={this.toggle(5)}>
            Launch Modal Login With Avatar
          </lgBBtn>
          <lgBModal
            size='sm'
            cascading
            className='modal-avatar'
            isOpen={modal5}
            toggle={this.toggle(5)}
          >
            <lgBModalHeader className='mx-auto'>
              <img
                src='https://lgbootstrap.com/img/Photos/Avatars/img%20%281%29.jpg'
                alt='avatar'
                className='rounded-circle img-responsive'
              />
            </lgBModalHeader>
            <lgBModalBody className='text-center mb-1'>
              <h5 className='mt-1 mb-2'>Maria Doe</h5>
              <form className='mx-3 grey-text'>
                <lgBInput
                  label='Enter password'
                  group
                  type='password'
                  validate
                />
              </form>
            </lgBModalBody>
            <lgBModalFooter className='justify-content-center'>
              <lgBBtn color='cyan' onClick={this.toggle(5)}>
                Login
                <lgBIcon icon='sign-in-alt' className='ml-2' />
              </lgBBtn>
            </lgBModalFooter>
          </lgBModal>
        </SectionContainer>

        <SectionContainer
          header='Subscription modal with orange header'
          flexCenter
        >
          <lgBBtn rounded onClick={this.toggle(6)}>
            Launch Modal Subscription
          </lgBBtn>
          <lgBModal
            className='modal-notify modal-warning white-text'
            isOpen={modal6}
            toggle={this.toggle(6)}
          >
            <lgBModalHeader
              className='text-center'
              titleClass='w-100 font-weight-bold'
              toggle={this.toggle(6)}
            >
              Subscribe
            </lgBModalHeader>
            <lgBModalBody>
              <form className='mx-3 grey-text'>
                <lgBInput
                  label='Your name'
                  icon='user'
                  iconClass='grey-text'
                  group
                  type='text'
                  validate
                  error='wrong'
                  success='right'
                />
                <lgBInput
                  label='Your email'
                  icon='envelope'
                  iconClass='grey-text'
                  group
                  type='email'
                  validate
                  error='wrong'
                  success='right'
                />
              </form>
            </lgBModalBody>
            <lgBModalFooter className='justify-content-center'>
              <lgBBtn color='warning' outline onClick={this.toggle(6)}>
                Send
                <lgBIcon icon='paper-plane' className='ml-2' />
              </lgBBtn>
            </lgBModalFooter>
          </lgBModal>
        </SectionContainer>
      </lgBContainer>
    );
  }
}

export default ModalFormPage;
