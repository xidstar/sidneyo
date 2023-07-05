import React from 'react';
import cards from './cardInfo';

function Cards() {
  return (
    <>
      <section id="services" className="cards-experience">
        <div className="pj-info">
          <div className="category"><span>02</span> PASSIONS...</div>
        </div>
        <div className="container">
          <div className="services">
            {cards.map((card, index) => {
              const { logo, img, heading, text } = card;
              return (
                <div className="row">
                    <div className="text">
                      <div className="blob"></div>
                      <h3>{heading}</h3>
                      <p>{text}</p>
                    </div>
                    <div className="img">
                      <img src={img} alt=""></img>
                    </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Cards;