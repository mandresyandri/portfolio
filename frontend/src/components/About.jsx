import 'bootstrap-icons/font/bootstrap-icons.css';

let About = () => {
    return (
        <div className="py-5 bg-light">
            <div className="row gx-5 justify-content-center">
                <div className="col-xxl-8">
                    <div className="text-center my-3">
                        <h2 className="display-5 fw-bolder" id="about">
                            <span>À propos</span>
                        </h2>
                        {/* <p className="text-muted">
                            ✋🏽 Bonjour ! Je suis <strong>Freelance Data Scientist</strong> et étudiant en <strong>Data Science et Société du Numérique</strong>
                            Je participe à plusieurs projet mon terrain de prédilection est mon travail de bénévole au sein de <a class="text-dark" href="https://dataforgood.fr/">Data For Good</a>&nbsp;<i class="bi bi-box-arrow-up-right"></i> je participe à divers projet dans le but de <strong>promouvoir l'usage de la data pour le bien social</strong>. 
                        </p> */}
                        <p className="text-muted">
                            ✋🏽 Bonjour ! Je suis <strong>Freelance Data Scientist</strong> et étudiant en <strong>Data Science et Société du Numérique</strong>.
                            En parallèle, je suis apprenti chez Grand Paris Seine Ouest, au sein de la branche Open Data de la <strong>DIGIT</strong>. 
                            Je contribue à divers projets data en tant que bénévole, avec <a class="text-dark" href="https://dataforgood.fr/">Data For Good</a>&nbsp;<i class="bi bi-box-arrow-up-right"></i>, dans le but de <strong>promouvoir l'usage de la data pour le bien social</strong>.
                        </p>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;