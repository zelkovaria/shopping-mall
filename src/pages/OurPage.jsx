import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const OurPage = () => {
  return (
    <div className="mw">
      <h2>our page</h2>
      <nav>
        <Link to="/our/ceo">CEO</Link>
        <Link to="/our/history">History</Link>
        <Link to="/our/org">organization</Link>
      </nav>
      <Outlet />
      <div>공통요소</div>
    </div>
  );
};

export default OurPage;
