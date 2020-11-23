import React, { Component } from 'react';
import {
  lgBContainer,
  lgBRow,
  lgBCol,
  lgBTabPane,
  lgBTabContent,
  lgBNav,
  lgBNavItem,
  lgBNavLink
} from 'lgbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

class TabsPage extends Component {
  state = {
    activeItem: '1'
  };

  toggle = tab => e => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab
      });
    }
  };

  render() {
    const { activeItem } = this.state;
    return (
      <lgBContainer>
        <DocsLink
          title='Tabs'
          href='https://lgbootstrap.com/docs/react/components/tabs/'
        />
        <lgBContainer>
          <lgBRow>
            <lgBCol lg='12'>
              <SectionContainer header='Basic example'>
                <lgBNav className='nav-tabs'>
                  <lgBNavItem>
                    <lgBNavLink
                      link
                      to='#'
                      active={activeItem === '1'}
                      onClick={this.toggle('1')}
                      role='tab'
                    >
                      Home
                    </lgBNavLink>
                  </lgBNavItem>
                  <lgBNavItem>
                    <lgBNavLink
                      link
                      to='#'
                      active={activeItem === '2'}
                      onClick={this.toggle('2')}
                      role='tab'
                    >
                      Profile
                    </lgBNavLink>
                  </lgBNavItem>
                  <lgBNavItem>
                    <lgBNavLink
                      link
                      to='#'
                      active={activeItem === '3'}
                      onClick={this.toggle('3')}
                      role='tab'
                    >
                      Profile
                    </lgBNavLink>
                  </lgBNavItem>
                </lgBNav>
                <lgBTabContent activeItem={activeItem}>
                  <lgBTabPane tabId='1' role='tabpanel'>
                    <p className='mt-2'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nihil odit magnam minima, soluta doloribus reiciendis
                      molestiae placeat unde eos molestias. Quisquam aperiam,
                      pariatur. Tempora, placeat ratione porro voluptate odit
                      minima.
                    </p>
                  </lgBTabPane>
                  <lgBTabPane tabId='2' role='tabpanel'>
                    <p className='mt-2'>
                      Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                      voluptate odit minima. Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Nihil odit magnam minima,
                      soluta doloribus reiciendis molestiae placeat unde eos
                      molestias.
                    </p>
                    <p>
                      Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                      voluptate odit minima. Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Nihil odit magnam minima,
                      soluta doloribus reiciendis molestiae placeat unde eos
                      molestias.
                    </p>
                  </lgBTabPane>
                  <lgBTabPane tabId='3' role='tabpanel'>
                    <p className='mt-2'>
                      Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                      voluptate odit minima. Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Nihil odit magnam minima,
                      soluta doloribus reiciendis molestiae placeat unde eos
                      molestias.
                    </p>
                  </lgBTabPane>
                </lgBTabContent>
              </SectionContainer>
            </lgBCol>
          </lgBRow>
        </lgBContainer>
      </lgBContainer>
    );
  }
}

export default TabsPage;
