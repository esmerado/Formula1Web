import React from 'react';
import {
  lgBCarousel,
  lgBCarouselCaption,
  lgBCarouselInner,
  lgBCarouselItem,
  lgBView,
  lgBMask,
  lgBContainer
} from 'lgbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

const CarouselPage = () => {
  return (
    <lgBContainer className='pb-5'>
      <DocsLink
        title='Carousel'
        href='https://lgbootstrap.com/docs/react/advanced/carousel/'
      />

      <SectionContainer header='Slides Only'>
        <lgBCarousel
          activeItem={1}
          length={3}
          showControls={false}
          showIndicators={false}
          className='z-depth-1'
          slide
        >
          <lgBCarouselInner>
            <lgBCarouselItem itemId='1'>
              <lgBView>
                <img
                  className='d-block w-100'
                  src='https://lgbootstrap.com/img/Photos/Slides/img%20(35).jpg'
                  alt='First slide'
                />
              </lgBView>
            </lgBCarouselItem>
            <lgBCarouselItem itemId='2'>
              <lgBView>
                <img
                  className='d-block w-100'
                  src='https://lgbootstrap.com/img/Photos/Slides/img%20(33).jpg'
                  alt='Second slide'
                />
              </lgBView>
            </lgBCarouselItem>
            <lgBCarouselItem itemId='3'>
              <lgBView>
                <img
                  className='d-block w-100'
                  src='https://lgbootstrap.com/img/Photos/Slides/img%20(31).jpg'
                  alt='Third slide'
                />
              </lgBView>
            </lgBCarouselItem>
          </lgBCarouselInner>
        </lgBCarousel>
      </SectionContainer>

      <SectionContainer header='With Captions'>
        <lgBCarousel
          activeItem={1}
          length={4}
          showControls
          showIndicators
          className='z-depth-1'
          slide
        >
          <lgBCarouselInner>
            <lgBCarouselItem itemId='1'>
              <lgBView>
                <img
                  className='d-block w-100'
                  src='https://lgbootstrap.com/img/Photos/Slides/img%20(68).jpg'
                  alt='First slide'
                />
                <lgBMask overlay='black-light' />
              </lgBView>
              <lgBCarouselCaption>
                <h3 className='h3-responsive'>Light mask</h3>
                <p>First text</p>
              </lgBCarouselCaption>
            </lgBCarouselItem>
            <lgBCarouselItem itemId='2'>
              <lgBView>
                <img
                  className='d-block w-100'
                  src='https://lgbootstrap.com/img/Photos/Slides/img%20(99).jpg'
                  alt='Second slide'
                />
                <lgBMask overlay='black-strong' />
              </lgBView>
              <lgBCarouselCaption>
                <h3 className='h3-responsive'>Strong mask</h3>
                <p>Second text</p>
              </lgBCarouselCaption>
            </lgBCarouselItem>
            <lgBCarouselItem itemId='3'>
              <lgBView>
                <img
                  className='d-block w-100'
                  src='https://lgbootstrap.com/img/Photos/Slides/img%20(17).jpg'
                  alt='Third slide'
                />
                <lgBMask overlay='black-slight' />
              </lgBView>
              <lgBCarouselCaption>
                <h3 className='h3-responsive'>Slight mask</h3>
                <p>Third text</p>
              </lgBCarouselCaption>
            </lgBCarouselItem>
            <lgBCarouselItem itemId='4'>
              <lgBView>
                <img
                  className='d-block w-100'
                  src='https://lgbootstrap.com/img/Photos/Slides/img%20%28143%29.jpg'
                  alt="Mattonit's item"
                />
                <lgBMask overlay='black-light' />
              </lgBView>
              <lgBCarouselCaption>
                <h3 className='h3-responsive'>Sopot Beach</h3>
                <p>Taken june 21th by @mattonit</p>
              </lgBCarouselCaption>
            </lgBCarouselItem>
          </lgBCarouselInner>
        </lgBCarousel>
      </SectionContainer>

      <SectionContainer header='Fade effect'>
        <lgBCarousel
          activeItem={1}
          length={3}
          showControls
          className='z-depth-1'
        >
          <lgBCarouselInner>
            <lgBCarouselItem itemId='1'>
              <lgBView>
                <img
                  className='d-block w-100'
                  src='https://lgbootstrap.com/img/Photos/Slides/img%20(92).jpg'
                  alt='First slide'
                />
              </lgBView>
            </lgBCarouselItem>
            <lgBCarouselItem itemId='2'>
              <lgBView>
                <img
                  className='d-block w-100'
                  src='https://lgbootstrap.com/img/Photos/Slides/img%20(90).jpg'
                  alt='Second slide'
                />
              </lgBView>
            </lgBCarouselItem>
            <lgBCarouselItem itemId='3'>
              <lgBView>
                <img
                  className='d-block w-100'
                  src='https://lgbootstrap.com/img/Photos/Slides/img%20(91).jpg'
                  alt='Third slide'
                />
              </lgBView>
            </lgBCarouselItem>
          </lgBCarouselInner>
        </lgBCarousel>
      </SectionContainer>

      <SectionContainer header='With Controls'>
        <lgBCarousel
          activeItem={1}
          length={3}
          showControls
          showIndicators={false}
          className='z-depth-1'
        >
          <lgBCarouselInner>
            <lgBCarouselItem itemId='1'>
              <lgBView>
                <img
                  className='d-block w-100'
                  src='https://lgbootstrap.com/img/Photos/Slides/img%20(45).jpg'
                  alt='First slide'
                />
              </lgBView>
            </lgBCarouselItem>
            <lgBCarouselItem itemId='2'>
              <lgBView>
                <img
                  className='d-block w-100'
                  src='https://lgbootstrap.com/img/Photos/Slides/img%20(46).jpg'
                  alt='Second slide'
                />
              </lgBView>
            </lgBCarouselItem>
            <lgBCarouselItem itemId='3'>
              <lgBView>
                <img
                  className='d-block w-100'
                  src='https://lgbootstrap.com/img/Photos/Slides/img%20(47).jpg'
                  alt='Third slide'
                />
              </lgBView>
            </lgBCarouselItem>
          </lgBCarouselInner>
        </lgBCarousel>
      </SectionContainer>

      <SectionContainer header='With Indicators'>
        <lgBCarousel
          activeItem={1}
          length={3}
          showControls
          showIndicators
          className='z-depth-1'
        >
          <lgBCarouselInner>
            <lgBCarouselItem itemId='1'>
              <lgBView>
                <img
                  className='d-block w-100'
                  src='https://lgbootstrap.com/img/Photos/Slides/img%20(130).jpg'
                  alt='First slide'
                />
              </lgBView>
            </lgBCarouselItem>
            <lgBCarouselItem itemId='2'>
              <lgBView>
                <img
                  className='d-block w-100'
                  src='https://lgbootstrap.com/img/Photos/Slides/img%20(129).jpg'
                  alt='Second slide'
                />
              </lgBView>
            </lgBCarouselItem>
            <lgBCarouselItem itemId='3'>
              <lgBView>
                <img
                  className='d-block w-100'
                  src='https://lgbootstrap.com/img/Photos/Slides/img%20(70).jpg'
                  alt='Third slide'
                />
              </lgBView>
            </lgBCarouselItem>
          </lgBCarouselInner>
        </lgBCarousel>
      </SectionContainer>

      <SectionContainer header='Stop when mouse is on the carousel'>
        <lgBCarousel
          interval={1500}
          activeItem={1}
          length={3}
          showControls
          showIndicators
          className='z-depth-1'
        >
          <lgBCarouselInner>
            <lgBCarouselItem itemId='1'>
              <lgBView>
                <img
                  className='d-block w-100'
                  src='https://lgbootstrap.com/img/Photos/Slides/img%20(131).jpg'
                  alt='First slide'
                />
              </lgBView>
            </lgBCarouselItem>
            <lgBCarouselItem itemId='2'>
              <lgBView>
                <img
                  className='d-block w-100'
                  src='https://lgbootstrap.com/img/Photos/Slides/img%20(132).jpg'
                  alt='Second slide'
                />
              </lgBView>
            </lgBCarouselItem>
            <lgBCarouselItem itemId='3'>
              <lgBView>
                <img
                  className='d-block w-100'
                  src='https://lgbootstrap.com/img/Photos/Slides/img%20(133).jpg'
                  alt='Third slide'
                />
              </lgBView>
            </lgBCarouselItem>
          </lgBCarouselInner>
        </lgBCarousel>
      </SectionContainer>
    </lgBContainer>
  );
};

export default CarouselPage;
