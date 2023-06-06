import React from 'react';
import { NavBar, Input, Button } from '@components';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();

  const handleClick = () => {
    /* Todo : Harcode url doesn't seems good */
    navigate('/signin');
  };

  return (
    <div className="relative h-full w-full">
      <NavBar />
      <div className="absolute-center">
        <h1 className="text-5xl	font-black">
          Unlimited movies, TV shows and more
        </h1>
        <h2 className="text-2xl text-center my-4">
          Watch anywhere. Cancel anytime.
        </h2>
        <h3 className="text-xl text-center">
          Ready to watch? Enter your email to create create or restart your
          membership.
        </h3>
        <div className="flex space-x-2 text-center justify-center mt-5">
          <div className="flex-none shrink-0 w-[28rem]">
            <Input type="email" id="email" label="Email address" />
          </div>
          <div className="flex-none shrink-0 w-[10rem] h-[56px]">
            <Button onClick={handleClick}> Get Started </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
