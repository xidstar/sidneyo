import React from 'react';
import Services from './img/mockup-2.png';
import cards from './cardInfo';

function Cards() {
  return (
    <>
      <section id="services" className="cards-experience">
        <div className="pj-info">
          <div className="category"><span>02</span> SERVICES</div>
        </div>
        <div className="container">
          <img src={Services} alt="" className="services"></img>

          <div className="row">
            {cards.map((card, index) => {
              const { logo, heading, text } = card;
              return (
                <div key={index} className="col-card">
                  <div className="card">
                    <div className="inner">
                      {logo}
                      <h3>{heading}</h3>
                      <p>{text}</p>
                    </div>
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