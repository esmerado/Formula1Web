import React, { Component } from 'react';
import {
  lgBInput,
  lgBFormInline,
  lgBContainer,
  lgBRow,
  lgBCol,
  lgBIcon,
  lgBModal,
  lgBModalBody,
  lgBModalHeader,
  lgBModalFooter,
  lgBBtn,
  lgBListGroup,
  lgBListGroupItem
} from 'lgbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';
import './Search.css';

const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cabo Verde',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Central African Republic (CAR)',
  'Chad',
  'Chile',
  'China',
  'Colombia',
  'Comoros',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Kosovo',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia (FYROM)',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Morocco',
  'Mozambique',
  'Myanmar (Burma)',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'North Korea',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Korea',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Timor-Leste',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates (UAE)',
  'United Kingdom (UK)',
  'United States of America (USA)',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City (Holy See)',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
];

class SearchPage extends Component {
  state = {
    dataSet: countries,
    filteredSet: countries,
    searchValue: '',
    modalOpen: false
  };

  handleSearch = event =>
    this.setState({ searchValue: event.target.value }, () =>
      this.searchForCountry()
    );

  searchForCountry = () => {
    const { searchValue } = this.state;
    this.setState(prevState => {
      const filteredSet = prevState.dataSet.filter(item =>
        item.toLowerCase().match(searchValue.toLowerCase())
      );
      return { filteredSet };
    });
  };

  toggleModal = () => {
    const { modalOpen } = this.state;
    this.setState({ modalOpen: !modalOpen });
  };

  render() {
    const { modalOpen, searchValue, filteredSet } = this.state;
    return (
      <lgBContainer>
        <DocsLink
          title='Search'
          href='https://lgbootstrap.com/docs/react/forms/search/'
        />

        <SectionContainer>
          <lgBRow className='d-flex align-items-center'>
            <lgBCol lg='6'>
              <lgBBtn onClick={this.toggleModal}>
                Search for country example
              </lgBBtn>
            </lgBCol>
            <lgBCol lg='6'>
              <input
                className='form-control'
                type='text'
                placeholder='Search'
                aria-label='Search'
              />
            </lgBCol>
          </lgBRow>
        </SectionContainer>

        <SectionContainer header='Search with colorful border'>
          <lgBRow>
            <lgBCol lg='6'>
              <lgBInput
                hint='Search'
                type='text'
                containerClass='active-pink active-pink-2 mt-0 mb-3'
              />
              <lgBInput
                hint='Search'
                type='text'
                containerClass='active-purple active-purple-2 mt-0 mb-3'
              />
              <lgBInput
                hint='Search'
                type='text'
                containerClass='active-cyan active-cyan-2 mt-0 mb-3'
              />
              <lgBInput
                hint='Search'
                type='text'
                containerClass='active-pink-2 mt-0 mb-3'
              />
              <lgBInput
                hint='Search'
                type='text'
                containerClass='active-purple-2 mt-0 mb-3'
              />
              <lgBInput
                hint='Search'
                type='text'
                containerClass='active-cyan-2 active-purple-2 mt-0 mb-3'
              />
            </lgBCol>
            <lgBCol lg='6'>
              <div className='active-pink-3 active-pink-4 mb-3'>
                <input
                  className='form-control'
                  type='text'
                  placeholder='Search'
                  aria-label='Search'
                />
              </div>
              <div className='active-purple-3 active-purple-4 mb-3'>
                <input
                  className='form-control'
                  type='text'
                  placeholder='Search'
                  aria-label='Search'
                />
              </div>
              <div className='active-cyan-3 active-cyan-4 mb-3'>
                <input
                  className='form-control'
                  type='text'
                  placeholder='Search'
                  aria-label='Search'
                />
              </div>
              <div className='active-pink-4 mb-3'>
                <input
                  className='form-control'
                  type='text'
                  placeholder='Search'
                  aria-label='Search'
                />
              </div>
              <div className='active-purple-4 mb-3'>
                <input
                  className='form-control'
                  type='text'
                  placeholder='Search'
                  aria-label='Search'
                />
              </div>
              <div className='active-cyan-4 mb-3'>
                <input
                  className='form-control'
                  type='text'
                  placeholder='Search'
                  aria-label='Search'
                />
              </div>
            </lgBCol>
          </lgBRow>
        </SectionContainer>

        <SectionContainer header='Search with icon'>
          <lgBRow>
            <lgBCol lg='6'>
              <lgBFormInline className='lg-form'>
                <lgBIcon icon='search' />
                <input
                  className='form-control form-control-sm ml-3 w-75'
                  type='text'
                  placeholder='Search'
                  aria-label='Search'
                />
              </lgBFormInline>
              <lgBFormInline className='lg-form active-pink active-pink-2'>
                <lgBIcon icon='search' />
                <input
                  className='form-control form-control-sm ml-3 w-75'
                  type='text'
                  placeholder='Search'
                  aria-label='Search'
                />
              </lgBFormInline>
              <lgBFormInline className='lg-form active-purple active-purple-2'>
                <lgBIcon icon='search' />
                <input
                  className='form-control form-control-sm ml-3 w-75'
                  type='text'
                  placeholder='Search'
                  aria-label='Search'
                />
              </lgBFormInline>
              <lgBFormInline className='lg-form active-cyan active-cyan-2 '>
                <lgBIcon icon='search' />
                <input
                  className='form-control form-control-sm ml-3 w-75'
                  type='text'
                  placeholder='Search'
                  aria-label='Search'
                />
              </lgBFormInline>
              <lgBFormInline className='lg-form active-pink-2'>
                <input
                  className='form-control form-control-sm mr-3 w-75'
                  type='text'
                  placeholder='Search'
                  aria-label='Search'
                />
                <lgBIcon icon='search' />
              </lgBFormInline>
              <lgBFormInline className='lg-form active-purple-2'>
                <input
                  className='form-control form-control-sm mr-3 w-75'
                  type='text'
                  placeholder='Search'
                  aria-label='Search'
                />
                <lgBIcon icon='search' />
              </lgBFormInline>
              <lgBFormInline className='lg-form active-cyan-2 '>
                <input
                  className='form-control form-control-sm mr-3 w-75'
                  type='text'
                  placeholder='Search'
                  aria-label='Search'
                />
                <lgBIcon icon='search' />
              </lgBFormInline>
            </lgBCol>
            <lgBCol lg='6'>
              <form className='form-inline mt-4 mb-4'>
                <lgBIcon icon='search' aria-hidden='true' />
                <input
                  className='form-control form-control-sm ml-3 w-75'
                  type='text'
                  placeholder='Search'
                  aria-label='Search'
                />
              </form>
              <form className='form-inline active-pink-3 active-pink-4 mb-4'>
                <lgBIcon icon='search' aria-hidden='true' />
                <input
                  className='form-control form-control-sm ml-3 w-75'
                  type='text'
                  placeholder='Search'
                  aria-label='Search'
                />
              </form>
              <form className='form-inline active-purple-3 active-purple-4 mb-4'>
                <lgBIcon icon='search' aria-hidden='true' />
                <input
                  className='form-control form-control-sm ml-3 w-75'
                  type='text'
                  placeholder='Search'
                  aria-label='Search'
                />
              </form>
              <form className='form-inline active-cyan-3 active-cyan-4 mb-4'>
                <lgBIcon icon='search' aria-hidden='true' />
                <input
                  className='form-control form-control-sm ml-3 w-75'
                  type='text'
                  placeholder='Search'
                  aria-label='Search'
                />
              </form>
              <form className='form-inline mb-4'>
                <input
                  className='form-control form-control-sm mr-3 w-75'
                  type='text'
                  placeholder='Search'
                  aria-label='Search'
                />
                <lgBIcon icon='search' aria-hidden='true' />
              </form>
              <form className='form-inline active-pink-4 mb-4'>
                <input
                  className='form-control form-control-sm mr-3 w-75'
                  type='text'
                  placeholder='Search'
                  aria-label='Search'
                />
                <lgBIcon icon='search' aria-hidden='true' />
              </form>
              <form className='form-inline active-purple-4 mb-4'>
                <input
                  className='form-control form-control-sm mr-3 w-75'
                  type='text'
                  placeholder='Search'
                  aria-label='Search'
                />
                <lgBIcon icon='search' aria-hidden='true' />
              </form>
              <form className='form-inline active-cyan-4 mb-4'>
                <input
                  className='form-control form-control-sm mr-3 w-75'
                  type='text'
                  placeholder='Search'
                  aria-label='Search'
                />
                <lgBIcon icon='search' aria-hidden='true' />
              </form>
            </lgBCol>
          </lgBRow>
        </SectionContainer>

        <SectionContainer header='Search with input group'>
          <div className='input-group lg-form form-sm form-1 pl-0'>
            <div className='input-group-prepend'>
              <span
                className='input-group-text purple lighten-3'
                id='basic-text1'
              >
                <lgBIcon icon='search' className='text-grey' />
              </span>
            </div>
            <input
              className='form-control my-0 py-1'
              type='text'
              placeholder='Search'
              aria-label='Search'
            />
          </div>
          <div className='input-group lg-form form-sm form-1 pl-0'>
            <div className='input-group-prepend'>
              <span
                className='input-group-text cyan lighten-2'
                id='basic-text1'
              >
                <lgBIcon icon='search' className='text-grey' />
              </span>
            </div>
            <input
              className='form-control my-0 py-1'
              type='text'
              placeholder='Search'
              aria-label='Search'
            />
          </div>
          <div className='input-group lg-form form-sm form-1 pl-0'>
            <div className='input-group-prepend'>
              <span
                className='input-group-text pink lighten-3'
                id='basic-text1'
              >
                <lgBIcon icon='search' className='text-grey' />
              </span>
            </div>
            <input
              className='form-control my-0 py-1'
              type='text'
              placeholder='Search'
              aria-label='Search'
            />
          </div>
          <div className='input-group lg-form form-sm form-2 pl-0'>
            <input
              className='form-control my-0 py-1 amber-border'
              type='text'
              placeholder='Search'
              aria-label='Search'
            />
            <div className='input-group-append'>
              <span
                className='input-group-text amber lighten-3'
                id='basic-text1'
              >
                <lgBIcon icon='search' className='text-grey' />
              </span>
            </div>
          </div>
          <div className='input-group lg-form form-sm form-2 pl-0'>
            <input
              className='form-control my-0 py-1 lime-border'
              type='text'
              placeholder='Search'
              aria-label='Search'
            />
            <div className='input-group-append'>
              <span
                className='input-group-text lime lighten-2'
                id='basic-text1'
              >
                <lgBIcon icon='search' className='text-grey' />
              </span>
            </div>
          </div>
          <div className='input-group lg-form form-sm form-2 pl-0'>
            <input
              className='form-control my-0 py-1 red-border'
              type='text'
              placeholder='Search'
              aria-label='Search'
            />
            <div className='input-group-append'>
              <span className='input-group-text red lighten-3' id='basic-text1'>
                <lgBIcon icon='search' className='text-grey' />
              </span>
            </div>
          </div>
        </SectionContainer>

        <lgBModal
          isOpen={modalOpen}
          toggle={this.toggleModal}
          backdrop={false}
          size='sm'
          side
          position='top-right'
        >
          <lgBModalHeader toggle={this.toggleModal}>Modal title</lgBModalHeader>
          <lgBModalBody>
            <lgBInput
              value={searchValue}
              onChange={this.handleSearch}
              hint='Search for country'
              type='text'
              containerClass='mt-0'
            />
            <lgBListGroup>
              {filteredSet.map(item => (
                <lgBListGroupItem key={item}>{item}</lgBListGroupItem>
              ))}
            </lgBListGroup>
          </lgBModalBody>
          <lgBModalFooter>
            <lgBBtn color='secondary' onClick={this.toggleModal}>
              Close
            </lgBBtn>
          </lgBModalFooter>
        </lgBModal>
      </lgBContainer>
    );
  }
}

export default SearchPage;
