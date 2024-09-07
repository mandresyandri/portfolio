import Typewriter from 'typewriter-effect';
import Radar from 'react-d3-radar';

let Header = () => {
    return (
        <header className="py-5">
            <div className="container px-5 pb-5">
                <div className="row gx-4 align-items-center">
                    <div className="col-xxl-6">
                        <div className="text-center text-xxl-start">
                            <div className="lead fw-normal fw-bolder mb-4 btn btn-outline-dark">
                                <Typewriter 
                                    classname="headingTextdynamic"
                                    options={{
                                        strings:[
                                            "Data Scientist", 
                                            "Data Valorization Officer", 
                                            "Web Developer"
                                        ], 
                                        autoStart: true, 
                                        loop: true
                                    }}
                                />
                            </div>
                            <h2 className="fs-3 fw-light text-muted">Mandresy ANDRIANTSOANAVALONA</h2>
                            <h1 className="display-3 fw-bolder mb-5">
                                <span>Data for social empowerment.</span>
                            </h1>
                            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                                {/* <a className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" href="http://www.mandresyandri.fr/"> */}
                                <a className="btn btn-outline-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" href="http://www.mandresyandri.fr/">
                                    <span className="small fw-bold">Mon CV</span>
                                </a>
                                <a className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder" href="">
                                    <span className="small fw-bold">Mes projets</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Right */}
                    <div className="col-xxl-6 d-flex align-items-end flex-column">
                        <Radar
                            width={400}
                            height={400}
                            padding={60}
                            domainMax={10}
                            highlighted={null}
                            onHover={(point) => {
                                if (point) {
                                    console.log(`Hovered over ${point.key}: ${point.value}`);
                                } else {
                                    console.log('Not hovering over anything');
                                }
                            }}
                            data={{
                                variables: [
                                    { key: 'torch', label: 'PyTorch' },
                                    { key: 'keras', label: 'Scikit-learn' },
                                    { key: 'pd', label: 'Pandas & Numpy' },
                                    { key: 'db', label: 'Postgres & MongoDB' },
                                    { key: 'viz', label: 'Dash Plotly & Matplotlib' },
                                    { key : 'front', label: 'Angular & React' },
                                    { key : 'tools', label: 'Git & Docker' },
                                    { key : 'cloud', label: 'AWS Cloud' },
                                    
                                ],
                                sets: [
                                    {
                                        key: 'my_skills',
                                        label: 'My Skills',
                                        values: {
                                            torch: 4,
                                            keras: 9,
                                            pd: 9,
                                            front: 9,
                                            tools:7,
                                            cloud: 4,
                                            viz: 5,
                                            db: 7,
                                            
                                        },
                                    },
                                ],
                            }}
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;