import React, { Component } from 'react';
import {
  lgBNavbar,
  lgBNavbarBrand,
  lgBNavbarNav,
  lgBNavItem,
  lgBLink,
  lgBNavbarToggler,
  lgBCollapse,
  lgBFormInline,
  lgBDropdown,
  lgBDropdownToggle,
  lgBDropdownMenu,
  lgBDropdownItem,
  lgBContainer,
  lgBIcon
} from 'lgbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

class NavbarPage extends Component {
  state = {
    collapseID: ''
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

  render() {
    const { isOpen, collapseID } = this.state;
    return (
      <lgBContainer>
        <DocsLink
          title='Navbar'
          href='https://lgbootstrap.com/docs/react/navigation/navbar/'
        />

        <SectionContainer header='Basic example'>
          <lgBNavbar color='indigo' dark expand='lg'>
            <lgBNavbarBrand>
              <strong className='white-text'>Navbar</strong>
            </lgBNavbarBrand>
            <lgBNavbarToggler onClick={this.toggleCollapse} />
            <lgBCollapse id='navbarCollapse3' isOpen={isOpen} navbar>
              <lgBNavbarNav left>
                <lgBNavItem active>
                  <lgBLink to='#!'>Home</lgBLink>
                </lgBNavItem>
                <lgBNavItem>
                  <lgBLink to='#!'>Features</lgBLink>
                </lgBNavItem>
                <lgBNavItem>
                  <lgBLink to='#!'>Pricing</lgBLink>
                </lgBNavItem>
                <lgBNavItem>
                  <lgBDropdown>
                    <lgBDropdownToggle nav caret>
                      <span className='mr-2'>Dropdown</span>
                    </lgBDropdownToggle>
                    <lgBDropdownMenu>
                      <lgBDropdownItem href='#!'>Action</lgBDropdownItem>
                      <lgBDropdownItem href='#!'>
                        Another Action
                      </lgBDropdownItem>
                      <lgBDropdownItem href='#!'>
                        Something else here
                      </lgBDropdownItem>
                      <lgBDropdownItem href='#!'>
                        Something else here
                      </lgBDropdownItem>
                    </lgBDropdownMenu>
                  </lgBDropdown>
                </lgBNavItem>
              </lgBNavbarNav>
              <lgBNavbarNav right>
                <lgBNavItem>
                  <lgBFormInline waves>
                    <div className='lg-form my-0'>
                      <input
                        className='form-control mr-sm-2'
                        type='text'
                        placeholder='Search'
                        aria-label='Search'
                      />
                    </div>
                  </lgBFormInline>
                </lgBNavItem>
              </lgBNavbarNav>
            </lgBCollapse>
          </lgBNavbar>
          <lgBNavbar
            color='unique-color-dark'
            style={{ marginTop: '20px' }}
            dark
          >
            <lgBNavbarBrand href='#'>
              <img
                src='https://lgbootstrap.com/img/logo/lgb-transparent.png'
                height='30'
                alt=''
              />
            </lgBNavbarBrand>
          </lgBNavbar>
        </SectionContainer>

        <SectionContainer header='Color schemes'>
          <lgBNavbar
            color='bg-danger'
            style={{ marginTop: '20px' }}
            dark
            expand='lg'
            scrolling
          >
            <lgBContainer>
              <lgBNavbarBrand>
                <strong className='white-text'>lgB</strong>
              </lgBNavbarBrand>
              <lgBNavbarToggler
                onClick={this.toggleCollapse('navbarCollapse')}
              />
              <lgBCollapse id='navbarCollapse' isOpen={collapseID} navbar>
                <lgBNavbarNav left>
                  <lgBNavItem active>
                    <lgBLink to='#!'>Home</lgBLink>
                  </lgBNavItem>
                  <lgBNavItem>
                    <lgBLink to='#!'>Link</lgBLink>
                  </lgBNavItem>
                  <lgBNavItem>
                    <lgBLink to='#!'>Profile</lgBLink>
                  </lgBNavItem>
                </lgBNavbarNav>
                <lgBNavbarNav right>
                  <lgBNavItem>
                    <lgBFormInline waves>
                      <div className='lg-form my-0'>
                        <input
                          className='form-control mr-sm-2'
                          type='text'
                          placeholder='Search'
                          aria-label='Search'
                        />
                      </div>
                    </lgBFormInline>
                  </lgBNavItem>
                </lgBNavbarNav>
              </lgBCollapse>
            </lgBContainer>
          </lgBNavbar>
          <lgBNavbar
            color='default-color'
            style={{ marginTop: '20px' }}
            dark
            expand='lg'
            scrolling
          >
            <lgBContainer>
              <lgBNavbarBrand>
                <strong className='white-text'>lgB</strong>
              </lgBNavbarBrand>
              <lgBNavbarToggler
                onClick={this.toggleCollapse('navbarCollapse1')}
              />
              <lgBCollapse id='navbarCollapse1' isOpen={collapseID} navbar>
                <lgBNavbarNav left>
                  <lgBNavItem active>
                    <lgBLink to='#!'>Home</lgBLink>
                  </lgBNavItem>
                  <lgBNavItem>
                    <lgBLink to='#!'>Link</lgBLink>
                  </lgBNavItem>
                  <lgBNavItem>
                    <lgBLink to='#!'>Profile</lgBLink>
                  </lgBNavItem>
                </lgBNavbarNav>
                <lgBNavbarNav right>
                  <lgBNavItem>
                    <lgBFormInline waves>
                      <div className='lg-form my-0'>
                        <input
                          className='form-control mr-sm-2'
                          type='text'
                          placeholder='Search'
                          aria-label='Search'
                        />
                      </div>
                    </lgBFormInline>
                  </lgBNavItem>
                </lgBNavbarNav>
              </lgBCollapse>
            </lgBContainer>
          </lgBNavbar>
          <lgBNavbar
            color='amber lighten-4'
            style={{ marginTop: '20px' }}
            expand='lg'
            light
          >
            <lgBContainer>
              <lgBNavbarBrand>
                <strong>lgB</strong>
              </lgBNavbarBrand>
              <lgBNavbarToggler
                onClick={this.toggleCollapse('navbarCollapse2')}
              />
              <lgBCollapse id='navbarCollapse2' isOpen={collapseID} navbar>
                <lgBNavbarNav left>
                  <lgBNavItem active>
                    <lgBLink to='#!'>Home</lgBLink>
                  </lgBNavItem>
                  <lgBNavItem>
                    <lgBLink to='#!'>Link</lgBLink>
                  </lgBNavItem>
                  <lgBNavItem>
                    <lgBLink to='#!'>Profile</lgBLink>
                  </lgBNavItem>
                </lgBNavbarNav>
                <lgBNavbarNav right>
                  <lgBNavItem>
                    <lgBFormInline waves>
                      <div className='lg-form my-0'>
                        <input
                          className='form-control mr-sm-2'
                          type='text'
                          placeholder='Search'
                          aria-label='Search'
                        />
                      </div>
                    </lgBFormInline>
                  </lgBNavItem>
                </lgBNavbarNav>
              </lgBCollapse>
            </lgBContainer>
          </lgBNavbar>
          <lgBNavbar
            color='secondary-color'
            style={{ marginTop: '20px' }}
            dark
            expand='lg'
          >
            <lgBContainer>
              <lgBNavbarBrand>
                <strong className='white-text'>lgB</strong>
              </lgBNavbarBrand>
              <lgBNavbarToggler
                onClick={this.toggleCollapse('navbarCollapse3')}
              />
              <lgBCollapse id='navbarCollapse3' isOpen={collapseID} navbar>
                <lgBNavbarNav left>
                  <lgBNavItem active>
                    <lgBLink to='#!'>Home</lgBLink>
                  </lgBNavItem>
                  <lgBNavItem>
                    <lgBLink to='#!'>Link</lgBLink>
                  </lgBNavItem>
                  <lgBNavItem>
                    <lgBLink to='#!'>Profile</lgBLink>
                  </lgBNavItem>
                </lgBNavbarNav>
                <lgBNavbarNav right>
                  <lgBNavItem>
                    <lgBFormInline waves>
                      <div className='lg-form my-0'>
                        <input
                          className='form-control mr-sm-2'
                          type='text'
                          placeholder='Search'
                          aria-label='Search'
                        />
                      </div>
                    </lgBFormInline>
                  </lgBNavItem>
                </lgBNavbarNav>
              </lgBCollapse>
            </lgBContainer>
          </lgBNavbar>
        </SectionContainer>

        <SectionContainer header='With dropdown'>
          <lgBNavbar
            color='indigo'
            dark
            expand='lg'
            style={{ marginTop: '20px' }}
          >
            <lgBNavbarBrand>
              <strong className='white-text'>lgBNavbar</strong>
            </lgBNavbarBrand>
            <lgBNavbarToggler
              onClick={this.toggleCollapse('navbarCollapse3')}
            />
            <lgBCollapse id='navbarCollapse3' isOpen={collapseID} navbar>
              <lgBNavbarNav left>
                <lgBNavItem active>
                  <lgBLink to='#!'>Home</lgBLink>
                </lgBNavItem>
                <lgBNavItem>
                  <lgBLink to='#!'>Features</lgBLink>
                </lgBNavItem>
                <lgBNavItem>
                  <lgBLink to='#!'>Pricing</lgBLink>
                </lgBNavItem>
                <lgBNavItem>
                  <lgBDropdown>
                    <lgBDropdownToggle nav caret>
                      <div className='d-none d-lg-inline'>lgBDropdown</div>
                    </lgBDropdownToggle>
                    <lgBDropdownMenu right>
                      <lgBDropdownItem href='#!'>Action</lgBDropdownItem>
                      <lgBDropdownItem href='#!'>
                        Another Action
                      </lgBDropdownItem>
                      <lgBDropdownItem href='#!'>
                        Something else here
                      </lgBDropdownItem>
                      <lgBDropdownItem href='#!'>
                        Something else here
                      </lgBDropdownItem>
                    </lgBDropdownMenu>
                  </lgBDropdown>
                </lgBNavItem>
              </lgBNavbarNav>
              <lgBNavbarNav right>
                <lgBNavItem>
                  <lgBFormInline waves>
                    <div className='lg-form my-0'>
                      <input
                        className='form-control mr-sm-2'
                        type='text'
                        placeholder='Search'
                        aria-label='Search'
                      />
                    </div>
                  </lgBFormInline>
                </lgBNavItem>
              </lgBNavbarNav>
            </lgBCollapse>
          </lgBNavbar>
          <lgBNavbar
            color='default-color'
            dark
            expand='lg'
            style={{ marginTop: '20px' }}
          >
            <lgBNavbarBrand>
              <strong className='white-text'>lgBNavbar</strong>
            </lgBNavbarBrand>
            <lgBNavbarToggler
              onClick={this.toggleCollapse('navbarCollapse3')}
            />
            <lgBCollapse id='navbarCollapse3' isOpen={collapseID} navbar>
              <lgBNavbarNav left>
                <lgBNavItem active>
                  <lgBLink to='#!'>Home</lgBLink>
                </lgBNavItem>
                <lgBNavItem>
                  <lgBLink to='#!'>Features</lgBLink>
                </lgBNavItem>
                <lgBNavItem>
                  <lgBLink to='#!'>Pricing</lgBLink>
                </lgBNavItem>
                <lgBNavItem>
                  <lgBDropdown>
                    <lgBDropdownToggle nav caret>
                      <div className='d-none d-lg-inline'>lgBDropdown</div>
                    </lgBDropdownToggle>
                    <lgBDropdownMenu className='dropdown-default' right>
                      <lgBDropdownItem href='#!'>Action</lgBDropdownItem>
                      <lgBDropdownItem href='#!'>
                        Another Action
                      </lgBDropdownItem>
                      <lgBDropdownItem href='#!'>
                        Something else here
                      </lgBDropdownItem>
                      <lgBDropdownItem href='#!'>
                        Something else here
                      </lgBDropdownItem>
                    </lgBDropdownMenu>
                  </lgBDropdown>
                </lgBNavItem>
              </lgBNavbarNav>
              <lgBNavbarNav right>
                <lgBNavItem>
                  <lgBLink className='waves-effect waves-light' to='#!'>
                    <lgBIcon brand icon='twitter' />
                  </lgBLink>
                </lgBNavItem>
                <lgBNavItem>
                  <lgBLink className='waves-effect waves-light' to='#!'>
                    <lgBIcon brand icon='google-plus' />
                  </lgBLink>
                </lgBNavItem>
                <lgBNavItem>
                  <lgBDropdown>
                    <lgBDropdownToggle nav caret>
                      <lgBIcon icon='user' />
                    </lgBDropdownToggle>
                    <lgBDropdownMenu className='dropdown-default' right>
                      <lgBDropdownItem href='#!'>Action</lgBDropdownItem>
                      <lgBDropdownItem href='#!'>
                        Another Action
                      </lgBDropdownItem>
                      <lgBDropdownItem href='#!'>
                        Something else here
                      </lgBDropdownItem>
                      <lgBDropdownItem href='#!'>
                        Something else here
                      </lgBDropdownItem>
                    </lgBDropdownMenu>
                  </lgBDropdown>
                </lgBNavItem>
              </lgBNavbarNav>
            </lgBCollapse>
          </lgBNavbar>
        </SectionContainer>

        <SectionContainer header='Supportet content'>
          <lgBNavbar
            color='info-color'
            dark
            expand='lg'
            style={{ marginTop: '20px' }}
          >
            <lgBNavbarBrand>
              <strong className='white-text'>lgBNavbar</strong>
            </lgBNavbarBrand>
            <lgBNavbarToggler
              onClick={this.toggleCollapse('navbarCollapse3')}
            />
            <lgBCollapse id='navbarCollapse3' isOpen={collapseID} navbar>
              <lgBNavbarNav right>
                <lgBNavItem>
                  <lgBLink className='waves-effect waves-light' to='#!'>
                    <lgBIcon icon='envelope' className='mr-1' />
                    Contact
                  </lgBLink>
                </lgBNavItem>
                <lgBNavItem>
                  <lgBLink className='waves-effect waves-light' to='#!'>
                    <lgBIcon icon='cog' className='mr-1' />
                    Settings
                  </lgBLink>
                </lgBNavItem>
                <lgBNavItem>
                  <lgBDropdown>
                    <lgBDropdownToggle nav caret>
                      <lgBIcon icon='user' className='mr-1' />
                      Profile
                    </lgBDropdownToggle>
                    <lgBDropdownMenu className='dropdown-default' right>
                      <lgBDropdownItem href='#!'>My account</lgBDropdownItem>
                      <lgBDropdownItem href='#!'>Log out</lgBDropdownItem>
                    </lgBDropdownMenu>
                  </lgBDropdown>
                </lgBNavItem>
              </lgBNavbarNav>
            </lgBCollapse>
          </lgBNavbar>
          <lgBNavbar
            color='secondary-color'
            dark
            expand='lg'
            style={{ marginTop: '20px' }}
          >
            <lgBNavbarBrand>
              <strong className='white-text'>lgBNavbar</strong>
            </lgBNavbarBrand>
            <lgBNavbarToggler
              onClick={this.toggleCollapse('navbarCollapse3')}
            />
            <lgBCollapse id='navbarCollapse3' isOpen={collapseID} navbar>
              <lgBNavbarNav left>
                <lgBNavItem active>
                  <lgBLink to='#!'>Home</lgBLink>
                </lgBNavItem>
                <lgBNavItem>
                  <lgBLink to='#!'>Features</lgBLink>
                </lgBNavItem>
                <lgBNavItem>
                  <lgBLink to='#!'>Pricing</lgBLink>
                </lgBNavItem>
                <lgBNavItem>
                  <lgBDropdown>
                    <lgBDropdownToggle nav caret>
                      <div className='d-none d-lg-inline'>lgBDropdown</div>
                    </lgBDropdownToggle>
                    <lgBDropdownMenu className='dropdown-default' right>
                      <lgBDropdownItem href='#!'>Action</lgBDropdownItem>
                      <lgBDropdownItem href='#!'>
                        Another Action
                      </lgBDropdownItem>
                      <lgBDropdownItem href='#!'>
                        Something else here
                      </lgBDropdownItem>
                      <lgBDropdownItem href='#!'>
                        Something else here
                      </lgBDropdownItem>
                    </lgBDropdownMenu>
                  </lgBDropdown>
                </lgBNavItem>
              </lgBNavbarNav>
              <lgBNavbarNav right>
                <lgBNavItem>
                  <lgBLink
                    className='waves-effect waves-light d-flex align-items-center'
                    to='#!'
                  >
                    1<lgBIcon icon='envelope' className='ml-1' />
                  </lgBLink>
                </lgBNavItem>
                <lgBNavItem>
                  <lgBDropdown>
                    <lgBDropdownToggle className='dopdown-toggle' nav>
                      <img
                        src='https://lgbootstrap.com/img/Photos/Avatars/avatar-2.jpg'
                        className='rounded-circle z-depth-0'
                        style={{ height: '35px', padding: 0 }}
                        alt=''
                      />
                    </lgBDropdownToggle>
                    <lgBDropdownMenu className='dropdown-default' right>
                      <lgBDropdownItem href='#!'>My account</lgBDropdownItem>
                      <lgBDropdownItem href='#!'>Log out</lgBDropdownItem>
                    </lgBDropdownMenu>
                  </lgBDropdown>
                </lgBNavItem>
              </lgBNavbarNav>
            </lgBCollapse>
          </lgBNavbar>
        </SectionContainer>
      </lgBContainer>
    );
  }
}

export default NavbarPage;
