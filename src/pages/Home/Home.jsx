import React from 'react';
import { Nav, Featured } from '@components';
import { NavBar } from '../../components';

function Landing() {
  return (
    <div>
      <NavBar isLoggedIn={true} />
    </div>
  );
}

export default Landing;
