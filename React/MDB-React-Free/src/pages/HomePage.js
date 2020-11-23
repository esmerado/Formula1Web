import React from 'react';
import {
  lgBEdgeHeader,
  lgBFreeBird,
  lgBContainer,
  lgBCol,
  lgBRow,
  lgBCardBody,
  lgBIcon,
  lgBCard,
  lgBCardTitle,
  lgBCardImage,
  lgBCardText,
  lgBAnimation,
  lgBNavLink
} from 'lgbreact';
import './HomePage.css';

class HomePage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
        <lgBEdgeHeader color='indigo darken-3' className='sectionPage' />
        <div className='mt-3 mb-5'>
          <lgBFreeBird>
            <lgBRow>
              <lgBCol
                lg='10'
                className='mx-auto float-none white z-depth-1 py-2 px-2'
              >
                <lgBCardBody className='text-center'>
                  <h2 className='h2-responsive mb-4'>
                    <strong className='font-weight-bold'>
                      <img
                        src='https://lgbootstrap.com/img/Marketing/other/logo/logo-lgb-react-small.png'
                        alt='lgbreact-logo'
                        className='pr-2'
                      />
                      Demo App
                    </strong>
                  </h2>
                  <lgBRow />
                  <p>React Bootstrap with Material Design</p>
                  <p className='pb-4'>
                    This application shows the actual use of lgB React
                    components in the application.
                  </p>
                  <lgBRow className='d-flex flex-row justify-content-center row'>
                    <a
                      className='border nav-link border-light rounded mr-1 mx-2 mb-2'
                      href='https://lgbootstrap.com/react/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <lgBIcon icon='graduation-cap' className='mr-2' />
                      <span className='font-weight-bold'>
                        Official Documentation
                      </span>
                    </a>
                    <a
                      className='border nav-link border-light rounded mx-2 mb-2'
                      href='https://lgbootstrap.com/products/react-ui-kit/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <lgBIcon far icon='gem' className='mr-2' />
                      <span className='font-weight-bold'>PRO</span>
                    </a>
                    <a
                      className='border nav-link border-light rounded mx-2 mb-2'
                      href='https://lgbootstrap.com/docs/react/getting-started/download/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <lgBIcon icon='download' className='mr-2' />
                      <span className='font-weight-bold'>FREE</span>
                    </a>
                  </lgBRow>
                </lgBCardBody>
              </lgBCol>
            </lgBRow>
          </lgBFreeBird>
          <lgBContainer>
            <lgBRow>
              <lgBCol lg='12' className='mt-4'>
                <h2 className='text-center my-5 font-weight-bold'>
                  Why is it so great?
                </h2>
                <p className='text-center text-muted mb-1'>
                  Google has designed a Material Design to make the web more
                  beautiful and more user-friendly.
                </p>
                <p className='text-center text-muted mb-1'>
                  Twitter has created a Bootstrap to support you in faster and
                  easier development of responsive and effective websites.
                </p>
                <p className='text-center text-muted'>
                  We present you a framework containing the best features of
                  both of them - Material Design for Bootstrap.
                </p>
                <hr className='my-5' />

                <lgBRow id='categories'>
                  <lgBCol lg='4'>
                    <lgBAnimation reveal type='fadeInLeft'>
                      <lgBCard cascade className='my-3 grey lighten-4'>
                        <lgBCardImage
                          cascade
                          className='img-fluid'
                          src='https://lgbootstrap.com/wp-content/uploads/2016/08/lgb.jpg'
                        />
                        <lgBCardBody cascade className='text-center'>
                          <lgBCardTitle>
                            <lgBIcon
                              icon='css3'
                              brand
                              className='pink-text pr-2'
                            />
                            <strong>CSS</strong>
                          </lgBCardTitle>
                          <lgBCardText>
                            Animations, colours, shadows, skins and many more!
                            Get to know all our css styles in one place.
                          </lgBCardText>
                          <lgBNavLink
                            tag='button'
                            to='/css'
                            color='lgb-color'
                            className='btn btn-outline-lgb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </lgBNavLink>
                        </lgBCardBody>
                      </lgBCard>
                    </lgBAnimation>
                  </lgBCol>
                  <lgBCol lg='4'>
                    <lgBAnimation reveal type='fadeInDown'>
                      <lgBCard cascade className='my-3 grey lighten-4'>
                        <lgBCardImage
                          cascade
                          className='img-fluid'
                          src='https://lgbootstrap.com/img/Marketing/lgb-press-pack/lgb-main.jpg'
                        />
                        <lgBCardBody cascade className='text-center'>
                          <lgBCardTitle>
                            <lgBIcon icon='cubes' className='blue-text pr-2' />
                            <strong>COMPONENTS</strong>
                          </lgBCardTitle>
                          <lgBCardText>
                            Ready-to-use components that you can use in your
                            applications. Both basic and extended versions!
                          </lgBCardText>
                          <lgBNavLink
                            tag='button'
                            to='/components'
                            color='lgb-color'
                            className='btn btn-outline-lgb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </lgBNavLink>
                        </lgBCardBody>
                      </lgBCard>
                    </lgBAnimation>
                  </lgBCol>
                  <lgBCol lg='4'>
                    <lgBAnimation reveal type='fadeInRight'>
                      <lgBCard cascade className='my-3 grey lighten-4'>
                        <lgBCardImage
                          cascade
                          className='img-fluid'
                          src='https://lgbootstrap.com/wp-content/uploads/2018/11/lgb-jquery-free.jpg'
                        />
                        <lgBCardBody cascade className='text-center'>
                          <lgBCardTitle>
                            <lgBIcon icon='code' className='green-text pr-2' />
                            <strong>ADVANCED</strong>
                          </lgBCardTitle>
                          <lgBCardText>
                            Advanced components such as charts, carousels,
                            tooltips and popovers. All in Material Design
                            version.
                          </lgBCardText>

                          <lgBNavLink
                            tag='button'
                            to='/advanced'
                            color='lgb-color'
                            className='btn btn-outline-lgb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </lgBNavLink>
                        </lgBCardBody>
                      </lgBCard>
                    </lgBAnimation>
                  </lgBCol>
                </lgBRow>

                <lgBRow id='categories'>
                  <lgBCol lg='4'>
                    <lgBAnimation reveal type='fadeInLeft'>
                      <lgBCard cascade className='my-3 grey lighten-4'>
                        <lgBCardImage
                          cascade
                          className='img-fluid'
                          src='https://lgbootstrap.com/wp-content/uploads/2017/06/navigation-1.jpg'
                        />
                        <lgBCardBody cascade className='text-center'>
                          <lgBCardTitle>
                            <lgBIcon icon='bars' className='pink-text pr-2' />
                            <strong>NAVIGATION</strong>
                          </lgBCardTitle>
                          <lgBCardText>
                            Ready-to-use navigation layouts, navbars,
                            breadcrumbs and much more! More about our navigation
                            components.
                          </lgBCardText>

                          <lgBNavLink
                            tag='button'
                            to='/navigation'
                            color='lgb-color'
                            className='btn btn-outline-lgb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </lgBNavLink>
                        </lgBCardBody>
                      </lgBCard>
                    </lgBAnimation>
                  </lgBCol>
                  <lgBCol lg='4'>
                    <lgBAnimation reveal type='fadeIn'>
                      <lgBCard cascade className='my-3 grey lighten-4'>
                        <lgBCardImage
                          cascade
                          className='img-fluid'
                          src='https://lgbootstrap.com/wp-content/uploads/2015/08/forms.jpg'
                        />
                        <lgBCardBody cascade className='text-center'>
                          <lgBCardTitle>
                            <lgBIcon icon='edit' className='blue-text pr-2' />
                            <strong>FORMS</strong>
                          </lgBCardTitle>
                          <lgBCardText className='mb-4 pb-3'>
                            Inputselecst, date and time pickers. Everything in
                            one place is ready to use!
                          </lgBCardText>

                          <lgBNavLink
                            tag='button'
                            to='/forms'
                            color='lgb-color'
                            className='btn btn-outline-lgb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </lgBNavLink>
                        </lgBCardBody>
                      </lgBCard>
                    </lgBAnimation>
                  </lgBCol>
                  <lgBCol lg='4'>
                    <lgBAnimation reveal type='fadeInRight'>
                      <lgBCard cascade className='my-3 grey lighten-4'>
                        <lgBCardImage
                          cascade
                          className='img-fluid'
                          src='https://lgbootstrap.com/wp-content/uploads/2015/08/table-fb.jpg'
                        />
                        <lgBCardBody cascade className='text-center'>
                          <lgBCardTitle>
                            <lgBIcon icon='table' className='green-text pr-2' />
                            <strong>TABLES</strong>
                          </lgBCardTitle>
                          <lgBCardText>
                            Basic and advanced tables. Responsive, datatables,
                            with sorting, searching and export to csv.
                          </lgBCardText>

                          <lgBNavLink
                            tag='button'
                            to='/tables'
                            color='lgb-color'
                            className='btn btn-outline-lgb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </lgBNavLink>
                        </lgBCardBody>
                      </lgBCard>
                    </lgBAnimation>
                  </lgBCol>
                </lgBRow>

                <lgBRow id='categories'>
                  <lgBCol lg='4'>
                    <lgBAnimation reveal type='fadeInLeft'>
                      <lgBCard cascade className='my-3 grey lighten-4'>
                        <lgBCardImage
                          cascade
                          className='img-fluid'
                          src='https://lgbootstrap.com/wp-content/uploads/2018/02/modal-new.jpg'
                        />
                        <lgBCardBody cascade className='text-center'>
                          <lgBCardTitle>
                            <lgBIcon
                              icon='window-restore'
                              far
                              className='pink-text pr-2'
                            />
                            <strong>MODALS</strong>
                          </lgBCardTitle>
                          <lgBCardText>
                            Modals used to display advanced messages to the
                            user. Cookies, logging in, registration and much
                            more.
                          </lgBCardText>

                          <lgBNavLink
                            tag='button'
                            to='/modals'
                            color='lgb-color'
                            className='btn btn-outline-lgb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </lgBNavLink>
                        </lgBCardBody>
                      </lgBCard>
                    </lgBAnimation>
                  </lgBCol>
                  <lgBCol lg='4'>
                    <lgBAnimation reveal type='fadeInUp'>
                      <lgBCard cascade className='my-3 grey lighten-4'>
                        <lgBCardImage
                          cascade
                          className='img-fluid'
                          src='https://lgbootstrap.com/img/Marketing/docs/social/main-addons.jpg'
                        />
                        <lgBCardBody cascade className='text-center'>
                          <lgBCardTitle>
                            <lgBIcon
                              icon='arrows-alt'
                              className='blue-text pr-2'
                            />
                            <strong>PLUGINS & ADDONS</strong>
                          </lgBCardTitle>
                          <lgBCardText>
                            Google Maps, Social Buttons, Pre-built Contact Forms
                            and Steppers. Find out more about our extended
                            components.
                          </lgBCardText>

                          <lgBNavLink
                            tag='button'
                            to='/addons'
                            color='lgb-color'
                            className='btn btn-outline-lgb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </lgBNavLink>
                        </lgBCardBody>
                      </lgBCard>
                    </lgBAnimation>
                  </lgBCol>
                  
                </lgBRow>
              </lgBCol>
            </lgBRow>
          </lgBContainer>
        </div>
      </>
    );
  }
}

export default HomePage;
