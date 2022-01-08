import React from 'react';
import s from './HomeView.module.css';
import phone from './iconmonstr-smartphone-15.svg';

const HomeView = () => (
  <div className={s.container}>
    <h1 className={s.title}>Welcome to our "Phonebook" service</h1>
    <img src={phone} alt="React Logo" className={s.svg} />
  </div>
);

export default HomeView;
