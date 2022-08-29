import React from 'react'
import { Link } from 'react-router-dom';
import Background from './Background';

const Error = () => {
  return (
    <section className="error">
      <Background />
      <div className="text">
        <h1>Oops, page not found...</h1>
        <Link to="/">Go Back</Link>
      </div>
    </section>
  )
}

export default Error;