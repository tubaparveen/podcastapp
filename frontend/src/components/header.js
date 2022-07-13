
import { Link } from "react-router-dom";
const Header = () => {


   
    

    return(
       
      
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
            <img src="https://i.pinimg.com/736x/2d/0b/62/2d0b62c8d00a8b689aa5dc9117292a9a.jpg" alt="" width="50" height="50" class="d-inline-block align-text-top"/>
    
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        
                        
                        <li class="nav-item">
            <Link class="nav-link" activeClassName="active" to="/register">Register</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" to="/login">Login </Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" to="/allpodcast">All Podcast</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" activeClassName="active" to="/addpodcast">Add Podcast</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" activeClassName="active" to="/about">About</Link>
        </li>
                       
                       
                        
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-light" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
        
    )
}
export default Header;