import React from 'react';
import { lgBIcon, lgBNavLink } from 'lgbreact';

const NavLink = ({ to, title }) => {
  return (
    <lgBNavLink className='list-group-item list-group-item-action' to={to} >
      <h5 style={{ margin: '0' }} className='justify-content-between d-flex align-items-center'>
        {title}
        <lgBIcon icon='angle-right' />
      </h5>
    </lgBNavLink>
  );
};

export default NavLink;
