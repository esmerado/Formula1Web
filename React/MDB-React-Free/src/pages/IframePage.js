import React from 'react';
import { lgBContainer, lgBIframe } from 'lgbreact';
import DocsLink from '../components/docsLink';

const IframePage = () => {
  return (
    <lgBContainer className='text-center'>
      <DocsLink
        title='Iframe'
        href='https://lgbootstrap.com/plugins/react/iframe/'
      />
      <lgBIframe src='https://www.youtube.com/embed/v64KOxKVLVg' />
    </lgBContainer>
  );
};

export default IframePage;
