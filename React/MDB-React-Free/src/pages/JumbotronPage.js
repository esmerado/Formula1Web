import React from 'react';
import {
  lgBJumbotron,
  lgBBtn,
  lgBContainer,
  lgBRow,
  lgBCol,
  lgBCardTitle,
  lgBIcon,
  lgBNavLink,
  lgBNav,
  lgBCardImage,
  lgBCardBody,
  lgBCardText
} from 'lgbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

const JumbotronPage = () => {
  return (
    <>
      <lgBContainer className='mt-5'>
        <DocsLink
          title='Jumbotron'
          href='https://lgbootstrap.com/docs/react/components/jumbotron/'
        />
        <lgBRow>
          <lgBCol>
            <SectionContainer noBorder header='Basic example'>
              <lgBJumbotron className='text-center'>
                <h2 className='h1 display-3'>Hello, world!</h2>
                <p className='lead'>
                  This is a simple hero unit, a simple Jumbotron-style component
                  for calling extra attention to featured content or
                  information.
                </p>
                <hr className='my-2' />
                <p>
                  It uses utility classes for typgraphy and spacing to space
                  content out within the larger container.
                </p>
                <p className='lead'>
                  <lgBBtn color='primary'>Learn More</lgBBtn>
                </p>
              </lgBJumbotron>
            </SectionContainer>
          </lgBCol>
        </lgBRow>
      </lgBContainer>

      <hr />

      <h4 className='title mt-5 mb-4 container text-left'>Fluid jumbotron</h4>
      <lgBJumbotron fluid>
        <lgBContainer>
          <h2 className='display-4'>Fluid jumbotron</h2>
          <p className='lead'>
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </lgBContainer>
      </lgBJumbotron>

      <hr />

      <lgBContainer className='mt-5'>
        <lgBRow>
          <lgBCol>
            <SectionContainer
              noBorder
              header='Jumbotron with a background image'
            >
              <lgBJumbotron style={{ padding: 0 }}>
                <lgBCol
                  className='text-white text-center py-5 px-4'
                  style={{
                    backgroundImage:
                      'url(https://lgbootstrap.com/img/Photos/Others/gradient1.jpg)'
                  }}
                >
                  <lgBCol className='py-5'>
                    <lgBCardTitle className='h1-responsive pt-3 m-5 font-bold'>
                      Create your beautiful website with lgBootstrap
                    </lgBCardTitle>
                    <p className='mx-5 mb-5'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Repellat fugiat, laboriosam, voluptatem, optio vero odio
                      nam sit officia accusamus minus error nisi architecto
                      nulla ipsum dignissimos. Odit sed qui, dolorum!
                    </p>
                    <lgBBtn outline color='white' className='mb-5'>
                      <lgBIcon icon='clone' className='mr-2' /> View project
                    </lgBBtn>
                  </lgBCol>
                </lgBCol>
              </lgBJumbotron>
            </SectionContainer>
          </lgBCol>
        </lgBRow>

        <hr />

        <lgBRow className='mt-5'>
          <lgBCol>
            <SectionContainer noBorder header='Jumbotron with image'>
              <lgBJumbotron className='text-center'>
                <lgBCardTitle className='card-title h4 pb-2'>
                  <strong>My adventure</strong>
                </lgBCardTitle>
                <lgBCardImage
                  src='https://lgbootstrap.com/img/Photos/Slides/img%20(70).jpg'
                  className='img-fluid'
                />
                <lgBCardBody>
                  <lgBCardTitle className='indigo-text h5 m-4'>
                    Photography
                  </lgBCardTitle>
                  <lgBCardText>
                    Sed ut perspiciatis unde omnis iste natus sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam.
                  </lgBCardText>

                  <lgBNav className='justify-content-center'>
                    <lgBNavLink to='#!'>
                      <lgBIcon
                        fab
                        icon='linkedin-in'
                        className='grey-text'
                        size='lg'
                      />
                    </lgBNavLink>
                    <lgBNavLink to='#!'>
                      <lgBIcon
                        fab
                        icon='twitter'
                        className='grey-text'
                        size='lg'
                      />
                    </lgBNavLink>
                    <lgBNavLink to='#!'>
                      <lgBIcon
                        fab
                        icon='facebook-f'
                        className='grey-text'
                        size='lg'
                      />
                    </lgBNavLink>
                  </lgBNav>
                </lgBCardBody>
              </lgBJumbotron>
            </SectionContainer>
          </lgBCol>
        </lgBRow>

        <hr />

        <lgBRow className='mt-5'>
          <lgBCol>
            <SectionContainer noBorder header='Jumbotron with buttons'>
              <lgBJumbotron>
                <lgBCardBody>
                  <lgBCardTitle className='h2'>
                    Material Design for Bootstrap
                  </lgBCardTitle>
                  <p className='blue-text my-4 font-weight-bold'>
                    Powerful and free Material Design UI KIT
                  </p>
                  <lgBCardText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fuga aliquid dolorem ea distinctio exercitationem delectus
                    qui, quas eum architecto, amet quasi accusantium, fugit
                    consequatur ducimus obcaecati numquam molestias hic itaque
                    accusantium doloremque laudantium, totam rem aperiam.
                  </lgBCardText>
                  <hr className='my-4' />
                  <div className='pt-2'>
                    <lgBBtn color='primary' className='waves-effect'>
                      Buy now <lgBIcon far icon='gem' />
                    </lgBBtn>
                    <lgBBtn outline color='primary' className='waves-effect'>
                      Download <lgBIcon icon='download' />
                    </lgBBtn>
                  </div>
                </lgBCardBody>
              </lgBJumbotron>
            </SectionContainer>
          </lgBCol>
        </lgBRow>
      </lgBContainer>
    </>
  );
};

export default JumbotronPage;
