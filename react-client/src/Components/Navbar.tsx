import { Link } from "react-router-dom"

const Navbar = () => {

    return(
        <div className="navbar">
            <div className="navbar-component"><Link to="#">Logo</Link></div>
            <div className="navbar-component-right">
                <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-trendy-style-social-media-user-icon-187599373.jpg"/>
            </div>
        </div>
    )

}

export default Navbar;