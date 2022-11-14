import { Link } from 'react-router-dom'
import Nav from '../components/Nav'

const Likes = ({like}) => {


  return (
    <div>
      <Nav/>
      <Link to={"/"}>back home</Link>
        <ul>
          {like.map((l) => (
            <li>{l.original_title}</li>
          ))}

        </ul>
    </div>
  )
}

export default Likes
