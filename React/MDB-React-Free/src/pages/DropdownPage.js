import React from 'react';
import {
  lgBDropdown,
  lgBDropdownToggle,
  lgBDropdownMenu,
  lgBDropdownItem,
  lgBContainer
} from 'lgbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

const DropdownPage = () => {
  return (
    <lgBContainer>
      <DocsLink
        title='lgBDropdown'
        href='https://lgbootstrap.com/docs/react/components/dropdowns/'
      />

      <SectionContainer header='Basic example' flexCenter className='flex-wrap'>
        <lgBDropdown>
          <lgBDropdownToggle caret color='primary'>
            Dropdown
          </lgBDropdownToggle>
          <lgBDropdownMenu>
            <lgBDropdownItem>Action</lgBDropdownItem>
            <lgBDropdownItem>Another Action</lgBDropdownItem>
            <lgBDropdownItem>Something else here</lgBDropdownItem>
            <lgBDropdownItem divider />
            <lgBDropdownItem>Separated link</lgBDropdownItem>
          </lgBDropdownMenu>
        </lgBDropdown>
        <lgBDropdown>
          <lgBDropdownToggle caret color='default'>
            Dropdown
          </lgBDropdownToggle>
          <lgBDropdownMenu color='default'>
            <lgBDropdownItem>Action</lgBDropdownItem>
            <lgBDropdownItem>Another Action</lgBDropdownItem>
            <lgBDropdownItem>Something else here</lgBDropdownItem>
            <lgBDropdownItem divider />
            <lgBDropdownItem>Separated link</lgBDropdownItem>
          </lgBDropdownMenu>
        </lgBDropdown>
        <lgBDropdown>
          <lgBDropdownToggle caret color='secondary'>
            Dropdown
          </lgBDropdownToggle>
          <lgBDropdownMenu color='secondary'>
            <lgBDropdownItem>Action</lgBDropdownItem>
            <lgBDropdownItem>Another Action</lgBDropdownItem>
            <lgBDropdownItem>Something else here</lgBDropdownItem>
            <lgBDropdownItem divider />
            <lgBDropdownItem>Separated link</lgBDropdownItem>
          </lgBDropdownMenu>
        </lgBDropdown>
        <lgBDropdown>
          <lgBDropdownToggle caret color='success'>
            Dropdown
          </lgBDropdownToggle>
          <lgBDropdownMenu color='success'>
            <lgBDropdownItem>Action</lgBDropdownItem>
            <lgBDropdownItem>Another Action</lgBDropdownItem>
            <lgBDropdownItem>Something else here</lgBDropdownItem>
            <lgBDropdownItem divider />
            <lgBDropdownItem>Separated link</lgBDropdownItem>
          </lgBDropdownMenu>
        </lgBDropdown>
        <lgBDropdown>
          <lgBDropdownToggle caret color='dark'>
            Dropdown
          </lgBDropdownToggle>
          <lgBDropdownMenu color='dark'>
            <lgBDropdownItem>Action</lgBDropdownItem>
            <lgBDropdownItem>Another Action</lgBDropdownItem>
            <lgBDropdownItem>Something else here</lgBDropdownItem>
            <lgBDropdownItem divider />
            <lgBDropdownItem>Separated link</lgBDropdownItem>
          </lgBDropdownMenu>
        </lgBDropdown>
        <lgBDropdown>
          <lgBDropdownToggle caret color='danger'>
            Dropdown
          </lgBDropdownToggle>
          <lgBDropdownMenu color='danger'>
            <lgBDropdownItem>Action</lgBDropdownItem>
            <lgBDropdownItem>Another Action</lgBDropdownItem>
            <lgBDropdownItem>Something else here</lgBDropdownItem>
            <lgBDropdownItem divider />
            <lgBDropdownItem>Separated link</lgBDropdownItem>
          </lgBDropdownMenu>
        </lgBDropdown>
        <lgBDropdown>
          <lgBDropdownToggle caret color='info'>
            Dropdown
          </lgBDropdownToggle>
          <lgBDropdownMenu color='info'>
            <lgBDropdownItem>Action</lgBDropdownItem>
            <lgBDropdownItem>Another Action</lgBDropdownItem>
            <lgBDropdownItem>Something else here</lgBDropdownItem>
            <lgBDropdownItem divider />
            <lgBDropdownItem>Separated link</lgBDropdownItem>
          </lgBDropdownMenu>
        </lgBDropdown>
        <lgBDropdown>
          <lgBDropdownToggle caret color='warning'>
            Dropdown
          </lgBDropdownToggle>
          <lgBDropdownMenu color='warning'>
            <lgBDropdownItem>Action</lgBDropdownItem>
            <lgBDropdownItem>Another Action</lgBDropdownItem>
            <lgBDropdownItem>Something else here</lgBDropdownItem>
            <lgBDropdownItem divider />
            <lgBDropdownItem>Separated link</lgBDropdownItem>
          </lgBDropdownMenu>
        </lgBDropdown>
        <lgBDropdown>
          <lgBDropdownToggle caret color='ins'>
            Dropdown
          </lgBDropdownToggle>
          <lgBDropdownMenu color='ins'>
            <lgBDropdownItem>Action</lgBDropdownItem>
            <lgBDropdownItem>Another Action</lgBDropdownItem>
            <lgBDropdownItem>Something else here</lgBDropdownItem>
            <lgBDropdownItem divider />
            <lgBDropdownItem>Separated link</lgBDropdownItem>
          </lgBDropdownMenu>
        </lgBDropdown>
      </SectionContainer>

      <SectionContainer header='Sizing' flexCenter>
        <lgBDropdown size='lg'>
          <lgBDropdownToggle caret color='danger'>
            Large dropdown
          </lgBDropdownToggle>
          <lgBDropdownMenu>
            <lgBDropdownItem>Action</lgBDropdownItem>
            <lgBDropdownItem>Another Action</lgBDropdownItem>
            <lgBDropdownItem>Something else here</lgBDropdownItem>
            <lgBDropdownItem divider />
            <lgBDropdownItem>Separated link</lgBDropdownItem>
          </lgBDropdownMenu>
        </lgBDropdown>

        <lgBDropdown>
          <lgBDropdownToggle caret color='success'>
            Small dropdown
          </lgBDropdownToggle>
          <lgBDropdownMenu>
            <lgBDropdownItem>Action</lgBDropdownItem>
            <lgBDropdownItem>Another Action</lgBDropdownItem>
            <lgBDropdownItem>Something else here</lgBDropdownItem>
            <lgBDropdownItem divider />
            <lgBDropdownItem>Separated link</lgBDropdownItem>
          </lgBDropdownMenu>
        </lgBDropdown>

        <lgBDropdown size='sm'>
          <lgBDropdownToggle caret color='primary'>
            Small dropdown
          </lgBDropdownToggle>
          <lgBDropdownMenu>
            <lgBDropdownItem>Action</lgBDropdownItem>
            <lgBDropdownItem>Another Action</lgBDropdownItem>
            <lgBDropdownItem>Something else here</lgBDropdownItem>
            <lgBDropdownItem divider />
            <lgBDropdownItem>Separated link</lgBDropdownItem>
          </lgBDropdownMenu>
        </lgBDropdown>
      </SectionContainer>

      <SectionContainer header='Drop variations' flexCenter>
        <lgBDropdown dropleft>
          <lgBDropdownToggle caret color='primary'>
            Dropleft
          </lgBDropdownToggle>
          <lgBDropdownMenu>
            <lgBDropdownItem>Action</lgBDropdownItem>
            <lgBDropdownItem>Another Action</lgBDropdownItem>
            <lgBDropdownItem>Something else here</lgBDropdownItem>
            <lgBDropdownItem divider />
            <lgBDropdownItem>Separated link</lgBDropdownItem>
          </lgBDropdownMenu>
        </lgBDropdown>

        <lgBDropdown dropup>
          <lgBDropdownToggle caret color='primary'>
            Dropup
          </lgBDropdownToggle>
          <lgBDropdownMenu>
            <lgBDropdownItem>Action</lgBDropdownItem>
            <lgBDropdownItem>Another Action</lgBDropdownItem>
            <lgBDropdownItem>Something else here</lgBDropdownItem>
            <lgBDropdownItem divider />
            <lgBDropdownItem>Separated link</lgBDropdownItem>
          </lgBDropdownMenu>
        </lgBDropdown>

        <lgBDropdown dropright>
          <lgBDropdownToggle caret color='primary'>
            Dropright
          </lgBDropdownToggle>
          <lgBDropdownMenu>
            <lgBDropdownItem>Action</lgBDropdownItem>
            <lgBDropdownItem>Another Action</lgBDropdownItem>
            <lgBDropdownItem>Something else here</lgBDropdownItem>
            <lgBDropdownItem divider />
            <lgBDropdownItem>Separated link</lgBDropdownItem>
          </lgBDropdownMenu>
        </lgBDropdown>
      </SectionContainer>

      <SectionContainer header='Alignment' flexCenter>
        <lgBDropdown>
          <lgBDropdownToggle caret color='primary'>
            This dropdown&apos;s menu is left-aligned
          </lgBDropdownToggle>
          <lgBDropdownMenu>
            <lgBDropdownItem>Action</lgBDropdownItem>
            <lgBDropdownItem>Another Action</lgBDropdownItem>
            <lgBDropdownItem>Something else here</lgBDropdownItem>
          </lgBDropdownMenu>
        </lgBDropdown>

        <lgBDropdown>
          <lgBDropdownToggle caret color='primary'>
            This dropdown&apos;s menu is right-aligned
          </lgBDropdownToggle>
          <lgBDropdownMenu right>
            <lgBDropdownItem>Action</lgBDropdownItem>
            <lgBDropdownItem>Another Action</lgBDropdownItem>
            <lgBDropdownItem>Something else here</lgBDropdownItem>
          </lgBDropdownMenu>
        </lgBDropdown>
      </SectionContainer>

      <SectionContainer header='Menu headers' flexCenter>
        <lgBDropdown>
          <lgBDropdownToggle caret color='primary'>
            lgBDropdown
          </lgBDropdownToggle>
          <lgBDropdownMenu>
            <lgBDropdownItem header>lgBDropdown header</lgBDropdownItem>
            <lgBDropdownItem>Action</lgBDropdownItem>
            <lgBDropdownItem>Another Action</lgBDropdownItem>
            <lgBDropdownItem>Something else here</lgBDropdownItem>
          </lgBDropdownMenu>
        </lgBDropdown>
      </SectionContainer>

      <SectionContainer header='Menu dividers' flexCenter>
        <lgBDropdown>
          <lgBDropdownToggle caret color='primary'>
            lgBDropdown
          </lgBDropdownToggle>
          <lgBDropdownMenu>
            <lgBDropdownItem>Action</lgBDropdownItem>
            <lgBDropdownItem>Another Action</lgBDropdownItem>
            <lgBDropdownItem>Something else here</lgBDropdownItem>
            <lgBDropdownItem divider />
            <lgBDropdownItem>Separated link</lgBDropdownItem>
          </lgBDropdownMenu>
        </lgBDropdown>
      </SectionContainer>

      <SectionContainer header='Disabled menu items' flexCenter>
        <lgBDropdown>
          <lgBDropdownToggle caret color='primary'>
            lgBDropdown
          </lgBDropdownToggle>
          <lgBDropdownMenu>
            <lgBDropdownItem>Regular link</lgBDropdownItem>
            <lgBDropdownItem disabled href='#'>
              Disabled link
            </lgBDropdownItem>
            <lgBDropdownItem href='#'>Another link</lgBDropdownItem>
          </lgBDropdownMenu>
        </lgBDropdown>
      </SectionContainer>
    </lgBContainer>
  );
};

export default DropdownPage;
