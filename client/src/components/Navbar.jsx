import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

export default function Navbar() {
  const {user} = useContext(UserContext)
  return (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/signup'>Signup</Link>
        <Link to='/login'>Login</Link>
        {user && (<h1>{user.name}</h1>)}
    </nav>
  )
}
