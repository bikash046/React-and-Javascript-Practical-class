import Logo from "../assets/logo.avif";
import { Link } from "react-router";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className='navbar'>
    <img src={Logo}  />
    <div className='menu'>
        <div id ="home">
            <Link to={'/'}>
                Home
            </Link>
        </div>
        <div id ="counter">
            <Link to ={'/counter'}>
                Counter App
            </Link>
        </div>
        <div id="login">
            <Link to={'login'}>
                Login
            </Link>
        </div>
    </div>
</div>
  );
}
