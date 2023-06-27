import { Link } from "react-router-dom"

const Card = ({image, rank, name, id, children}) => {
  return (
      <article className="card">
          <div className="top">
              <h4>{rank}</h4>
              <h4>{name}</h4>
             <Link to={`./crypto/${id}`}><img src={image} alt={name} className="profile-picture"></img></Link>  
          </div>
          <div className="bottom">
              {children}
              
          </div>
    </article>
  )
}
export default Card