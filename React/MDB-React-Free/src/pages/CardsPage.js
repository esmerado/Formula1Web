import React from 'react';
import {
  lgBBtn,
  lgBCard,
  lgBCardBody,
  lgBCardGroup,
  lgBCardImage,
  lgBCardText,
  lgBCardTitle,
  lgBCardVideo,
  lgBCol,
  lgBContainer,
  lgBRow
} from 'lgbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

const CardsPage = () => {
  return (
    <lgBContainer>
      <DocsLink
        title='Cards'
        href='https://lgbootstrap.com/docs/react/components/cards/'
      />

      <lgBRow>
        <lgBCol>
          <SectionContainer
            header='Basic example'
            className='justify-content-center d-flex'
          >
            <lgBCard style={{ width: '22rem' }}>
              <lgBCardImage
                className='img-fluid'
                src='https://lgbootstrap.com/img/Photos/Others/images/43.jpg'
                waves
              />
              <lgBCardBody>
                <lgBCardTitle>Card title</lgBCardTitle>
                <lgBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </lgBCardText>
                <lgBBtn href='#'>lgBBtn</lgBBtn>
              </lgBCardBody>
            </lgBCard>
          </SectionContainer>
        </lgBCol>
      </lgBRow>

      <lgBRow>
        <lgBCol>
          <SectionContainer
            header='Reversed card'
            className='justify-content-center d-flex'
          >
            <lgBCard reverse style={{ width: '22rem' }}>
              <lgBCardImage
                zoom
                cascade
                className='img-fluid'
                src='https://lgbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg'
                waves
              />
              <lgBCardBody cascade>
                <lgBCardTitle>lgBCard title</lgBCardTitle>
                <lgBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </lgBCardText>
                <lgBBtn href='#'>lgBBtn</lgBBtn>
              </lgBCardBody>
            </lgBCard>
          </SectionContainer>
        </lgBCol>
      </lgBRow>

      <SectionContainer header='Card decks v.1'>
        <lgBCardGroup deck className='mt-3'>
          <lgBCard>
            <lgBCardImage
              src='https://lgbootstrap.com/img/Photos/Others/images/16.jpg'
              alt='lgBCard image cap'
              top
              hover
              overlay='white-slight'
            />
            <lgBCardBody>
              <lgBCardTitle tag='h5'>Panel title</lgBCardTitle>
              <lgBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </lgBCardText>
              <lgBBtn color='light-blue' size='lg'>
                read more
              </lgBBtn>
            </lgBCardBody>
          </lgBCard>

          <lgBCard>
            <lgBCardImage
              src='https://lgbootstrap.com/img/Photos/Others/images/14.jpg'
              alt='lgBCard image cap'
              top
              hover
              overlay='white-slight'
            />
            <lgBCardBody>
              <lgBCardTitle tag='h5'>Panel title</lgBCardTitle>
              <lgBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </lgBCardText>
              <lgBBtn color='light-blue' size='lg'>
                read more
              </lgBBtn>
            </lgBCardBody>
          </lgBCard>

          <lgBCard>
            <lgBCardImage
              src='https://lgbootstrap.com/img/Photos/Others/images/15.jpg'
              alt='lgBCard image cap'
              top
              hover
              overlay='white-slight'
            />
            <lgBCardBody>
              <lgBCardTitle tag='h5'>Panel title</lgBCardTitle>
              <lgBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </lgBCardText>
              <lgBBtn color='light-blue' size='lg'>
                read more
              </lgBBtn>
            </lgBCardBody>
          </lgBCard>
        </lgBCardGroup>
      </SectionContainer>

      <SectionContainer header='Card decks v.2'>
        <lgBCardGroup>
          <lgBCard>
            <lgBCardImage
              src='https://lgbootstrap.com/img/Photos/Others/images/49.jpg'
              alt='lgBCard image cap'
              top
              hover
              overlay='white-slight'
            />
            <lgBCardBody>
              <lgBCardTitle tag='h5'>Panel title</lgBCardTitle>
              <lgBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </lgBCardText>
              <lgBBtn color='primary' size='lg'>
                read more
              </lgBBtn>
            </lgBCardBody>
          </lgBCard>

          <lgBCard>
            <lgBCardImage
              src='https://lgbootstrap.com/img/Photos/Others/images/48.jpg'
              alt='lgBCard image cap'
              top
              hover
              overlay='white-slight'
            />
            <lgBCardBody>
              <lgBCardTitle tag='h5'>Panel title</lgBCardTitle>
              <lgBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </lgBCardText>
              <lgBBtn color='primary' size='lg'>
                read more
              </lgBBtn>
            </lgBCardBody>
          </lgBCard>

          <lgBCard>
            <lgBCardImage
              src='https://lgbootstrap.com/img/Photos/Others/images/77.jpg'
              alt='lgBCard image cap'
              top
              hover
              overlay='white-slight'
            />
            <lgBCardBody>
              <lgBCardTitle tag='h5'>Panel title</lgBCardTitle>
              <lgBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </lgBCardText>
              <lgBBtn color='primary' size='lg'>
                read more
              </lgBBtn>
            </lgBCardBody>
          </lgBCard>
        </lgBCardGroup>
      </SectionContainer>

      <SectionContainer header='Card video with different ratio'>
        <lgBCardGroup>
          <lgBCard>
            <lgBCardVideo
              src='https://www.youtube.com/embed/uMQ63tI_h2Y'
              ratio='1by1'
            />
            <lgBCardBody>
              <lgBCardTitle tag='h5'>1:1 Aspect ratio</lgBCardTitle>
              <lgBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </lgBCardText>
              <lgBBtn color='primary' size='lg'>
                read more
              </lgBBtn>
            </lgBCardBody>
          </lgBCard>

          <lgBCard>
            <lgBCardVideo
              src='https://www.youtube.com/embed/980CZbPAtQU'
              ratio='4by3'
            />
            <lgBCardBody>
              <lgBCardTitle tag='h5'>4:3 Aspect ratio</lgBCardTitle>
              <lgBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </lgBCardText>
              <lgBBtn color='primary' size='lg'>
                read more
              </lgBBtn>
            </lgBCardBody>
          </lgBCard>

          <lgBCard>
            <lgBCardVideo
              src='https://player.vimeo.com/video/137857207'
              ratio='16by9'
            />
            <lgBCardBody>
              <lgBCardTitle tag='h5'>16:9 Aspect ratio</lgBCardTitle>
              <lgBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </lgBCardText>
              <lgBBtn color='primary' size='lg'>
                read more
              </lgBBtn>
            </lgBCardBody>
          </lgBCard>
        </lgBCardGroup>
      </SectionContainer>
    </lgBContainer>
  );
};

export default CardsPage;
