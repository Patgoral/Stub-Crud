import { Link } from 'react-router-dom';
import * as userService from '../../../utilities/users-services'
import logo from '../../assets/stub_crud_logo.png'
import "./NavBar.css"

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    // we should delegate the actual logging out to the users service
    userService.logOut()
    setUser(null)
  }
  return (
    <div className='top-nav-container'>
      <div className='top-nav'>
      <Link to="/"> <div className='stub-logo'><img src={logo} /></div></Link>
        <nav>
          <Link className='link' to="/">Event&nbsp;Page</Link>
          &nbsp; <span className='divider'>|</span> &nbsp;
          <Link className='link' to="/events/register">Register</Link>
          &nbsp; <span className='divider'>|</span> &nbsp;
          <span className='welcome'>Welcome, {user.name}!</span>
          &nbsp; <span className='divider'>|</span> &nbsp;
          <Link className='link' to="" onClick={handleLogOut}>Log&nbsp;Out</Link>
        </nav>
      </div>
    </div>
  )
}