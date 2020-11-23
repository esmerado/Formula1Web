import React, { Component } from 'react';
import {
  lgBContainer,
  lgBRow,
  lgBCol,
  lgBInput,
  lgBBtn,
  lgBIcon,
  lgBCard,
  lgBCardBody,
  lgBModal,
  lgBModalBody,
  lgBModalFooter
} from 'lgbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

class FormsPage extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    const { modal } = this.state;
    this.setState({
      modal: !modal
    });
  };

  render() {
    const { modal } = this.state;

    return (
      <lgBContainer className='mt-5'>
        <DocsLink
          title='Forms'
          href='https://lgbootstrap.com/docs/react/forms/basic/'
        />
        <SectionContainer header='Sign in' noBorder>
          <lgBRow>
            <lgBCol lg='6'>
              <SectionContainer>
                <form>
                  <p className='h5 text-center mb-4'>Sign in</p>
                  <div className='grey-text'>
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
                  </div>
                  <div className='text-center'>
                    <lgBBtn>Login</lgBBtn>
                  </div>
                </form>
              </SectionContainer>
            </lgBCol>
            <lgBCol lg='6'>
              <SectionContainer>
                <form>
                  <p className='h5 text-center mb-4'>Sign in</p>
                  <label
                    htmlFor='defaultFormLoginEmailEx'
                    className='grey-text'
                  >
                    Your email
                  </label>
                  <input
                    type='email'
                    id='defaultFormLoginEmailEx'
                    className='form-control'
                  />
                  <br />
                  <label
                    htmlFor='defaultFormLoginPasswordEx'
                    className='grey-text'
                  >
                    Your password
                  </label>
                  <input
                    type='password'
                    id='defaultFormLoginPasswordEx'
                    className='form-control'
                  />
                  <div className='text-center mt-4'>
                    <button className='btn btn-indigo' type='submit'>
                      Login
                    </button>
                  </div>
                </form>
              </SectionContainer>
            </lgBCol>
          </lgBRow>
        </SectionContainer>

        <SectionContainer header='Register' className='row' noBorder>
          <lgBCol lg='6'>
            <SectionContainer>
              <form>
                <p className='h5 text-center mb-4'>Sign up</p>
                <div className='grey-text'>
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
                    label='Confirm your email'
                    icon='exclamation-triangle'
                    group
                    type='text'
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
                </div>
                <div className='text-center'>
                  <lgBBtn color='primary'>Register</lgBBtn>
                </div>
              </form>
            </SectionContainer>
          </lgBCol>
          <lgBCol lg='6'>
            <SectionContainer>
              <form>
                <p className='h5 text-center mb-4'>Sign up</p>
                <label
                  htmlFor='defaultFormRegisterNameEx'
                  className='grey-text'
                >
                  Your name
                </label>
                <input
                  type='text'
                  id='defaultFormRegisterNameEx'
                  className='form-control'
                />
                <br />
                <label
                  htmlFor='defaultFormRegisterEmailEx'
                  className='grey-text'
                >
                  Your email
                </label>
                <input
                  type='email'
                  id='defaultFormRegisterEmailEx'
                  className='form-control'
                />
                <br />
                <label
                  htmlFor='defaultFormRegisterConfirmEx'
                  className='grey-text'
                >
                  Confirm your email
                </label>
                <input
                  type='email'
                  id='defaultFormRegisterConfirmEx'
                  className='form-control'
                />
                <br />
                <label
                  htmlFor='defaultFormRegisterPasswordEx'
                  className='grey-text'
                >
                  Your password
                </label>
                <input
                  type='password'
                  id='defaultFormRegisterPasswordEx'
                  className='form-control'
                />
                <div className='text-center mt-4'>
                  <button className='btn btn-unique' type='submit'>
                    Register
                  </button>
                </div>
              </form>
            </SectionContainer>
          </lgBCol>
        </SectionContainer>

        <SectionContainer header='Subscription' className='row' noBorder>
          <lgBCol lg='6'>
            <SectionContainer>
              <form>
                <p className='h5 text-center mb-4'>Subscribe</p>
                <div className='grey-text'>
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
                </div>
                <div className='text-center'>
                  <lgBBtn outline color='info'>
                    Send <lgBIcon icon='paper-plane' className='ml-1' />
                  </lgBBtn>
                </div>
              </form>
            </SectionContainer>
          </lgBCol>
          <lgBCol lg='6'>
            <SectionContainer>
              <form>
                <p className='h5 text-center mb-4'>Subscribe</p>
                <label
                  htmlFor='defaultFormSubscriptionNameEx'
                  className='grey-text'
                >
                  Your name
                </label>
                <input
                  type='text'
                  id='defaultFormSubscriptionNameEx'
                  className='form-control'
                />
                <br />
                <label
                  htmlFor='defaultFormSubscriptionEmailEx'
                  className='grey-text'
                >
                  Your email
                </label>
                <input
                  type='email'
                  id='defaultFormSubscriptionEmailEx'
                  className='form-control'
                />
                <div className='text-center mt-4'>
                  <button className='btn btn-outline-purple' type='submit'>
                    Send
                    <lgBIcon icon='paper-plane' className='ml-2' />
                  </button>
                </div>
              </form>
            </SectionContainer>
          </lgBCol>
        </SectionContainer>

        <SectionContainer header='Contact' className='row' noBorder>
          <lgBCol lg='6'>
            <SectionContainer>
              <form>
                <p className='h5 text-center mb-4'>Write to us</p>
                <div className='grey-text'>
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
                    label='Subject'
                    icon='tag'
                    group
                    type='text'
                    validate
                    error='wrong'
                    success='right'
                  />
                  <lgBInput
                    type='textarea'
                    rows='2'
                    label='Your message'
                    icon='pencil-alt'
                  />
                </div>
                <div className='text-center'>
                  <lgBBtn outline color='secondary'>
                    Send <lgBIcon icon='paper-plane' className='ml-1' />
                  </lgBBtn>
                </div>
              </form>
            </SectionContainer>
          </lgBCol>
          <lgBCol lg='6'>
            <SectionContainer>
              <form>
                <p className='h5 text-center mb-4'>Write to us</p>
                <label htmlFor='defaultFormContactNameEx' className='grey-text'>
                  Your name
                </label>
                <input
                  type='text'
                  id='defaultFormContactNameEx'
                  className='form-control'
                />
                <br />
                <label
                  htmlFor='defaultFormContactEmailEx'
                  className='grey-text'
                >
                  Your email
                </label>
                <input
                  type='email'
                  id='defaultFormContactEmailEx'
                  className='form-control'
                />
                <br />
                <label
                  htmlFor='defaultFormContactSubjectEx'
                  className='grey-text'
                >
                  Subject
                </label>
                <input
                  type='text'
                  id='defaultFormContactSubjectEx'
                  className='form-control'
                />
                <br />
                <label
                  htmlFor='defaultFormContactMessageEx'
                  className='grey-text'
                >
                  Your message
                </label>
                <textarea
                  type='text'
                  id='defaultFormContactMessageEx'
                  className='form-control'
                  rows='3'
                />
                <div className='text-center mt-4'>
                  <button className='btn btn-outline-warning' type='submit'>
                    Send
                    <lgBIcon icon='paper-plane' className='ml-2' />
                  </button>
                </div>
              </form>
            </SectionContainer>
          </lgBCol>
        </SectionContainer>

        <SectionContainer header='Within a card' className='row' noBorder>
          <lgBCol lg='6'>
            <lgBCard>
              <lgBCardBody>
                <form>
                  <p className='h4 text-center py-4'>Sign up</p>
                  <div className='grey-text'>
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
                      label='Confirm your email'
                      icon='exclamation-triangle'
                      group
                      type='text'
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
                  </div>
                  <div className='text-center py-4 mt-3'>
                    <lgBBtn color='cyan' type='submit'>
                      Register
                    </lgBBtn>
                  </div>
                </form>
              </lgBCardBody>
            </lgBCard>
          </lgBCol>
          <lgBCol lg='6'>
            <div className='card mx-xl-5'>
              <div className='card-body'>
                <form>
                  <p className='h4 text-center py-4'>Subscribe</p>
                  <label
                    htmlFor='defaultFormCardNameEx'
                    className='grey-text font-weight-light'
                  >
                    Your name
                  </label>
                  <input
                    type='text'
                    id='defaultFormCardNameEx'
                    className='form-control'
                  />
                  <br />
                  <label
                    htmlFor='defaultFormCardEmailEx'
                    className='grey-text font-weight-light'
                  >
                    Your email
                  </label>
                  <input
                    type='email'
                    id='defaultFormCardEmailEx'
                    className='form-control'
                  />
                  <div className='text-center py-4 mt-3'>
                    <button className='btn btn-outline-purple' type='submit'>
                      Send
                      <lgBIcon icon='paper-plane' className='ml-2' />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </lgBCol>
        </SectionContainer>

        <SectionContainer header='Within a modal' flexCenter>
          <lgBBtn color='info' onClick={this.toggle}>
            Launch modal contact form
          </lgBBtn>
          <lgBModal
            isOpen={modal}
            toggle={this.toggle}
            className='cascading-modal'
          >
            <div className='modal-header primary-color white-text'>
              <h4 className='title'>
                <lgBIcon icon='pencil-alt' /> Contact form
              </h4>
              <button type='button' className='close' onClick={this.toggle}>
                <span aria-hidden='true'>×</span>
              </button>
            </div>
            <lgBModalBody>
              <form className='grey-text'>
                <lgBInput
                  size='sm'
                  label='Your name'
                  icon='user'
                  group
                  type='text'
                  validate
                  error='wrong'
                  success='right'
                />
                <lgBInput
                  size='sm'
                  label='Your email'
                  icon='envelope'
                  group
                  type='email'
                  validate
                  error='wrong'
                  success='right'
                />
                <lgBInput
                  size='sm'
                  label='Subject'
                  icon='tag'
                  group
                  type='text'
                  validate
                  error='wrong'
                  success='right'
                />
                <lgBInput
                  size='sm'
                  type='textarea'
                  rows='2'
                  label='Your message'
                  icon='pencil-alt'
                />
              </form>
            </lgBModalBody>
            <lgBModalFooter>
              <lgBBtn color='secondary' onClick={this.toggle}>
                Close
              </lgBBtn>
              <lgBBtn color='primary'>Save changes</lgBBtn>
            </lgBModalFooter>
          </lgBModal>
        </SectionContainer>
      </lgBContainer>
    );
  }
}

export default FormsPage;
