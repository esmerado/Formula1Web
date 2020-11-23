import React from 'react';
import { lgBCarousel, lgBCarouselInner, lgBCarouselItem, lgBContainer } from 'lgbreact';
import DocsLink from '../components/docsLink';

const CarouselPage = () => {
  return (
    <lgBContainer>
      <DocsLink
        title='Video Carousel'
        href='https://lgbootstrap.com/docs/react/advanced/carousel/#video'
      />
      <div className='container mt-4'>
        <div className='row'>
          <div className='col-lg-12'>
            <lgBCarousel
              activeItem={1}
              length={3}
              showControls
              showIndicators
              className='z-depth-1'
            >
              <lgBCarouselInner>
                <lgBCarouselItem itemId='1'>
                  <video className='video-fluid d-block' autoPlay loop>
                    <source
                      src='https://lgbootstrap.com/img/video/Tropical.mp4'
                      type='video/mp4'
                    />
                  </video>
                </lgBCarouselItem>
                <lgBCarouselItem itemId='2'>
                  <video className='video-fluid d-block' autoPlay loop>
                    <source
                      src='https://lgbootstrap.com/img/video/forest.mp4'
                      type='video/mp4'
                    />
                  </video>
                </lgBCarouselItem>
                <lgBCarouselItem itemId='3'>
                  <video className='video-fluid d-block' autoPlay loop>
                    <source
                      src='https://lgbootstrap.com/img/video/Agua-natural.mp4'
                      type='video/mp4'
                    />
                  </video>
                </lgBCarouselItem>
              </lgBCarouselInner>
            </lgBCarousel>
          </div>
        </div>
      </div>
    </lgBContainer>
  );
}

export default CarouselPage;
