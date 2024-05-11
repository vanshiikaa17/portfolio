import AnchorLink from "react-anchor-link-smooth-scroll";
import "./nav.css";
const Navbar = () => {
    return (
        <div className="nav-div">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-custom">

                <div className="container-fluid nav-inner">
                    <div className="navbarLogo">
                <AnchorLink className="nav-brand" href="#home">VANSHIKA MOHINDRA</AnchorLink>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                </div>
                <div className="collapse navbar-collapse navitems-custom" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0 flex-row">
                        <li className="nav-item">
                            <AnchorLink className="nav-link" href="#home">Home <span className="sr-only">(current)</span></AnchorLink>
                        </li>
                        <li className="nav-item">
                            <AnchorLink className="nav-link" href="#about">About</AnchorLink>
                        </li>
                        <li className="nav-item">
                            <AnchorLink className="nav-link" href="#projects">Projects</AnchorLink>
                        </li>

                        <li className="nav-item">
                            <AnchorLink className="nav-link" href="#contact">Contact</AnchorLink>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
            {/* <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-custom">
            <AnchorLink className="nav-link" href="#home">VANSHIKA MOHINDRA</AnchorLink>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                        <AnchorLink className="nav-link" href="#contact">Contact</AnchorLink>

                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav> */}
        </div>
    )
}

export default Navbar