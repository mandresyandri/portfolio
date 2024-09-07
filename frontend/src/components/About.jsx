import 'bootstrap-icons/font/bootstrap-icons.css';

let About = () => {
    return (
        <div className="py-5 bg-light">
            <div className="row gx-5 justify-content-center">
                <div className="col-xxl-8">
                    <div className="text-center my-3">
                        <h2 className="display-5 fw-bolder">
                            <span>À propos</span>
                        </h2>
                        <p className="lead fw-light mb-4">
                            Quelques informations sur moi.
                        </p>
                        <p className="text-muted">
                            Je suis étudiant en Data Sciences et Société du Numérique, passionné par l’utilisation des données comme levier de transformation. Mon portfolio "Data for Social Empowerment" illustre ma vision : comment les données peuvent non seulement critiquer le statu quo mais aussi offrir des solutions innovantes aux défis sociaux et techniques. Explorez mes projets, allant des initiatives pour l’équité sociale aux travaux techniques issus de cours et recherches personnelles, pour découvrir comment j’allie compétences analytiques et créativité.
                        </p>
                        <div className="d-flex justify-content-center fs-2 gap-4">
                            <a className="text-black" href="https://www.linkedin.com/in/mandresy-andri/" target='_blank'>
                                <i className="bi bi-linkedin"></i>
                            </a>
                            <a className="text-black" href="https://github.com/mandresyandri" target='_blank'>
                                <i className="bi bi-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;