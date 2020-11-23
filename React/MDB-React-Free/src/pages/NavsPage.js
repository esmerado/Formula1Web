import React, { Component } from 'react';
import {
  lgBContainer,
  lgBRow,
  lgBCol,
  lgBNav,
  lgBNavItem,
  lgBLink
} from 'lgbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

class NavsPage extends Component {
  render() {
    return (
      <lgBContainer>
        <DocsLink
          title='Navs'
          href='https://lgbootstrap.com/docs/react/navigation/navs/'
        />

        <SectionContainer title='Basic examples' noBorder>
          <SectionContainer header='Left'>
            <lgBNav>
              <lgBNavItem>
                <lgBLink active to='#!'>
                  Active
                </lgBLink>
              </lgBNavItem>
              <lgBNavItem>
                <lgBLink to='#!'>Link</lgBLink>
              </lgBNavItem>
              <lgBNavItem>
                <lgBLink to='#!'>Link</lgBLink>
              </lgBNavItem>
              <lgBNavItem>
                <lgBLink disabled to='#!'>
                  Disabled
                </lgBLink>
              </lgBNavItem>
            </lgBNav>
          </SectionContainer>

          <SectionContainer header='Center'>
            <lgBNav className='justify-content-center'>
              <lgBNavItem>
                <lgBLink active to='#!'>
                  Active
                </lgBLink>
              </lgBNavItem>
              <lgBNavItem>
                <lgBLink to='#!'>Link</lgBLink>
              </lgBNavItem>
              <lgBNavItem>
                <lgBLink to='#!'>Link</lgBLink>
              </lgBNavItem>
              <lgBNavItem>
                <lgBLink disabled to='#!'>
                  Disabled
                </lgBLink>
              </lgBNavItem>
            </lgBNav>
          </SectionContainer>

          <SectionContainer header='Right'>
            <lgBNav className='justify-content-end'>
              <lgBNavItem>
                <lgBLink active to='#!'>
                  Active
                </lgBLink>
              </lgBNavItem>
              <lgBNavItem>
                <lgBLink to='#!'>Link</lgBLink>
              </lgBNavItem>
              <lgBNavItem>
                <lgBLink to='#!'>Link</lgBLink>
              </lgBNavItem>
              <lgBNavItem>
                <lgBLink disabled to='#!'>
                  Disabled
                </lgBLink>
              </lgBNavItem>
            </lgBNav>
          </SectionContainer>

          <SectionContainer header='Vertical'>
            <lgBNav className='flex-column'>
              <lgBNavItem>
                <lgBLink active to='#!'>
                  Active
                </lgBLink>
              </lgBNavItem>
              <lgBNavItem>
                <lgBLink to='#!'>Link</lgBLink>
              </lgBNavItem>
              <lgBNavItem>
                <lgBLink to='#!'>Link</lgBLink>
              </lgBNavItem>
              <lgBNavItem>
                <lgBLink disabled to='#!'>
                  Disabled
                </lgBLink>
              </lgBNavItem>
            </lgBNav>
          </SectionContainer>
        </SectionContainer>

        <hr className='my-5' />

        <SectionContainer header='With bold font' noBorder>
          <lgBRow>
            <lgBCol lg='6'>
              <SectionContainer>
                <lgBNav className='font-weight-bold'>
                  <lgBLink active to='#!'>
                    Active
                  </lgBLink>
                  <lgBLink to='#!'>Link</lgBLink>
                  <lgBLink to='#!'>Link</lgBLink>
                  <lgBLink disabled to='#!'>
                    Disabled
                  </lgBLink>
                </lgBNav>
              </SectionContainer>
            </lgBCol>
            <lgBCol lg='6'>
              <SectionContainer>
                <lgBNav className='flex-column font-weight-bold'>
                  <lgBLink active to='#!'>
                    Active
                  </lgBLink>
                  <lgBLink to='#!'>Link</lgBLink>
                  <lgBLink to='#!'>Link</lgBLink>
                  <lgBLink disabled to='#!'>
                    Disabled
                  </lgBLink>
                </lgBNav>
              </SectionContainer>
            </lgBCol>
          </lgBRow>
        </SectionContainer>

        <SectionContainer header='With various font and background color'>
          <lgBRow>
            <lgBCol>
              <lgBNav color='grey' className='flex-column font-weight-bold'>
                <lgBLink className='white-text' active to='#!'>
                  Active
                </lgBLink>
                <lgBLink className='white-text' to='#!'>
                  Link 1
                </lgBLink>
                <lgBLink className='white-text' to='#!'>
                  Link 2
                </lgBLink>
                <lgBLink className='white-text' to='#!'>
                  Link 3
                </lgBLink>
              </lgBNav>
            </lgBCol>

            <lgBCol>
              <lgBNav color='amber' className='flex-column font-weight-bold'>
                <lgBLink active to='#!' className='dark-grey-text'>
                  Active
                </lgBLink>
                <lgBLink to='#!' className='dark-grey-text'>
                  Link 1
                </lgBLink>
                <lgBLink to='#!' className='dark-grey-text'>
                  Link 2
                </lgBLink>
                <lgBLink to='#!' className='dark-grey-text'>
                  Link 3
                </lgBLink>
              </lgBNav>
            </lgBCol>

            <lgBCol>
              <lgBNav color='cyan' className='flex-column font-weight-bold'>
                <lgBLink active to='#!' className='indigo-text'>
                  Active
                </lgBLink>
                <lgBLink to='#!'>Link 1</lgBLink>
                <lgBLink to='#!'>Link 2</lgBLink>
                <lgBLink to='#!'>Link 3</lgBLink>
              </lgBNav>
            </lgBCol>
          </lgBRow>
        </SectionContainer>

        <SectionContainer header='With gradient background'>
          <lgBRow>
            <lgBCol lg='6'>
              <lgBNav
                color='peach-gradient'
                className='font-weight-bold py-4 px-2 mb-4'
              >
                <lgBLink className='white-text' active to='#!'>
                  Active
                </lgBLink>
                <lgBLink className='white-text' to='#!'>
                  Link 1
                </lgBLink>
                <lgBLink className='white-text' to='#!'>
                  Link 2
                </lgBLink>
                <lgBLink className='white-text' to='#!'>
                  Link 3
                </lgBLink>
              </lgBNav>
            </lgBCol>
            <lgBCol lg='6'>
              <lgBNav
                color='purple-gradient'
                className='font-weight-bold py-4 px-2 mb-4'
              >
                <lgBLink className='white-text' active to='#!'>
                  Active
                </lgBLink>
                <lgBLink className='white-text' to='#!'>
                  Link 1
                </lgBLink>
                <lgBLink className='white-text' to='#!'>
                  Link 2
                </lgBLink>
                <lgBLink className='white-text' to='#!'>
                  Link 3
                </lgBLink>
              </lgBNav>
            </lgBCol>
            <lgBCol lg='6'>
              <lgBNav
                color='aqua-gradient'
                className='font-weight-bold py-4 px-2 mb-4'
              >
                <lgBLink className='white-text' active to='#!'>
                  Active
                </lgBLink>
                <lgBLink className='white-text' to='#!'>
                  Link 1
                </lgBLink>
                <lgBLink className='white-text' to='#!'>
                  Link 2
                </lgBLink>
                <lgBLink className='white-text' to='#!'>
                  Link 3
                </lgBLink>
              </lgBNav>
            </lgBCol>
            <lgBCol lg='6'>
              <lgBNav
                color='blue-gradient'
                className='font-weight-bold py-4 px-2 mb-4'
              >
                <lgBLink className='white-text' active to='#!'>
                  Active
                </lgBLink>
                <lgBLink className='white-text' to='#!'>
                  Link 1
                </lgBLink>
                <lgBLink className='white-text' to='#!'>
                  Link 2
                </lgBLink>
                <lgBLink className='white-text' to='#!'>
                  Link 3
                </lgBLink>
              </lgBNav>
            </lgBCol>
          </lgBRow>
        </SectionContainer>

        <SectionContainer title='Wtih tabs & pills' noBorder>
          <lgBRow>
            <lgBCol lg='6'>
              <SectionContainer header='Tabs'>
                <lgBNav className='nav-tabs'>
                  <lgBNavItem>
                    <lgBLink active to='#!'>
                      Active
                    </lgBLink>
                  </lgBNavItem>
                  <lgBNavItem>
                    <lgBLink to='#!'>Link 1</lgBLink>
                  </lgBNavItem>
                  <lgBNavItem>
                    <lgBLink to='#!'>Link 2</lgBLink>
                  </lgBNavItem>
                  <lgBNavItem>
                    <lgBLink to='#!'>Link 3</lgBLink>
                  </lgBNavItem>
                </lgBNav>
              </SectionContainer>
            </lgBCol>
            <lgBCol lg='6'>
              <SectionContainer header='Pills'>
                <lgBNav className='nav-pills'>
                  <lgBNavItem>
                    <lgBLink active to='#!'>
                      Active
                    </lgBLink>
                  </lgBNavItem>
                  <lgBNavItem>
                    <lgBLink to='#!'>Link 1</lgBLink>
                  </lgBNavItem>
                  <lgBNavItem>
                    <lgBLink to='#!'>Link 2</lgBLink>
                  </lgBNavItem>
                  <lgBNavItem>
                    <lgBLink to='#!'>Link 3</lgBLink>
                  </lgBNavItem>
                </lgBNav>
              </SectionContainer>
            </lgBCol>
          </lgBRow>
          <SectionContainer header='Fill & justify'>
            <lgBContainer className='mt-4'>
              <lgBNav className='nav-pills nav-fill'>
                <lgBNavItem>
                  <lgBLink active to='#!'>
                    Active
                  </lgBLink>
                </lgBNavItem>
                <lgBNavItem>
                  <lgBLink to='#!'>Longer nav link</lgBLink>
                </lgBNavItem>
                <lgBNavItem>
                  <lgBLink to='#!'>Link</lgBLink>
                </lgBNavItem>
                <lgBNavItem>
                  <lgBLink disabled to='#!'>
                    Disabled
                  </lgBLink>
                </lgBNavItem>
              </lgBNav>
            </lgBContainer>
            <lgBContainer className='mt-4'>
              <lgBNav className='nav-tabs nav-fill'>
                <lgBNavItem>
                  <lgBLink active to='#!'>
                    Active
                  </lgBLink>
                </lgBNavItem>
                <lgBNavItem>
                  <lgBLink to='#!'>Longer nav link</lgBLink>
                </lgBNavItem>
                <lgBNavItem>
                  <lgBLink to='#!'>Link</lgBLink>
                </lgBNavItem>
                <lgBNavItem>
                  <lgBLink disabled to='#!'>
                    Disabled
                  </lgBLink>
                </lgBNavItem>
              </lgBNav>
            </lgBContainer>

            <lgBContainer className='mt-4'>
              <lgBNav className='nav-pills nav-justified'>
                <lgBNavItem>
                  <lgBLink active to='#!'>
                    Active
                  </lgBLink>
                </lgBNavItem>
                <lgBNavItem>
                  <lgBLink to='#!'>Longer nav link</lgBLink>
                </lgBNavItem>
                <lgBNavItem>
                  <lgBLink to='#!'>Link</lgBLink>
                </lgBNavItem>
                <lgBNavItem>
                  <lgBLink disabled to='#!'>
                    Disabled
                  </lgBLink>
                </lgBNavItem>
              </lgBNav>
            </lgBContainer>

            <lgBContainer className='mt-4'>
              <lgBNav className='nav-tabs nav-justified'>
                <lgBNavItem>
                  <lgBLink active to='#!'>
                    Active
                  </lgBLink>
                </lgBNavItem>
                <lgBNavItem>
                  <lgBLink to='#!'>Longer nav link</lgBLink>
                </lgBNavItem>
                <lgBNavItem>
                  <lgBLink to='#!'>Link</lgBLink>
                </lgBNavItem>
                <lgBNavItem>
                  <lgBLink disabled to='#!'>
                    Disabled
                  </lgBLink>
                </lgBNavItem>
              </lgBNav>
            </lgBContainer>
          </SectionContainer>
        </SectionContainer>
      </lgBContainer>
    );
  }
}

export default NavsPage;
