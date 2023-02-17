import { Link } from 'react-router-dom';
import * as userService from '../../../utilities/users-services'
import logo from '../../EventPage/assets/stub_crud_logo.png'
import "./NavBar.css"

export default function NavBar({ user, setUser }) {

  function handleLogOut () {
    // we should delegate the actual logging out to the users service
    userService.logOut()
    setUser(null)
  }
    return(
      <div className='top-nav'>
        <img className='image' src={logo}></img>
        <nav>
          <Link className='link' to="/events">Event Page</Link>
          &nbsp; | &nbsp;
          <Link className='link' to="/events/register">Register</Link>
          &nbsp; | &nbsp;
          <span className='welcome'>Welcome, {user.name}!</span>
          &nbsp; | &nbsp;
          <Link className='link' to="" onClick = {handleLogOut}>Log Out</Link>
        </nav>
      </div>
    )
}