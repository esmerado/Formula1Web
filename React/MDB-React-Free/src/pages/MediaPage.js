import React from 'react';
import { lgBMedia, lgBContainer } from 'lgbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

const MediaPage = () => {
  return (
    <lgBContainer>
      <DocsLink
        title='Media Object'
        href='https://lgbootstrap.com/docs/react/layout/media-object/'
      />

      <SectionContainer>
        <lgBMedia>
          <lgBMedia left href='#'>
            <lgBMedia
              object
              src='https://placehold.it/64x64'
              alt='Generic placeholder image'
            />
          </lgBMedia>
          <lgBMedia body>
            <lgBMedia heading>lgBMedia heading</lgBMedia>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </lgBMedia>
        </lgBMedia>
      </SectionContainer>

      <SectionContainer>
        <lgBMedia style={{ maxWidth: '800px' }} className='mt-3'>
          <lgBMedia left top href='#'>
            <lgBMedia
              object
              src='https://placehold.it/64x64'
              alt='Generic placeholder image'
            />
          </lgBMedia>
          <lgBMedia body>
            <lgBMedia heading>Top aligned media</lgBMedia>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </lgBMedia>
        </lgBMedia>
      </SectionContainer>

      <SectionContainer>
        <lgBMedia className='mt-1' style={{ maxWidth: '800px' }}>
          <lgBMedia left middle href='#'>
            <lgBMedia
              object
              src='http://via.placeholder.com/64x64'
              alt='Generic placeholder image'
            />
          </lgBMedia>
          <lgBMedia body>
            <lgBMedia heading>Middle aligned media</lgBMedia>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </lgBMedia>
        </lgBMedia>
      </SectionContainer>

      <SectionContainer>
        <lgBMedia className='mt-1' style={{ maxWidth: '800px' }}>
          <lgBMedia left bottom href='#'>
            <lgBMedia
              object
              src='http://via.placeholder.com/64x64'
              alt='Generic placeholder image'
            />
          </lgBMedia>
          <lgBMedia body>
            <lgBMedia heading>Bottom aligned media</lgBMedia>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </lgBMedia>
        </lgBMedia>
      </SectionContainer>

      <SectionContainer>
        <lgBMedia list className='mt-3'>
          <lgBMedia tag='li'>
            <lgBMedia left href='#'>
              <lgBMedia
                object
                src='http://via.placeholder.com/64x64'
                alt='Generic placeholder image'
              />
            </lgBMedia>
            <lgBMedia body>
              <lgBMedia heading>lgBMedia heading</lgBMedia>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
              in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              <lgBMedia>
                <lgBMedia left href='#'>
                  <lgBMedia
                    object
                    src='http://via.placeholder.com/64x64'
                    alt='Generic placeholder image'
                  />
                </lgBMedia>
                <lgBMedia body>
                  <lgBMedia heading>Nested media heading</lgBMedia>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin commodo. Cras purus odio,
                  vestibulum in vulputate at, tempus viverra turpis. Fusce
                  condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                  congue felis in faucibus.
                  <lgBMedia>
                    <lgBMedia left href='#'>
                      <lgBMedia
                        object
                        src='http://via.placeholder.com/64x64'
                        alt='Generic placeholder image'
                      />
                    </lgBMedia>
                    <lgBMedia body>
                      <lgBMedia heading>Nested media heading</lgBMedia>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin commodo. Cras purus
                      odio, vestibulum in vulputate at, tempus viverra turpis.
                      Fusce condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </lgBMedia>
                  </lgBMedia>
                </lgBMedia>
              </lgBMedia>
              <lgBMedia>
                <lgBMedia left href='#'>
                  <lgBMedia
                    object
                    src='http://via.placeholder.com/64x64'
                    alt='Generic placeholder image'
                  />
                </lgBMedia>
                <lgBMedia body>
                  <lgBMedia heading>Nested media heading</lgBMedia>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin commodo. Cras purus odio,
                  vestibulum in vulputate at, tempus viverra turpis. Fusce
                  condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                  congue felis in faucibus.
                </lgBMedia>
              </lgBMedia>
            </lgBMedia>
          </lgBMedia>
        </lgBMedia>
      </SectionContainer>

      <SectionContainer>
        <lgBMedia tag='li' className='mt-3'>
          <lgBMedia body>
            <lgBMedia heading>lgBMedia heading right</lgBMedia>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </lgBMedia>
          <lgBMedia right href='#'>
            <lgBMedia
              object
              src='http://via.placeholder.com/64x64'
              alt='Generic placeholder image'
            />
          </lgBMedia>
        </lgBMedia>
      </SectionContainer>
    </lgBContainer>
  );
};

export default MediaPage;
