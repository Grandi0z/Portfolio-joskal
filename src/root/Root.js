import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => (
  <div>
    <div className="details">
      <Outlet />
    </div>
  </div>

);

export default Root;
