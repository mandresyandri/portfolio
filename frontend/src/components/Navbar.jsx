let NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
            <div className="container px-5">
                <a className="navbar-brand" href="#">
                    <span>Mandresy Andri</span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bold">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                    <a className="btn btn-primary ms-md-3 small fw-bold" href="http://www.mandresyandri.fr/">Mon CV</a>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;