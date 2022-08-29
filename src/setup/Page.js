import { useGlobalContext } from './context'
import { Link } from 'react-router-dom';

const Page = ({ pageId, title, description, cta, aria, page, id }) => {
  const { openModal } = useGlobalContext();

  return (
    <article id={`#${pageId}`}>
      <div className="container">
        <div className="text-container">
          <h3>{title}</h3>
          <div className="border-lines">
            <span></span>
            <span></span>
          </div>
          <p>{description}</p>
          <Link to={`/${page}`} className="page-btn" aria-label={aria} onClick={id === 3 ? openModal : undefined} >{cta}</Link>
        </div>
        <Link to={`/${page}`} className="img-wrapper"></Link>
      </div>
    </article>
  )
}

export default Page
