import React, { Component } from 'react';
import {
  lgBContainer,
  lgBBtn,
  lgBModal,
  lgBModalBody,
  lgBModalHeader,
  lgBModalFooter,
  lgBRow,
  lgBIcon,
  lgBBadge,
  lgBCol,
  lgBTable,
  lgBTableBody,
  lgBTableHead
} from 'lgbreact';
import './ModalExamplesPage.css';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

class ModalExamplesPage extends Component {
  state = {
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
    modal7: false,
    modal8: false,
    modal10: false,
    modal11: false,
    modal12: false
  };

  toggle = nr => () => {
    const modalNumber = `modal${nr}`;
    this.setState({
      ...this.state,
      [modalNumber]: !this.state[modalNumber]
    });
  };

  render() {
    const {
      modal1,
      modal10,
      modal11,
      modal12,
      modal2,
      modal3,
      modal4,
      modal5,
      modal6,
      modal7
    } = this.state;
    return (
      <lgBContainer>
        <DocsLink
          title='Modal Templates & Examples'
          href='https://lgbootstrap.com/docs/react/modals/basic/'
        />

        <SectionContainer header='Cookies' flexCenter>
          <lgBBtn onClick={this.toggle(1)}>Launch Modal</lgBBtn>
          <lgBModal
            position='top'
            backdrop={false}
            frame
            isOpen={modal1}
            toggle={this.toggle(1)}
          >
            <lgBModalBody>
              <lgBRow className='justify-content-center align-items-center'>
                <p className='pt-3 pr-2'>
                  We use cookies to improve your website experience
                </p>
                <lgBBtn color='primary' onClick={this.toggle(1)}>
                  Learn more
                  <lgBIcon icon='book' className='ml-1' />
                </lgBBtn>
                <lgBBtn color='primary' outline onClick={this.toggle(1)}>
                  Ok, thanks
                </lgBBtn>
              </lgBRow>
            </lgBModalBody>
          </lgBModal>
        </SectionContainer>

        <SectionContainer header='Coupon' flexCenter>
          <lgBBtn onClick={this.toggle(2)}>Launch Modal</lgBBtn>
          <lgBModal
            position='bottom'
            backdrop={false}
            frame
            isOpen={modal2}
            toggle={this.toggle(2)}
          >
            <lgBModalBody>
              <lgBRow className='justify-content-center align-items-center'>
                <h3>
                  <lgBBadge color='success'>v52gs1</lgBBadge>
                </h3>
                <p className='pt-3 mx-4'>
                  We have a gift for you! Use this code to get a{' '}
                  <strong>10% discount</strong>.
                </p>
                <lgBBtn color='success' onClick={this.toggle(2)}>
                  Learn more
                  <lgBIcon icon='book' className='ml-1' />
                </lgBBtn>
                <lgBBtn color='success' outline onClick={this.toggle(2)}>
                  No, thanks
                </lgBBtn>
              </lgBRow>
            </lgBModalBody>
          </lgBModal>
        </SectionContainer>

        <SectionContainer header='Discount' flexCenter>
          <lgBBtn onClick={this.toggle(3)}>Launch Modal</lgBBtn>
          <lgBModal
            size='lg'
            className='modal-notify modal-danger text-white'
            side
            position='bottom-right'
            backdrop={false}
            isOpen={modal3}
            toggle={this.toggle(3)}
          >
            <lgBModalHeader tag='p' toggle={this.toggle(3)}>
              Discount offer: <strong>10% off</strong>
            </lgBModalHeader>
            <lgBModalBody>
              <lgBRow>
                <lgBCol
                  size='3'
                  className='d-flex justify-content-center align-items-center'
                >
                  <lgBIcon size='4x' icon='gift' className='ml-1' />
                </lgBCol>
                <lgBCol size='9'>
                  <p>
                    Sharing is caring. Therefore, from time to time we like to
                    give our visitors small gifts. Today is one of those days.
                  </p>
                  <p>
                    <strong>
                      Copy the following code and use it at the checkout. It's
                      valid for <u>one day</u>.
                    </strong>
                  </p>
                  <h3>
                    <lgBBadge color='danger'>v52gs1</lgBBadge>
                  </h3>
                </lgBCol>
              </lgBRow>
            </lgBModalBody>
            <lgBModalFooter className='justify-content-center'>
              <lgBBtn color='danger' onClick={this.toggle(3)}>
                Get it now
                <lgBIcon icon='diamond' className='ml-1 white-text' />
              </lgBBtn>
              <lgBBtn color='danger' outline onClick={this.toggle(3)}>
                No, thanks
              </lgBBtn>
            </lgBModalFooter>
          </lgBModal>
        </SectionContainer>

        <SectionContainer header='Related content' flexCenter>
          <lgBBtn onClick={this.toggle(4)}>Launch Modal</lgBBtn>
          <lgBModal
            className='modal-notify modal-info text-white'
            side
            position='bottom-right'
            backdrop={false}
            isOpen={modal4}
            toggle={this.toggle(4)}
          >
            <lgBModalHeader tag='p' toggle={this.toggle(4)}>
              Related article
            </lgBModalHeader>
            <lgBModalBody>
              <lgBRow>
                <lgBCol size='5'>
                  <img
                    src='https://lgbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(55).jpg'
                    className='img-fluid'
                    alt=''
                  />
                </lgBCol>
                <lgBCol size='7'>
                  <p>
                    <strong>My travel to paradise</strong>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit...
                  </p>
                  <lgBBtn
                    color='primary'
                    size='lg'
                    outline
                    onClick={this.toggle(4)}
                  >
                    Read more
                  </lgBBtn>
                </lgBCol>
              </lgBRow>
            </lgBModalBody>
          </lgBModal>
        </SectionContainer>

        <SectionContainer header='Abandoned cart' flexCenter>
          <lgBBtn onClick={this.toggle(5)}>Launch Modal</lgBBtn>
          <lgBModal
            className='modal-notify modal-info text-white'
            side
            position='top-right'
            backdrop={false}
            isOpen={modal5}
            toggle={this.toggle(5)}
          >
            <lgBModalHeader tag='p' toggle={this.toggle(5)}>
              Product in the cart
            </lgBModalHeader>
            <lgBModalBody>
              <lgBRow>
                <lgBCol
                  size='3'
                  className='d-flex justify-content-center align-items-center'
                >
                  <lgBIcon size='4x' icon='shopping-cart' className='ml-1' />
                </lgBCol>
                <lgBCol size='9'>
                  <p>Do you need more time to make a purchase decision?</p>
                  <p>
                    No pressure, your product will be waiting for you in the
                    cart.
                  </p>
                </lgBCol>
              </lgBRow>
            </lgBModalBody>
            <lgBModalFooter className='justify-content-center'>
              <lgBBtn color='primary' onClick={this.toggle(5)}>
                Go to cart
              </lgBBtn>
              <lgBBtn color='primary' outline onClick={this.toggle(5)}>
                Cancel
              </lgBBtn>
            </lgBModalFooter>
          </lgBModal>
        </SectionContainer>

        <SectionContainer header='Abandoned cart' flexCenter>
          <lgBBtn onClick={this.toggle(6)}>Launch Modal</lgBBtn>
          <lgBModal
            modalStyle='danger'
            className='text-white'
            size='sm'
            side
            position='top-right'
            backdrop={false}
            isOpen={modal6}
            toggle={this.toggle(6)}
          >
            <lgBModalHeader
              className='text-center'
              titleClass='w-100'
              tag='p'
              toggle={this.toggle(6)}
            >
              Are you sure?
            </lgBModalHeader>
            <lgBModalBody className='text-center'>
              <lgBIcon icon='times' size='4x' className='animated rotateIn' />
            </lgBModalBody>
            <lgBModalFooter className='justify-content-center'>
              <lgBBtn color='danger' onClick={this.toggle(6)}>
                Yes
              </lgBBtn>
              <lgBBtn color='danger' outline onClick={this.toggle(6)}>
                No
              </lgBBtn>
            </lgBModalFooter>
          </lgBModal>
        </SectionContainer>

        <SectionContainer header='Cart' flexCenter>
          <lgBBtn onClick={this.toggle(10)}>Launch Modal</lgBBtn>
          <lgBModal isOpen={modal10} toggle={this.toggle(10)}>
            <lgBModalHeader toggle={this.toggle(10)}>Your cart</lgBModalHeader>
            <lgBModalBody>
              <lgBTable striped>
                <lgBTableHead>
                  <tr>
                    <th />
                    <th>Product name</th>
                    <th>Price</th>
                    <th>Remove</th>
                  </tr>
                </lgBTableHead>
                <lgBTableBody>
                  <tr>
                    <td>1</td>
                    <td>Product 1</td>
                    <td>$100</td>
                    <td>
                      <lgBIcon icon='remove' />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Product 2</td>
                    <td>1 340$</td>
                    <td>
                      <lgBIcon icon='remove' />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Product 3</td>
                    <td>30$</td>
                    <td>
                      <lgBIcon icon='remove' />
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td>
                      <strong>Total</strong>
                    </td>
                    <td>
                      <strong>1 470$</strong>
                    </td>
                    <td />
                  </tr>
                </lgBTableBody>
              </lgBTable>
            </lgBModalBody>
            <lgBModalFooter className='justify-content-end'>
              <lgBBtn color='primary' outline onClick={this.toggle(10)}>
                Close
              </lgBBtn>
              <lgBBtn color='primary' onClick={this.toggle(10)}>
                Checkout
              </lgBBtn>
            </lgBModalFooter>
          </lgBModal>
        </SectionContainer>

        <SectionContainer header='Push' flexCenter>
          <lgBBtn onClick={this.toggle(7)}>Launch Modal</lgBBtn>
          <lgBModal
            className='modal-notify modal-info text-white'
            isOpen={modal7}
            toggle={this.toggle(7)}
          >
            <lgBModalHeader className='text-center' titleClass='w-100' tag='p'>
              Be always up to date
            </lgBModalHeader>
            <lgBModalBody className='text-center'>
              <lgBIcon
                icon='bell'
                size='4x'
                className='animated rotateIn mb-4'
              />
              <p>
                Do you want to receive the push notification about the newest
                posts?
              </p>
            </lgBModalBody>
            <lgBModalFooter className='justify-content-center'>
              <lgBBtn color='primary' onClick={this.toggle(7)}>
                Yes
              </lgBBtn>
              <lgBBtn color='primary' outline onClick={this.toggle(7)}>
                No
              </lgBBtn>
            </lgBModalFooter>
          </lgBModal>
        </SectionContainer>

        <SectionContainer header='YouTube' flexCenter>
          <lgBBtn onClick={this.toggle(11)}>Launch Modal</lgBBtn>
          <lgBModal size='lg' isOpen={modal11} toggle={this.toggle(11)}>
            <lgBModalBody className='mb-0 p-0'>
              <div className='embed-responsive embed-responsive-16by9 z-depth-1-half'>
                <iframe
                  title='youtube'
                  className='embed-responsive-item'
                  header='This is a unique title'
                  src='https://www.youtube.com/embed/A3PDXmYoF5U'
                  allowFullScreen
                />
              </div>
            </lgBModalBody>
            <lgBModalFooter className='justify-content-center'>
              <span className='mr-4'>Spread the word!</span>
              <lgBBtn tag='a' size='sm' floating social='fb'>
                <lgBIcon fab icon='facebook' />
              </lgBBtn>
              <lgBBtn tag='a' size='sm' floating social='tw'>
                <lgBIcon fab icon='twitter' />
              </lgBBtn>
              <lgBBtn tag='a' size='sm' floating social='gplus'>
                <lgBIcon fab icon='google-plus' />
              </lgBBtn>
              <lgBBtn tag='a' size='sm' floating social='li'>
                <lgBIcon fab icon='linkedin' />
              </lgBBtn>
              <lgBBtn
                color='primary'
                outline
                rounded
                size='lg'
                className='ml-4'
                onClick={this.toggle(11)}
              >
                Close
              </lgBBtn>
            </lgBModalFooter>
          </lgBModal>
        </SectionContainer>

        <SectionContainer header='Vimeo' flexCenter>
          <lgBBtn onClick={this.toggle(12)}>Launch Modal</lgBBtn>
          <lgBModal size='lg' isOpen={modal12} toggle={this.toggle(12)}>
            <lgBModalBody className='mb-0 p-0'>
              <div className='embed-responsive embed-responsive-16by9 z-depth-1-half'>
                <iframe
                  title='vimeo'
                  className='embed-responsive-item'
                  header='embed-responsive-item-1'
                  src='https://player.vimeo.com/video/115098447'
                  allowFullScreen
                />
              </div>
            </lgBModalBody>
            <lgBModalFooter className='justify-content-center'>
              <span className='mr-4'>Spread the word!</span>
              <lgBBtn tag='a' size='sm' floating social='fb'>
                <lgBIcon icon='facebook-f' fab />
              </lgBBtn>
              <lgBBtn tag='a' size='sm' floating social='tw'>
                <lgBIcon icon='twitter' fab />
              </lgBBtn>
              <lgBBtn tag='a' size='sm' floating social='gplus'>
                <lgBIcon icon='google-plus' fab />
              </lgBBtn>
              <lgBBtn tag='a' size='sm' floating social='li'>
                <lgBIcon icon='linkedin' fab />
              </lgBBtn>
              <lgBBtn
                color='primary'
                outline
                rounded
                size='lg'
                className='ml-4'
                onClick={this.toggle(12)}
              >
                Close
              </lgBBtn>
            </lgBModalFooter>
          </lgBModal>
        </SectionContainer>
      </lgBContainer>
    );
  }
}

export default ModalExamplesPage;
