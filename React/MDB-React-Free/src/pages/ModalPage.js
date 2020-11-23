import React, { Component } from 'react';
import {
  lgBContainer,
  lgBBtn,
  lgBModal,
  lgBModalBody,
  lgBModalHeader,
  lgBModalFooter,
  lgBPopover,
  lgBPopoverBody,
  lgBPopoverHeader,
  lgBTooltip,
  lgBRow,
  lgBCol,
  lgBInput
} from 'lgbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

class ModalPage extends Component {
  state = {
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
    modal7: false,
    modal8: false,
    modal9: false,
    modal10: false,
    modal11: false,
    modal12: false,
    modal13: false,
    modal14: false,
    modal15: false,
    modal16: false,
    modal17: false,
    modal18: false,
    modal19: false,
    modal20: false,
    backdrop: false,
    mailAddress: '@lgo'
  };

  toggle = nr => () => {
    const modalNumber = `modal${nr}`;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  showFunction = () => {
    alert('This event is fired just before the modal is open.');
  };

  hideFunction = () => {
    alert('This event is fired just before the modal is hidden.');
  };

  hiddenFunction = () => {
    alert('This event is fired after the modal is closed.');
  };

  render() {
    const {
      mailAddress,
      modal1,
      modal10,
      modal11,
      modal12,
      modal13,
      modal14,
      modal15,
      modal16,
      modal17,
      modal18,
      modal19,
      modal2,
      modal20,
      modal3,
      modal4,
      modal5,
      modal6,
      modal7,
      modal8,
      modal9
    } = this.state;
    return (
      <lgBContainer>
        <DocsLink title='Modal' href='https://lgbootstrap.com/docs/react/modals/basic/' />
        <SectionContainer header='Basic example' flexCenter>
          <lgBBtn color='danger' onClick={this.toggle(1)}>
            Modal
          </lgBBtn>
          <lgBModal backdrop={false} isOpen={modal1} toggle={this.toggle(1)}>
            <lgBModalHeader toggle={this.toggle(1)}>Modal title</lgBModalHeader>
            <lgBModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </lgBModalBody>
            <lgBModalFooter>
              <lgBBtn color='secondary' onClick={this.toggle(1)}>
                Close
              </lgBBtn>
              <lgBBtn color='primary'>Save changes</lgBBtn>
            </lgBModalFooter>
          </lgBModal>
        </SectionContainer>

        <SectionContainer header='Central modal' flexCenter className='flex-wrap'>
          <lgBBtn color='primary' onClick={this.toggle(2)}>
            Medium modal
          </lgBBtn>
          <lgBModal isOpen={modal2} toggle={this.toggle(2)}>
            <lgBModalHeader toggle={this.toggle(2)}>Modal title</lgBModalHeader>
            <lgBModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </lgBModalBody>
            <lgBModalFooter>
              <lgBBtn color='secondary' onClick={this.toggle(2)}>
                Close
              </lgBBtn>
              <lgBBtn color='primary'>Save changes</lgBBtn>
            </lgBModalFooter>
          </lgBModal>

          <lgBBtn color='primary' onClick={this.toggle(3)}>
            Small modal
          </lgBBtn>
          <lgBModal isOpen={modal3} toggle={this.toggle(3)} size='sm'>
            <lgBModalHeader toggle={this.toggle(3)}>Modal title</lgBModalHeader>
            <lgBModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </lgBModalBody>
            <lgBModalFooter>
              <lgBBtn color='secondary' size='sm' onClick={this.toggle(3)}>
                Close
              </lgBBtn>
              <lgBBtn color='primary' size='sm'>
                Save changes
              </lgBBtn>
            </lgBModalFooter>
          </lgBModal>

          <lgBBtn color='primary' onClick={this.toggle(4)}>
            Large modal
          </lgBBtn>
          <lgBModal isOpen={modal4} toggle={this.toggle(4)} size='lg'>
            <lgBModalHeader toggle={this.toggle(4)}>Modal title</lgBModalHeader>
            <lgBModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </lgBModalBody>
            <lgBModalFooter>
              <lgBBtn color='secondary' onClick={this.toggle(4)}>
                Close
              </lgBBtn>
              <lgBBtn color='primary'>Save changes</lgBBtn>
            </lgBModalFooter>
          </lgBModal>

          <lgBBtn color='primary' onClick={this.toggle(5)}>
            Fluid modal
          </lgBBtn>
          <lgBModal isOpen={modal5} toggle={this.toggle(5)} size='fluid'>
            <lgBModalHeader toggle={this.toggle(5)}>Modal title</lgBModalHeader>
            <lgBModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </lgBModalBody>
            <lgBModalFooter>
              <lgBBtn color='secondary' onClick={this.toggle(5)}>
                Close
              </lgBBtn>
              <lgBBtn color='primary'>Save changes</lgBBtn>
            </lgBModalFooter>
          </lgBModal>
        </SectionContainer>

        <SectionContainer header='Side modal' flexCenter>
          <lgBBtn color='secondary' onClick={this.toggle(6)}>
            Top right
          </lgBBtn>
          <lgBModal isOpen={modal6} toggle={this.toggle(6)} side position='top-right'>
            <lgBModalHeader toggle={this.toggle(6)}>Modal title</lgBModalHeader>
            <lgBModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </lgBModalBody>
            <lgBModalFooter>
              <lgBBtn color='secondary' onClick={this.toggle(6)}>
                Close
              </lgBBtn>
              <lgBBtn color='primary'>Save changes</lgBBtn>
            </lgBModalFooter>
          </lgBModal>

          <lgBBtn color='secondary' onClick={this.toggle(7)}>
            Bottom left
          </lgBBtn>
          <lgBModal isOpen={modal7} toggle={this.toggle(7)} side position='bottom-left'>
            <lgBModalHeader toggle={this.toggle(7)}>Modal title</lgBModalHeader>
            <lgBModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </lgBModalBody>
            <lgBModalFooter>
              <lgBBtn color='secondary' onClick={this.toggle(7)}>
                Close
              </lgBBtn>
              <lgBBtn color='primary'>Save changes</lgBBtn>
            </lgBModalFooter>
          </lgBModal>
        </SectionContainer>

        <SectionContainer header='Fluid modal' flexCenter>
          <lgBBtn color='info' onClick={this.toggle(8)}>
            Right
          </lgBBtn>
          <lgBModal isOpen={modal8} toggle={this.toggle(8)} fullHeight position='right'>
            <lgBModalHeader toggle={this.toggle(8)}>Modal title</lgBModalHeader>
            <lgBModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </lgBModalBody>
            <lgBModalFooter>
              <lgBBtn color='secondary' onClick={this.toggle(8)}>
                Close
              </lgBBtn>
              <lgBBtn color='primary'>Save changes</lgBBtn>
            </lgBModalFooter>
          </lgBModal>

          <lgBBtn color='info' onClick={this.toggle(9)}>
            Bottom
          </lgBBtn>
          <lgBModal isOpen={modal9} toggle={this.toggle(9)} fullHeight position='bottom'>
            <lgBModalHeader toggle={this.toggle(9)}>Modal title</lgBModalHeader>
            <lgBModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </lgBModalBody>
            <lgBModalFooter>
              <lgBBtn color='secondary' onClick={this.toggle(9)}>
                Close
              </lgBBtn>
              <lgBBtn color='primary'>Save changes</lgBBtn>
            </lgBModalFooter>
          </lgBModal>
        </SectionContainer>

        <SectionContainer header='Frame modal' flexCenter>
          <lgBBtn color='warning' onClick={this.toggle(10)}>
            Bottom
          </lgBBtn>
          <lgBModal isOpen={modal10} toggle={this.toggle(10)} frame position='bottom'>
            <lgBModalBody className='text-center'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
              <lgBBtn color='secondary' onClick={this.toggle(10)}>
                Close
              </lgBBtn>
              <lgBBtn color='primary'>Save changes</lgBBtn>
            </lgBModalBody>
          </lgBModal>
          <lgBBtn color='warning' onClick={this.toggle(11)}>
            Top
          </lgBBtn>
          <lgBModal isOpen={modal11} toggle={this.toggle(11)} frame position='top'>
            <lgBModalBody className='text-center'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
              <lgBBtn color='secondary' onClick={this.toggle(11)}>
                Close
              </lgBBtn>
              <lgBBtn color='primary'>Save changes</lgBBtn>
            </lgBModalBody>
          </lgBModal>
        </SectionContainer>

        <SectionContainer header='Remove backdrop' flexCenter>
          <lgBBtn onClick={this.toggle(12)}>Modal</lgBBtn>
          <lgBModal
            isOpen={modal12}
            toggle={this.toggle(12)}
            backdrop={false}
          >
            <lgBModalHeader toggle={this.toggle(12)}>Modal title</lgBModalHeader>
            <lgBModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </lgBModalBody>
            <lgBModalFooter>
              <lgBBtn color='secondary' onClick={this.toggle(12)}>
                Close
              </lgBBtn>
              <lgBBtn color='primary'>Save changes</lgBBtn>
            </lgBModalFooter>
          </lgBModal>
        </SectionContainer>

        <SectionContainer header='Disable backdrop' flexCenter>
          <lgBBtn onClick={this.toggle(19)} color='danger'>
            Modal
          </lgBBtn>
          <lgBModal isOpen={modal19} toggle={this.toggle(19)} disableBackdrop>
            <lgBModalHeader toggle={this.toggle(19)}>Modal title</lgBModalHeader>
            <lgBModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </lgBModalBody>
            <lgBModalFooter>
              <lgBBtn color='secondary' onClick={this.toggle(19)}>
                Close
              </lgBBtn>
              <lgBBtn color='primary'>Save changes</lgBBtn>
            </lgBModalFooter>
          </lgBModal>
        </SectionContainer>

        <SectionContainer header='Focus Trap' flexCenter>
          <lgBBtn onClick={this.toggle(20)} color='success'>
            Modal
          </lgBBtn>
          <lgBModal isOpen={modal20} toggle={this.toggle(20)} disableFocusTrap={false}>
            <lgBModalHeader toggle={this.toggle(20)}>Modal title</lgBModalHeader>
            <lgBModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </lgBModalBody>
            <lgBModalFooter>
              <lgBBtn color='secondary' onClick={this.toggle(20)}>
                Close
              </lgBBtn>
              <lgBBtn color='primary'>Save changes</lgBBtn>
            </lgBModalFooter>
          </lgBModal>
        </SectionContainer>

        <SectionContainer header='Scrolling long content' flexCenter>
          <lgBBtn color='primary' onClick={this.toggle(13)}>
            Modal
          </lgBBtn>
          <lgBModal isOpen={modal13} toggle={this.toggle(13)}>
            <lgBModalHeader toggle={this.toggle(13)}>Modal title</lgBModalHeader>
            <lgBModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </lgBModalBody>
            <lgBModalFooter>
              <lgBBtn color='secondary' onClick={this.toggle(13)}>
                Close
              </lgBBtn>
              <lgBBtn color='primary'>Save changes</lgBBtn>
            </lgBModalFooter>
          </lgBModal>
        </SectionContainer>

        <SectionContainer header='Vertically centered' flexCenter>
          <lgBBtn color='primary' onClick={this.toggle(14)}>
            Modal
          </lgBBtn>
          <lgBModal isOpen={modal14} toggle={this.toggle(14)} centered>
            <lgBModalHeader toggle={this.toggle(14)}>Modal title</lgBModalHeader>
            <lgBModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </lgBModalBody>
            <lgBModalFooter>
              <lgBBtn color='secondary' onClick={this.toggle(14)}>
                Close
              </lgBBtn>
              <lgBBtn color='primary'>Save changes</lgBBtn>
            </lgBModalFooter>
          </lgBModal>
        </SectionContainer>

        <SectionContainer header='Tooltips and popovers' flexCenter>
          <lgBBtn color='primary' onClick={this.toggle(15)}>
            Modal
          </lgBBtn>
          <lgBModal isOpen={modal15} toggle={this.toggle(15)}>
            <lgBModalHeader toggle={this.toggle(15)}>Modal title</lgBModalHeader>
            <lgBModalBody>
              This
              <lgBPopover popover clickable id='popper1' placement='right'>
                <lgBBtn color='secondary'>button</lgBBtn>
                <div>
                  <lgBPopoverHeader>lgBPopover title</lgBPopoverHeader>
                  <lgBPopoverBody>lgBPopover body content is set in this attribute.</lgBPopoverBody>
                </div>
              </lgBPopover>
              triggers a popover on click.
              <hr />
              <lgBTooltip id='popper4' tag='span' domElement>
                <a href='!#'>This link</a>
                <span>Tooltip</span>
              </lgBTooltip>{' '}
              and{' '}
              <lgBTooltip id='popper3' tag='span' domElement>
                <a href='!#'>that link</a>
                <span>Tooltip</span>
              </lgBTooltip>{' '}
              have tooltips on hover.
            </lgBModalBody>
            <lgBModalFooter>
              <lgBBtn color='secondary' onClick={this.toggle(15)}>
                Close
              </lgBBtn>
              <lgBBtn color='primary'>Save changes</lgBBtn>
            </lgBModalFooter>
          </lgBModal>
        </SectionContainer>

        <SectionContainer header='Using the grid' flexCenter>
          <lgBBtn onClick={this.toggle(16)}>Modal</lgBBtn>
          <lgBModal isOpen={modal16} toggle={this.toggle(16)}>
            <lgBModalHeader toggle={this.toggle(16)}>Modal title</lgBModalHeader>
            <lgBModalBody>
              <lgBContainer fluid className='text-white'>
                <lgBRow>
                  <lgBCol lg='4' className='bg-info'>
                    .col-lg-4
                  </lgBCol>
                  <lgBCol lg='4' className='ml-auto bg-info'>
                    .col-lg-4 .ml-auto
                  </lgBCol>
                </lgBRow>
                <br />
                <lgBRow>
                  <lgBCol lg='3' className='ml-auto bg-info'>
                    .col-lg-3 .ml-auto
                  </lgBCol>
                  <lgBCol lg='2' className='ml-auto bg-info'>
                    .col-lg-2 .ml-auto
                  </lgBCol>
                </lgBRow>
                <lgBRow>
                  <lgBCol lg='6' className='ml-5 bg-info'>
                    .col-lg-6 .ml-5
                  </lgBCol>
                </lgBRow>
                <br />
                <lgBRow>
                  <lgBCol sm='9' className='bg-info'>
                    Level 1: .col-sm-9
                    <lgBRow>
                      <lgBCol sm='6' className='bg-info'>
                        Level 2: .col-8 .col-sm-6
                      </lgBCol>
                      <lgBCol sm='6' className='bg-info'>
                        Level 2: .col-4 .col-sm-6
                      </lgBCol>
                    </lgBRow>
                  </lgBCol>
                </lgBRow>
              </lgBContainer>
            </lgBModalBody>
            <lgBModalFooter>
              <lgBBtn color='secondary' onClick={this.toggle(16)}>
                Close
              </lgBBtn>
              <lgBBtn color='primary'>Save changes</lgBBtn>
            </lgBModalFooter>
          </lgBModal>
        </SectionContainer>

        <SectionContainer header='Varying modal content' flexCenter>
          <lgBBtn color='primary' onClick={this.toggle(17)}>
            Open modal for {mailAddress}
          </lgBBtn>
          <lgBModal isOpen={modal17} toggle={this.toggle(17)}>
            <lgBModalHeader toggle={this.toggle(17)}>New message to {mailAddress}</lgBModalHeader>
            <lgBModalBody>
              <div className='lg-form'>
                <lgBInput value={mailAddress} />
                <lgBInput type='textarea' label='Message' rows='2' />
              </div>
            </lgBModalBody>
            <lgBModalFooter>
              <lgBBtn color='secondary' onClick={this.toggle(17)}>
                Close
              </lgBBtn>
              <lgBBtn color='primary'>Send message</lgBBtn>
            </lgBModalFooter>
          </lgBModal>
        </SectionContainer>

        <SectionContainer header='Modal Events' flexCenter>
          <lgBBtn color='warning' onClick={this.toggle(18)}>
            Modal events
          </lgBBtn>
          <lgBModal
            isOpen={modal18}
            toggle={this.toggle(18)}
            hideModal={this.hideFunction}
            hiddenModal={this.hiddenFunction}
            showModal={this.showFunction}
          >
            <lgBModalHeader toggle={this.toggle(18)}>Modal title</lgBModalHeader>
            <lgBModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </lgBModalBody>
            <lgBModalFooter>
              <lgBBtn color='secondary' onClick={this.toggle(18)}>
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

export default ModalPage;
