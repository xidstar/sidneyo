import React from 'react';
import './index.css';
import pages from './PageInfo';
import Page from './Page';
import Background from './Background';
import Landing from './Landing';
import Modal from './ContactModal';

function Homepage() {
  
  return <>
  
    <section className="star-bg">
      <Background />
      <div className="wrapper">
        <Landing />
        {pages.map((page) => {
          return (
            <Page key={page.id} {...page} />
          )
        })}
        <Modal />
      </div>
    </section>
  </>
}

export default Homepage;
