import React, { Component } from 'react';
import {
  lgBNavbar,
  lgBNavbarBrand,
  lgBNavbarNav,
  lgBNavbarToggler,
  lgBCollapse,
  lgBNavItem,
  lgBFooter,
  lgBNavLink,
  lgBTooltip,
  lgBIcon
} from 'lgbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { ReactComponent as Logo } from './assets/logo.svg';
import Routes from './Routes';

class App extends Component {
  state = {
    collapseID: ''
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

  closeCollapse = collID => () => {
    const { collapseID } = this.state;
    window.scrollTo(0, 0);
    collapseID === collID && this.setState({ collapseID: '' });
  };

  render() {
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.toggleCollapse('mainNavbarCollapse')}
      />
    );

    const { collapseID } = this.state;

    return (
      <Router>
        <div className='flyout'>
          <lgBNavbar color='indigo' dark expand='lg' fixed='top' scrolling>
            <lgBNavbarBrand href='/' className='py-0 font-weight-bold'>
              <Logo style={{ height: '2.5rem', width: '2.5rem' }} />
              <strong className='align-middle'>lgB React</strong>
            </lgBNavbarBrand>
            <lgBNavbarToggler
              onClick={this.toggleCollapse('mainNavbarCollapse')}
            />
            <lgBCollapse id='mainNavbarCollapse' isOpen={collapseID} navbar>
              <lgBNavbarNav right>
                <lgBNavItem>
                  <lgBNavLink
                    exact
                    to='/'
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                  >
                    <strong>Home</strong>
                  </lgBNavLink>
                </lgBNavItem>
                <lgBNavItem>
                  <lgBNavLink
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                    to='/css'
                  >
                    <strong>CSS</strong>
                  </lgBNavLink>
                </lgBNavItem>
                <lgBNavItem>
                  <lgBNavLink
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                    to='/components'
                  >
                    <strong>Components</strong>
                  </lgBNavLink>
                </lgBNavItem>
                <lgBNavItem>
                  <lgBNavLink
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                    to='/advanced'
                  >
                    <strong>Advanced</strong>
                  </lgBNavLink>
                </lgBNavItem>
                <lgBNavItem>
                  <lgBNavLink
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                    to='/navigation'
                  >
                    <strong>Navigation</strong>
                  </lgBNavLink>
                </lgBNavItem>
                <lgBNavItem>
                  <lgBNavLink
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                    to='/forms'
                  >
                    <strong>Forms</strong>
                  </lgBNavLink>
                </lgBNavItem>
                <lgBNavItem>
                  <lgBNavLink
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                    to='/tables'
                  >
                    <strong>Tables</strong>
                  </lgBNavLink>
                </lgBNavItem>
                <lgBNavItem>
                  <lgBNavLink
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                    to='/modals'
                  >
                    <strong>Modals</strong>
                  </lgBNavLink>
                </lgBNavItem>
                <lgBNavItem>
                  <lgBNavLink
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                    to='/addons'
                  >
                    <strong>Addons</strong>
                  </lgBNavLink>
                </lgBNavItem>

                

                <lgBNavItem>
                  <lgBTooltip
                    placement='bottom'
                    domElement
                    style={{ display: 'block' }}
                  >
                    <a
                      className='nav-link Ripple-parent'
                      href='https://lgbootstrap.com/products/react-ui-kit/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <strong>
                        <lgBIcon far icon='gem' />
                      </strong>
                    </a>
                    <span>PRO</span>
                  </lgBTooltip>
                </lgBNavItem>
                <lgBNavItem>
                  <lgBTooltip
                    placement='bottom'
                    domElement
                    style={{ display: 'block' }}
                  >
                    <a
                      className='nav-link Ripple-parent'
                      href='https://lgbootstrap.com/docs/react/getting-started/download/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <strong>
                        <lgBIcon icon='download' />
                      </strong>
                    </a>
                    <span>FREE</span>
                  </lgBTooltip>
                </lgBNavItem>
                <lgBNavItem className='mr-2'>
                  <lgBTooltip
                    placement='bottom'
                    domElement
                    style={{ display: 'block' }}
                  >
                    <a
                      className='nav-link Ripple-parent'
                      href='https://lgbootstrap.com/support/cat/react/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <strong>
                        <lgBIcon icon='question-circle' />
                      </strong>
                    </a>
                    <span>SUPPORT</span>
                  </lgBTooltip>
                </lgBNavItem>
              </lgBNavbarNav>
            </lgBCollapse>
          </lgBNavbar>
          {collapseID && overlay}
          <main style={{ marginTop: '4rem' }}>
            <Routes />
          </main>
          <lgBFooter color='indigo'>
            <p className='footer-copyright mb-0 py-3 text-center'>
              &copy; {new Date().getFullYear()} Copyright:
              <a href='https://www.lgBootstrap.com'> lgBootstrap.com </a>
            </p>
          </lgBFooter>
        </div>
      </Router>
    );
  }
}

export default App;
