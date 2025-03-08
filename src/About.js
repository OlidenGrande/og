import React from "react";
import './About.css';

function About() {
    return(
        <section className="about-me">
            <h2>🚀 Acerca de mi</h2>
            <p>
                Soy un desarrollador de aplicaciones móviles con una trayectoria de más de tres años en la creación de soluciones 
                nativas para la plataforma Android, utilizando el lenguaje Kotlin. Mi experiencia abarca todo el ciclo de vida del 
                desarrollo de aplicaciones, desde la concepción y el diseño de la interfaz de usuario hasta la implementación, las 
                pruebas y el despliegue en la Google Play Store.
            </p>
            <p>
                En el ámbito de iOS, cuento con más de dos años de experiencia en el desarrollo de aplicaciones nativas utilizando Swift. 
                He trabajado en la creación de aplicaciones para iPhone y iPad, aplicando principios de diseño de Apple y aprovechando las 
                últimas características del sistema operativo iOS.
            </p>
            <p>
                Mi conjunto de habilidades incluye:
            </p>
            <div className="habilidades-grid">
                <div><i class="fab fa-android"></i>Desarrollo nativo de Android con Kotlin</div>
                <div><i class="fab fa-apple"></i>Desarrollo nativo de iOS con SwifUI</div>
                <div><i class="fas fa-paint-brush"></i>Diseño de interfaces de usuario (UI) y experiencia de usuario (UX) móvil</div>
                <div><i class="fas fa-cloud"></i>Integración de APIs y servicios web</div>
                <div><i class="fas fa-database"></i>Gestión de bases de datos móviles</div>
                <div><i class="fas fa-bug"></i>Pruebas y depuración de aplicaciones móviles</div>
                <div><i class="fab fa-git-alt"></i>Experiencia en el uso de herramientas de control de versiones como Git</div>
                <div><i class="fas fa-users"></i>Capacidad para trabajar en equipos multidisciplinarios.</div>
                <div><i class="fas fa-check"></i>Enfoque en la calidad del código y la experiencia del usuario.</div>
                <div><i class="fas fa-code"></i>Conocimientos en consumo de Apis Rest, y diseño de Arquitecturas de software.</div>
            </div>
            <p>
                A lo largo de mi carrera, he participado en el desarrollo de aplicaciones que abarcan diversas áreas, desde aplicaciones de 
                productividad hasta aplicaciones de entretenimiento. Me apasiona crear soluciones móviles innovadoras que resuelvan problemas 
                reales y mejoren la vida de los usuarios. Impulsado por la constante evolución tecnológica, actualmente me he aventurado con 
                gran entusiasmo en el mundo del desarrollo web, sumergiéndome en el ecosistema React y explorando las vastas posibilidades que 
                ofrece el desarrollo web moderno. Este portafolio, que orgullosamente presento, es testimonio de mi dedicación y aprendizaje 
                continuo en este nuevo camino. Cada línea de código refleja mi compromiso con la creación de experiencias digitales excepcionales 
                y mi deseo de expandir mis horizontes profesionales.
            </p>
        </section>
    );
}

export default About;