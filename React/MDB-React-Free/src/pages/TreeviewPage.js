import React, { Component } from 'react';
import {
  lgBContainer,
  lgBTreeview,
  lgBTreeviewList,
  lgBTreeviewItem,
  lgBCol,
  lgBRow
} from 'lgbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

class TreeviewPage extends Component {
  state = {
    folderOpen: false
  }

  handleSwitchChange = () => {
    this.setState({
      folderOpen: !this.state.folderOpen
    });
  }

  render() {
    return (
      <lgBContainer>
        <DocsLink
          title='Tabs'
          href='https://lgbootstrap.com/plugins/react/treeview/'
        />
        <SectionContainer header='Basic example'>
          <lgBCol lg='4'>
            <lgBTreeview
              header='Folders'
              className='w-20'
              getValue={value => console.log(value)}
            >
              <lgBTreeviewList icon='envelope-open' title='Mail' far>
                <lgBTreeviewItem icon='address-book' title='Contact' far />
                <lgBTreeviewItem icon='bell' title='Offer' far />
                <lgBTreeviewList icon='calendar' title='Calendar' far>
                  <lgBTreeviewItem icon='clock' title='Deadlines' far />
                  <lgBTreeviewItem icon='users' title='Meetings' />
                  <lgBTreeviewItem icon='basketball-ball' title='Workouts' />
                  <lgBTreeviewItem icon='mug-hot' title='Events' />
                </lgBTreeviewList>
              </lgBTreeviewList>
              <lgBTreeviewList title='Inbox'>
                <lgBTreeviewItem title='Admin' far />
                <lgBTreeviewItem title='Corporate' far />
                <lgBTreeviewItem title='Finance' far />
                <lgBTreeviewItem title='Other' far />
              </lgBTreeviewList>
              <lgBTreeviewList icon='gem' title='Favourites' far>
                <lgBTreeviewItem icon='pepper-hot' title='Restaurants' />
                <lgBTreeviewItem icon='eye' title='Places' far />
                <lgBTreeviewItem icon='gamepad' title='Games' />
                <lgBTreeviewItem icon='cocktail' title='Cocktails' />
                <lgBTreeviewItem icon='pizza-slice' title='Food' />
              </lgBTreeviewList>
              <lgBTreeviewItem icon='comment' title='Notes' far />
              <lgBTreeviewItem icon='cog' title='Settings' />
              <lgBTreeviewItem icon='desktop' title='Devices' />
              <lgBTreeviewItem icon='trash-alt' title='Deleted items' />
            </lgBTreeview>
          </lgBCol>
        </SectionContainer>

        <SectionContainer header='Animated'>
          <lgBCol lg='4'>
            <lgBTreeview
              theme='animated'
              header='Folders'
              className='w-20'
              getValue={value => console.log(value)}
            >
              <lgBTreeviewList icon='envelope-open' title='Mail' far open>
                <lgBTreeviewItem icon='address-book' title='Contact' far />
                <lgBTreeviewItem icon='bell' title='Offer' far />
                <lgBTreeviewList icon='calendar' title='Calendar' far open>
                  <lgBTreeviewItem icon='clock' title='Deadlines' far />
                  <lgBTreeviewItem icon='users' title='Meetings' opened />
                  <lgBTreeviewItem icon='basketball-ball' title='Workouts' />
                  <lgBTreeviewItem icon='mug-hot' title='Events' />
                </lgBTreeviewList>
              </lgBTreeviewList>
              <lgBTreeviewList title='Inbox' far>
                <lgBTreeviewItem title='Admin' far />
                <lgBTreeviewItem title='Corporate' far />
                <lgBTreeviewItem title='Finance' far />
                <lgBTreeviewItem title='Other' far />
              </lgBTreeviewList>
              <lgBTreeviewList icon='gem' title='Favourites' far>
                <lgBTreeviewItem icon='pepper-hot' title='Restaurants' />
                <lgBTreeviewItem icon='eye' title='Places' far />
                <lgBTreeviewItem icon='gamepad' title='Games' />
                <lgBTreeviewItem icon='cocktail' title='Cocktails' />
                <lgBTreeviewItem icon='pizza-slice' title='Food' />
              </lgBTreeviewList>
              <lgBTreeviewItem icon='comment' title='Notes' far />
              <lgBTreeviewItem icon='cog' title='Settings' />
              <lgBTreeviewItem icon='desktop' title='Devices' />
              <lgBTreeviewItem icon='trash-alt' title='Deleted items' />
            </lgBTreeview>
          </lgBCol>
        </SectionContainer>

        <SectionContainer header='Colorful'>
          <lgBCol lg='4'>
            <lgBTreeview
              theme='colorful'
              header='Folders'
              className='border-secondary w-20 '
              getValue={value => console.log(value)}
            >
              <lgBTreeviewList icon='envelope-open' title='Mail' far>
                <lgBTreeviewItem icon='address-book' title='Contact' far />
                <lgBTreeviewItem icon='bell' title='Offer' far />
                <lgBTreeviewList icon='calendar' title='Calendar' far>
                  <lgBTreeviewItem icon='clock' title='Deadlines' far />
                  <lgBTreeviewItem icon='users' title='Meetings' />
                  <lgBTreeviewItem icon='basketball-ball' title='Workouts' />
                  <lgBTreeviewItem icon='mug-hot' title='Events' />
                </lgBTreeviewList>
              </lgBTreeviewList>
              <lgBTreeviewList title='Inbox' far>
                <lgBTreeviewItem title='Admin' far />
                <lgBTreeviewItem title='Corporate' far />
                <lgBTreeviewItem title='Finance' far />
                <lgBTreeviewItem title='Other' far />
              </lgBTreeviewList>
              <lgBTreeviewList icon='gem' title='Favourites' far>
                <lgBTreeviewItem icon='pepper-hot' title='Restaurants' />
                <lgBTreeviewItem icon='eye' title='Places' far />
                <lgBTreeviewItem icon='gamepad' title='Games' />
                <lgBTreeviewItem icon='cocktail' title='Cocktails' />
                <lgBTreeviewItem icon='pizza-slice' title='Food' />
              </lgBTreeviewList>
              <lgBTreeviewItem icon='comment' title='Notes' far />
              <lgBTreeviewItem icon='cog' title='Settings' />
              <lgBTreeviewItem icon='desktop' title='Devices' />
              <lgBTreeviewItem icon='trash-alt' title='Deleted items' />
            </lgBTreeview>
          </lgBCol>
        </SectionContainer>

        <SectionContainer header='Control elements'>
          <lgBRow>
          <lgBCol lg='4'>
            <lgBTreeview
              theme='animated'
              header='Open and disabled elements'
              className='border-secondary w-20 '
              getValue={value => console.log(value)}
            >
              <lgBTreeviewList icon='envelope-open' title='Normal folder' far>
                <lgBTreeviewItem icon='address-book' title='Contact' far/>
                <lgBTreeviewItem icon='bell' title='Offer' far />
                <lgBTreeviewList icon='calendar' title='Calendar' far>
                  <lgBTreeviewItem icon='clock' title='Deadlines' far />
                  <lgBTreeviewItem icon='users' title='Meetings' />
                  <lgBTreeviewItem icon='basketball-ball' title='Workouts' />
                  <lgBTreeviewItem icon='mug-hot' title='Events' />
                </lgBTreeviewList>
              </lgBTreeviewList>
              <lgBTreeviewList title='Disabled folder' icon='folder-minus' disabled disabledClassName='disabled text-muted'/>
              <lgBTreeviewList icon='gem' title='Opened folder' opened far>
                <lgBTreeviewItem icon='pepper-hot' title='Restaurants' />
                <lgBTreeviewItem icon='eye' title='Places' far />
                <lgBTreeviewItem icon='gamepad' title='Games' />
              </lgBTreeviewList>
              <lgBTreeviewList icon='folder-open' title='Opened and disabled folder' opened disabled disabledClassName='disabled'>
                <lgBTreeviewItem icon='folder' title='Normal item' />
                <lgBTreeviewItem icon='folder-minus' title='Disabled item' disabled disabledClassName='disabled text-muted'/>
                <lgBTreeviewItem icon='folder' far title='Opened item' opened />
              </lgBTreeviewList>
            </lgBTreeview>
            
          </lgBCol>
          </lgBRow>
        </SectionContainer>
      </lgBContainer>
    );
  }
}

export default TreeviewPage;
