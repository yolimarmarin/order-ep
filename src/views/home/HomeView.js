import React from 'react';
import { PrimaryButton } from '../../components/buttons';
import { PrimaryInput } from '../../components/inputs';
import * as Icon from 'react-feather';
import './home.scss';

const HomeView = ({ name, onClickContinue, onChangeName }) => {
  return (
    <div className="home-main-container">
      <h1 className="home-title">SolveEQ</h1>
      <h3 className="home-subtitle">A fun interactive game to test your algebra abilities</h3>
      <p className='home-text'> 
        Just enter your name to start playing,
        <br/>
        BUT
        <br/>
        Be ready, a timer will start as soon as you click "Let's go"
      </p>
      <PrimaryInput placeholder="Your name here" value={name} onChange={onChangeName} />
      <PrimaryButton
        text="Let's go"
        icon={Icon.ArrowRight}
        onClick={onClickContinue}
        disabled={name === ''}
      />
    </div>
  );
};

export default HomeView;
