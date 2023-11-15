import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar'; // Assuming Sidebar is the correct component path
import './index.scss';

const Layout = () => {
  return (
    <div className='page'>
      <Sidebar />
      <span className='tags top-tags'>&lt;body&gt;</span>
      <Outlet />
      <span className='tags bottom-tags'>
        &lt;/body&gt;
        <br />
        <span className='bottom-tag-html'>&lt;/html&gt;</span>
      </span>
    </div>
  );
};

export default Layout;
