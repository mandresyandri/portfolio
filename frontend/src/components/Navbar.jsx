let NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white py-3 border">
            <div className="container px-5">
                <a className="navbar-brand" href="#">
                    <span className="fw-bolder">Mandresy Andri</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bold">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                    <a className="btn btn-outline-dark ms-md-2" href="http://www.mandresyandri.fr/">
                        <span className="small fw-bold">Mon CV</span>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;