import React from 'react';
import {
  lgBContainer,
  lgBInputGroup,
  lgBBtn,
  lgBDropdown,
  lgBDropdownMenu,
  lgBDropdownItem,
  lgBDropdownToggle,
  lgBIcon,
  lgBCol,
  lgBInput,
  lgBRow
} from 'lgbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

class InputGroupPage extends React.Component {
  componentDidMount() {
    this.Styles();
  }

  Styles = () => {
    const style = document.createElement('style');
    style.innerHTML = `
      .inpGroup .dropdown .dropdown-menu .dropdown-item:hover{
        background-color: #f8f9fa ;
        color: #16181b !important;
        box-shadow: 0 0 0 rgba(0,0,0,0) ;
      }


      .custom-input-group.input-group input {
        border: 1px solid #bdbdbd;
      }
      .custom-input-group.input-group input[type=text]:focus:not([readonly]).lime-border  {
        border: 1px solid #cddc39;
        box-shadow: none;
      }
      .custom-input-group.input-group input {
        border: 1px solid #bdbdbd;
        border-top-right-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
      }
      .custom-input-group.input-group input[type=text]:focus:not([readonly]).red-border  {
        border: 1px solid #ef9a9a;
        box-shadow: none;
      }
      .custom-input-group.input-group input[type=text]:focus:not([readonly]).amber-border  {
        border: 1px solid #ffca28;
        box-shadow: none;
      }
      .custom-input-group.input-group input[type=text]:focus:not([readonly]).blue-border  {
        border: 1px solid #64b5f6;
        box-shadow: none;
      }
      .custom-input-group.input-group input {
        border: 1px solid #bdbdbd;
        border-top-left-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
      }
      .custom-input-group.input-group input[type=text]:focus:not([readonly]).purple-border  {
        border: 1px solid #ce93d8;
        box-shadow: none;
      }
      
      `;
    const firstScriptTag = document.querySelector('script');
    firstScriptTag.parentNode.insertBefore(style, firstScriptTag);
  };

  render() {
    return (
      <lgBContainer className='inpGroup mb-5'>
        <DocsLink
          header='Inputs Group'
          href='https://lgbootstrap.com/docs/react/forms/input-group/'
        />
        <SectionContainer noBorder>
          <lgBRow>
            <lgBCol lg='6'>
              <SectionContainer
                header='Default input groups'
                description='Default styling for Bootstrap Input Group component'
              >
                <lgBInputGroup
                  containerClassName='mb-3'
                  prepend='@'
                  hint='Username'
                />
                <lgBInputGroup
                  containerClassName='mb-3'
                  append='@example.com'
                  hint="Recipient's username"
                />
                <lgBInputGroup
                  label='Your vanity URL'
                  containerClassName='mb-3'
                  prepend='https://example.com/users/'
                  id='basic-url'
                />
                <lgBInputGroup
                  containerClassName='mb-3'
                  prepend='$'
                  append='.00'
                />
                <lgBInputGroup prepend='With textarea' type='textarea' />
              </SectionContainer>
            </lgBCol>
            <lgBCol lg='6'>
              <SectionContainer
                header='Material input groups'
                description='Material Design styling for Bootstrap Input Group component'
              >
                <lgBInputGroup
                  material
                  containerClassName='mb-3 mt-0'
                  prepend='@'
                  hint='Username'
                />
                <lgBInputGroup
                  material
                  hint="Recipient's username"
                  containerClassName='mb-3 mt-0'
                  append='@example.com'
                />
                <lgBInputGroup
                  material
                  label='Your vanity URL'
                  labelClassName='mb-0 ml-2'
                  containerClassName='mb-3 mt-0'
                  prepend='https://example.com/users/'
                  id='basic-url-material'
                />
                <lgBInputGroup
                  material
                  containerClassName='mb-3'
                  prepend='$'
                  append='.00'
                />
                <lgBInputGroup
                  material
                  className='mb-0'
                  prepend='With textarea'
                  type='textarea'
                />
              </SectionContainer>
            </lgBCol>
          </lgBRow>
        </SectionContainer>

        <SectionContainer
          header='Wrapping'
          description='Input groups wrap by default via flex-wrap: wrap in order to accommodate custom form field validation within an input group. You may disable this with containerClassName="flex-nowrap".'
        >
          <lgBInputGroup
            containerClassName='flex-nowrap mb-3'
            prepend='@'
            hint='Username'
          />
        </SectionContainer>

        <SectionContainer header='Sizing' noBottom noBorder>
          <lgBRow>
            <lgBCol lg='6'>
              <SectionContainer>
                <lgBInputGroup
                  containerClassName='mb-3'
                  prepend='Small'
                  size='sm'
                />
                <lgBInputGroup containerClassName='mb-3' prepend='Default' />
                <lgBInputGroup
                  containerClassName='mb-3'
                  prepend='Large'
                  size='lg'
                />
              </SectionContainer>
            </lgBCol>

            <lgBCol lg='6'>
              <SectionContainer>
                <lgBInputGroup
                  material
                  containerClassName='mb-2 mt-0'
                  prepend='Small'
                  size='sm'
                />
                <lgBInputGroup
                  material
                  containerClassName='mb-2 mt-0'
                  prepend='Default'
                />
                <lgBInputGroup
                  material
                  containerClassName='mb-2 mt-0'
                  prepend='Large'
                  size='lg'
                />
              </SectionContainer>
            </lgBCol>
          </lgBRow>
        </SectionContainer>

        <SectionContainer header='Multiple inputs' noBottom noBorder>
          <lgBRow>
            <lgBCol lg='6'>
              <SectionContainer>
                <lgBInputGroup
                  prepend='First and last name'
                  inputs={
                    <>
                      <lgBInput noTag type='text' />
                      <lgBInput noTag type='text' />
                    </>
                  }
                />
              </SectionContainer>
            </lgBCol>

            <lgBCol lg='6'>
              <SectionContainer>
                <lgBInputGroup
                  material
                  containerClassName='m-0'
                  prepend='First and last name'
                  inputs={
                    <>
                      <lgBInput noTag type='text' hint='Type sth' />
                      <lgBInput noTag type='text' hint='Type sth' />
                    </>
                  }
                />
              </SectionContainer>
            </lgBCol>
          </lgBRow>
        </SectionContainer>

        <SectionContainer header='Multiple addons' noBottom noBorder>
          <lgBRow>
            <lgBCol lg='6'>
              <SectionContainer>
                <lgBInputGroup
                  containerClassName='mb-3'
                  prepend={
                    <>
                      <span className='input-group-text'>$</span>
                      <span className='input-group-text'>0.00</span>
                    </>
                  }
                />
                <lgBInputGroup
                  append={
                    <>
                      <span className='input-group-text'>$</span>
                      <span className='input-group-text'>0.00</span>
                    </>
                  }
                />
              </SectionContainer>
            </lgBCol>

            <lgBCol lg='6'>
              <SectionContainer>
                <lgBInputGroup
                  containerClassName='mt-0 mb-3'
                  material
                  prepend={
                    <>
                      <span className='input-group-text lg-addon'>$</span>
                      <span className='input-group-text lg-addon'>0.00</span>
                    </>
                  }
                />
                <lgBInputGroup
                  containerClassName='my-0'
                  material
                  append={
                    <>
                      <span className='input-group-text lg-addon'>$</span>
                      <span className='input-group-text lg-addon'>0.00</span>
                    </>
                  }
                />
              </SectionContainer>
            </lgBCol>
          </lgBRow>
        </SectionContainer>

        <SectionContainer header='Button addons' noBottom noBorder>
          <lgBRow>
            <lgBCol lg='6'>
              <SectionContainer>
                <lgBInputGroup
                  containerClassName='mb-3'
                  prepend={
                    <lgBBtn
                      color='primary'
                      outline
                      size='lg'
                      className='m-0 px-3 py-2 z-depth-0'
                    >
                      BUTTON
                    </lgBBtn>
                  }
                />

                <lgBInputGroup
                  hint="Recipient's username"
                  containerClassName='mb-3'
                  append={
                    <lgBBtn
                      outline
                      size='lg'
                      className='m-0 px-3 py-2 z-depth-0'
                    >
                      BUTTON
                    </lgBBtn>
                  }
                />

                <lgBInputGroup
                  containerClassName='mb-3'
                  prepend={
                    <>
                      <lgBBtn
                        color='secondary'
                        outline
                        size='lg'
                        className='m-0 px-3 py-2 z-depth-0'
                      >
                        BUTTON
                      </lgBBtn>
                      <lgBBtn
                        color='secondary'
                        outline
                        size='lg'
                        className='m-0 px-3 py-2 z-depth-0'
                      >
                        BUTTON
                      </lgBBtn>
                    </>
                  }
                />

                <lgBInputGroup
                  hint="Recipient's username"
                  containerClassName='mb-3'
                  append={
                    <>
                      <lgBBtn
                        color='info'
                        outline
                        size='lg'
                        className='m-0 px-3 py-2 z-depth-0'
                      >
                        BUTTON
                      </lgBBtn>
                      <lgBBtn
                        color='info'
                        outline
                        size='lg'
                        className='m-0 px-3 py-2 z-depth-0'
                      >
                        BUTTON
                      </lgBBtn>
                    </>
                  }
                />
              </SectionContainer>
            </lgBCol>

            <lgBCol lg='6'>
              <SectionContainer>
                <lgBInputGroup
                  material
                  containerClassName='mb-3 mt-0'
                  prepend={
                    <lgBBtn size='lg' className='m-0 px-3 py-2 z-depth-0'>
                      BUTTON
                    </lgBBtn>
                  }
                />

                <lgBInputGroup
                  material
                  containerClassName='mb-3 mt-0'
                  hint="Recipient's username"
                  append={
                    <lgBBtn
                      color='secondary'
                      size='lg'
                      className='m-0 px-3 py-2 z-depth-0'
                    >
                      BUTTON
                    </lgBBtn>
                  }
                />

                <lgBInputGroup
                  material
                  containerClassName='mb-3 mt-0'
                  prepend={
                    <>
                      <lgBBtn
                        color='info'
                        size='lg'
                        className='m-0 px-3 py-2 z-depth-1'
                      >
                        BUTTON
                      </lgBBtn>
                      <lgBBtn
                        color='info'
                        size='lg'
                        className='m-0 px-3 py-2 z-depth-1'
                      >
                        BUTTON
                      </lgBBtn>
                    </>
                  }
                />

                <lgBInputGroup
                  material
                  hint="Recipient's username"
                  containerClassName='mb-4 mt-0'
                  append={
                    <>
                      <lgBBtn
                        color='primary'
                        size='lg'
                        className='m-0 px-3 py-2 z-depth-1'
                      >
                        BUTTON
                      </lgBBtn>
                      <lgBBtn
                        color='primary'
                        size='lg'
                        className='m-0 px-3 py-2 z-depth-1'
                      >
                        BUTTON
                      </lgBBtn>
                    </>
                  }
                />
              </SectionContainer>
            </lgBCol>
          </lgBRow>
        </SectionContainer>

        <SectionContainer header='Buttons with dropdowns'>
          <lgBInputGroup
            containerClassName='mb-3'
            prepend={
              <lgBDropdown>
                <lgBDropdownToggle
                  color='primary'
                  size='lg'
                  className='m-0 px-3 z-depth-0'
                >
                  Dropdown <lgBIcon icon='caret-down' className='ml-1' />
                </lgBDropdownToggle>
                <lgBDropdownMenu color='white'>
                  <lgBDropdownItem>Action</lgBDropdownItem>
                  <lgBDropdownItem>Another Action</lgBDropdownItem>
                  <lgBDropdownItem>Something else here</lgBDropdownItem>
                  <lgBDropdownItem divider />
                  <lgBDropdownItem>Separated link</lgBDropdownItem>
                </lgBDropdownMenu>
              </lgBDropdown>
            }
          />

          <lgBInputGroup
            containerClassName='mb-3'
            append={
              <lgBDropdown>
                <lgBDropdownToggle
                  color='default'
                  size='lg'
                  className='m-0 px-3 z-depth-0'
                >
                  Dropdown <lgBIcon icon='caret-down' className='ml-1' />
                </lgBDropdownToggle>
                <lgBDropdownMenu>
                  <lgBDropdownItem>Action</lgBDropdownItem>
                  <lgBDropdownItem>Another Action</lgBDropdownItem>
                  <lgBDropdownItem>Something else here</lgBDropdownItem>
                  <lgBDropdownItem divider />
                  <lgBDropdownItem>Separated link</lgBDropdownItem>
                </lgBDropdownMenu>
              </lgBDropdown>
            }
          />
        </SectionContainer>

        <SectionContainer header='Segmented buttons'>
          <lgBInputGroup
            containerClassName='mb-3'
            prepend={
              <>
                <lgBBtn
                  outline
                  color='primary'
                  size='lg'
                  className='m-0 px-3 py-2 z-depth-0 rounded-0'
                >
                  ACTION
                </lgBBtn>
                <lgBDropdown>
                  <lgBDropdownToggle
                    outline
                    color='primary'
                    size='lg'
                    className='m-0 px-2 z-depth-0 rounded-0'
                  >
                    <lgBIcon icon='caret-down' />
                  </lgBDropdownToggle>
                  <lgBDropdownMenu>
                    <lgBDropdownItem>Action</lgBDropdownItem>
                    <lgBDropdownItem>Another Action</lgBDropdownItem>
                    <lgBDropdownItem>Something else here</lgBDropdownItem>
                    <lgBDropdownItem divider />
                    <lgBDropdownItem>Separated link</lgBDropdownItem>
                  </lgBDropdownMenu>
                </lgBDropdown>
              </>
            }
          />

          <lgBInputGroup
            containerClassName='mb-3'
            append={
              <>
                <lgBBtn
                  outline
                  color='info'
                  size='lg'
                  className='m-0 px-3 py-2 z-depth-0 rounded-0'
                >
                  ACTION
                </lgBBtn>
                <lgBDropdown>
                  <lgBDropdownToggle
                    outline
                    color='info'
                    size='lg'
                    className='m-0 px-2 z-depth-0 rounded-0'
                  >
                    <lgBIcon icon='caret-down' />
                  </lgBDropdownToggle>
                  <lgBDropdownMenu>
                    <lgBDropdownItem>Action</lgBDropdownItem>
                    <lgBDropdownItem>Another Action</lgBDropdownItem>
                    <lgBDropdownItem>Something else here</lgBDropdownItem>
                    <lgBDropdownItem divider />
                    <lgBDropdownItem>Separated link</lgBDropdownItem>
                  </lgBDropdownMenu>
                </lgBDropdown>
              </>
            }
          />
        </SectionContainer>

        <SectionContainer header='Custom select'>
          <lgBInputGroup
            containerClassName='mb-3'
            prepend='Options'
            inputs={
              <select className='browser-default custom-select'>
                <option value='0'>Choose...</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </select>
            }
          />

          <lgBInputGroup
            containerClassName='mb-3'
            append='Options'
            inputs={
              <select className='browser-default custom-select'>
                <option value='0'>Choose...</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </select>
            }
          />

          <lgBInputGroup
            containerClassName='mb-3'
            prepend={
              <lgBBtn
                color='lgb-color'
                outline
                size='lg'
                className='m-0 px-3 py-2 z-depth-0'
              >
                BUTTON
              </lgBBtn>
            }
            inputs={
              <select className='browser-default custom-select'>
                <option value='0'>Choose...</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </select>
            }
          />

          <lgBInputGroup
            containerClassName='mb-3'
            append={
              <lgBBtn
                color='lgb-color'
                outline
                size='lg'
                className='m-0 px-3 py-2 z-depth-0'
              >
                BUTTON
              </lgBBtn>
            }
            inputs={
              <select className='browser-default custom-select'>
                <option value='0'>Choose...</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </select>
            }
          />
        </SectionContainer>

        <SectionContainer header='Custom file input'>
          <lgBInputGroup
            prepend='Upload'
            inputs={
              <div className='custom-file'>
                <input
                  type='file'
                  className='custom-file-input'
                  id='inputGroupFile01'
                />
                <label className='custom-file-label' htmlFor='inputGroupFile01'>
                  Choose file
                </label>
              </div>
            }
            containerClassName='mb-3'
          />

          <lgBInputGroup
            append='Upload'
            inputs={
              <div className='custom-file'>
                <input
                  type='file'
                  className='custom-file-input'
                  id='inputGroupFile01'
                />
                <label className='custom-file-label' htmlFor='inputGroupFile01'>
                  Choose file
                </label>
              </div>
            }
            containerClassName='mb-3'
          />

          <lgBInputGroup
            prepend={
              <lgBBtn
                color='lgb-color'
                outline
                size='lg'
                className='m-0 px-3 py-2 z-depth-0'
              >
                BUTTON
              </lgBBtn>
            }
            inputs={
              <div className='custom-file'>
                <input
                  type='file'
                  className='custom-file-input'
                  id='inputGroupFile01'
                />
                <label className='custom-file-label' htmlFor='inputGroupFile01'>
                  Choose file
                </label>
              </div>
            }
            containerClassName='mb-3'
          />

          <lgBInputGroup
            append={
              <lgBBtn
                color='lgb-color'
                outline
                size='lg'
                className='m-0 px-3 py-2 z-depth-0'
              >
                BUTTON
              </lgBBtn>
            }
            inputs={
              <div className='custom-file'>
                <input
                  type='file'
                  className='custom-file-input'
                  id='inputGroupFile01'
                />
                <label className='custom-file-label' htmlFor='inputGroupFile01'>
                  Choose file
                </label>
              </div>
            }
            containerClassName='mb-3'
          />
        </SectionContainer>

        <SectionContainer
          title='Examples & customizations'
          header='Colorful input groups'
          description='Default styling for Bootstrap Input Group component'
        >
          <lgBInputGroup
            containerClassName='custom-input-group mb-3'
            prepend='@'
            textClassName='amber lighten-3'
            className='amber-border'
            hint='Username'
          />
          <lgBInputGroup
            containerClassName='custom-input-group mb-3'
            prepend='$'
            append='.00'
            textClassName='lime lighten-2'
            className='lime-border'
          />
          <lgBInputGroup
            containerClassName='custom-input-group mb-3'
            prepend={
              <>
                <span className='input-group-text red lighten-3'>$</span>
                <span className='input-group-text red lighten-3'>0.00</span>
              </>
            }
            className='red-border'
          />
          <lgBInputGroup
            containerClassName='custom-input-group mb-3'
            append='@example.com'
            textClassName='purple lighten-3'
            hint="Recipient's Username"
            className='purple-border'
          />
          <lgBInputGroup
            label='Your vanity URL'
            containerClassName='custom-input-group mb-3'
            prepend='https://example.com/users/'
            textClassName='blue lighten-3'
            id='basic-url2'
            className='blue-border'
          />
        </SectionContainer>
      </lgBContainer>
    );
  }
}

export default InputGroupPage;
