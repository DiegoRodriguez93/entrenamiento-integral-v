import React from 'react';
import FlipCountdown from "@rumess/react-flip-countdown";


const About = () => {

return (

    <section className="about row">

    <div className="col-12 heading">
        <h2>información del curso:</h2>
    </div>

    <div className="col-lg-6 sm-12">
        <p className="about-description">
        Del 23 de Octubre al 1 de Noviembre<br/><br/>

        - 15% OFF Hasta el 20/10 a las 23:59hs<br/><br/>

        - Horarios 11hs a 13hs de Argentina y 16hs a 18hs de España Fines de semana<br/>
        Y de 16hs a 18hs de Argentina, 21hs a 23hs de España días laborales<br/><br/>

        -Fin de semana (30 y 31 de Octubre) actividades (Simultaneas, torneos, problemas, curso GM Krysa)<br/><br/>

        -Dos niveles: Sub 1800 y Supra 1800<br/><br/>

        -Duración de las clases 2 horas .<br/><br/>

        -Serán 18 horas de clases Del 23 de Octubre al 1 de Noviembre, más 4 horas de actividades especiales<br/>
        que quedarán grabadas y a disposición de los alumnos, más las actividades extras<br/><br/>
        </p>
    </div>
    <div className="col-lg-6 sm-12 vertical-align">
    <div className="clock-countdown" style={{ backgroundColor: "#c7c5c5" }}>
        <h1 className="Oswald" style={{ color: "#f02626" }}>El 15% OFF finaliza en</h1>
        <FlipCountdown
            theme="light"
            hideYear
            hideMonth
            endAt={"2020-10-20 23:59:59"} // Date/Time
        />
       </div>
    </div>

    <hr className="hr"/>

    </section>


);

}

export default About;