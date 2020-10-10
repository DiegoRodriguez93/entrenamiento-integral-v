import React from 'react';

const Profesors = () => {

    return (
        <section className="profesors row">
            <div className="heading col-12">
                <h2>nuestros maestros:</h2>
            </div>

            <article className="profesor col-lg-4 md-4 sm-12">
                <img className="profesor-photo" src="/img/profesors/gmandresrodriguez.jpeg" />
                <h4 className="profesor-name">GM Andrés Rodríguez</h4>
                <p className="profesor-description">Gran Maestro Internacional de ajedrez desde 1997.
                Campeón Panamericano Juvenil en Asunción del Paraguay en mayo de 1990.
                Medalla de plata en el primer tablero en la 36° Olimpíada de ajedrez realizada en Calviá (España), en 2004.
                Entrenador de varios campeones mundiales como Deysi Cori, Jorge Cori y Alan Pichot.
                Co-fundador y director de Ajedrez Latino.
                Entrenador en el Plan de Alto Rendimiento de FENAMAC (México).</p>
            </article>

            <article className="profesor col-lg-4 md-4 sm-12">
                <img className="profesor-photo" src="/img/profesors/mijorgerosito.jpeg" />
                <h4 className="profesor-name">MI Jorge Rosito</h4>
                <p className="profesor-description">Maestro Internacional desde 1998
                Norma de GM en 2003
                Entrenador de GM Diego Flores, GM García Palermo, MI Marcelo Tempone
                Entrenador de varios juveniles campeones nacionales
                Bicampeón argentino y panamericano sub 16
                Mejor entrenador de Argentina en 2016 (Premios Fada)
                Co-fundador y director de Ajedrez Latino.
                Entrenador en el Plan de Alto Rendimiento de FENAMAC (México).</p>
            </article>

            <article className="profesor col-lg-4 md-4 sm-12">
                <img className="profesor-photo" src="/img/profesors/mibenjaminmela.jpeg" />
                <h4 className="profesor-name">MI Benjamín Mela</h4>
                <p className="profesor-description">Maestro Internacional desde 2006 (Barcelona, España 🇪🇸)
                Entrenador de los seleccionados Catalanes de categorías (2005/2006) en las finales del Campeonato de España 🇪🇸
                Profesor del Plan de Ajedrez escolar (caba) 2007 hasta la actualidad
                Jefe de Prensa del equipo Olimpico Argentino 🇦🇷 en la Olimpiada de Ajedrez Batumi 2018, Georgia 🇬🇪
                Entrenador de las Escuelas Deportivas de Fada (2014 - 2019)
                Colaborador de Chess24.</p>
            </article>

            <div className="col-lg-2 md-2 sm-0"></div>

            <article className="profesor col-lg-4 md-4 sm-12">
                <img className="profesor-photo" src="/img/profesors/gmdiegoflores.jpeg" />
                <h4 className="profesor-name">GM Diego Flores</h4>
                <p className="profesor-description">Gran Maestro Internacional desde 2008.
                Campeón Argentino Absoluto en 7 ocasiones.
                Representante Olímpico Argentino desde 2006 hasta la actualidad.
                Profesor de la Escuela Municipal de Ajedrez de Junín (2003-2008).
                Instructor en la Escuela de Talentos de la ULP San Luis (2013-2018).
                Co-fundador y director de Ajedrez Latino.
                Entrenador en el Plan de Alto Rendimiento de FENAMAC (México).</p>
            </article>

            <article className="profesor col-lg-4 md-4 sm-12">
                <img className="profesor-photo" src="/img/profesors/gmleandrokrysa.jpeg" />
                <h4 className="profesor-name">GM Leandro Krysa</h4>
                <p className="profesor-description">-GM desde 2017
-Fide Trainer (Georgia 2018)
-Campeon Panamericano Juvenil (Ecuador 2011)
-Bicampeón Argentino Juvenil (2011 y 2012)
-Entrenador del Equipo Olímpico de Brasil Femenino (Georgia 2018)
-Entrenador de Ajedrez Latino en el Plan de Alto Rendimiento de FENAMAC (México).</p>
            </article>

            <hr className="hr" />
        </section>
    )


}

export default Profesors;