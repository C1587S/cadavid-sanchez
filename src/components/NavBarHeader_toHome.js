import React from 'react';
import { Link } from 'react-router-dom';
const Layout1 = (props) => (
  <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>
      <div>{props.children}</div>
  </div>
);

export default Layout1;