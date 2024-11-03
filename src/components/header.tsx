import { Link } from "react-router-dom"

const Header:React.FC = () => { 
    return(
       <nav className="header-nav">
        <ul className="header-ul">
        <Link to={"/"}><li className="header-li">Home</li></Link>
        <Link to={"/resources"}><li className="header-li">Resources</li></Link>
        <Link to={"/aboutus"}><li className="header-li">About us</li></Link>
        </ul>
       </nav>
    )
}
export default Header