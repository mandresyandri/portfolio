import React from 'react';

let Footer = () => {
    return (
        <footer className="bg-white py-4 mt-auto">
            <div className="container px-5">
                <div className="row justify-content-between align-items-center">
                    <div className="col-auto d-flex gap-4">
                        <div className="small m-0">Copyright ©Mandresy Andri 2024</div>
                    </div>
                    <div className="col-auto d-flex justify-content-center gap-4">
                        <a className="text-black" href="https://www.linkedin.com/in/mandresy-andri/" target='_blank' rel="noreferrer">
                            <i className="bi bi-linkedin"></i>
                        </a>
                        <a className="text-black" href="https://github.com/mandresyandri" target='_blank' rel="noreferrer">
                            <i className="bi bi-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;