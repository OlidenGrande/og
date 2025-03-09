import React from "react";
import "./Privacy.css";

function Privacy() {
  return (
    <div className="privacy-policy-container">
      <h1>Política de Privacidad</h1>

      <section>
        <h2>1. Introducción</h2>
        <p>Esta Política de Privacidad describe cómo recopilamos, usamos y protegemos la información de los usuarios que utilizan nuestra aplicación.</p>
      </section>

      <section>
        <h2>2. Información que Recopilamos</h2>
        <p>Podemos recopilar los siguientes tipos de información:</p>
        <ul>
          <li>Datos personales (nombre, correo electrónico, teléfono, etc.).</li>
          <li>Información de uso de la aplicación (interacciones, preferencias, etc.).</li>
          <li>Datos de ubicación si el usuario otorga permiso.</li>
          <li>Información del dispositivo (modelo, sistema operativo, identificadores únicos, etc.).</li>
        </ul>
      </section>

      <section>
        <h2>3. Uso de la Información</h2>
        <p>La información recopilada se utiliza para:</p>
        <ul>
          <li>Mejorar la experiencia del usuario y optimizar la aplicación.</li>
          <li>Proveer servicios y funcionalidades personalizadas.</li>
          <li>Enviar notificaciones importantes.</li>
          <li>Cumplir con requisitos legales y de seguridad.</li>
        </ul>
      </section>

      <section>
        <h2>4. Compartición de la Información</h2>
        <p>No compartimos información personal con terceros, excepto en los siguientes casos:</p>
        <ul>
          <li>Cuando sea necesario para prestar un servicio solicitado por el usuario.</li>
          <li>Para cumplir con obligaciones legales.</li>
          <li>Con proveedores de servicios que nos ayuden a operar la aplicación, bajo acuerdos de confidencialidad.</li>
        </ul>
      </section>

      <section>
        <h2>5. Seguridad de la Información</h2>
        <p>Implementamos medidas de seguridad para proteger la información de nuestros usuarios. Sin embargo, no podemos garantizar una seguridad absoluta debido a la naturaleza de internet.</p>
      </section>

      <section>
        <h2>6. Derechos del Usuario</h2>
        <p>Los usuarios tienen derecho a:</p>
        <ul>
          <li>Acceder, modificar o eliminar su información personal.</li>
          <li>Revocar el consentimiento para el uso de datos.</li>
          <li>Solicitar la eliminación de su cuenta y datos.</li>
        </ul>
      </section>

      <section>
        <h2>7. Cambios en la Política de Privacidad</h2>
        <p>Podemos actualizar esta política en cualquier momento. Notificaremos a los usuarios sobre cambios importantes a través de la aplicación o por otros medios adecuados.</p>
      </section>

      <section>
        <h2>8. Contacto</h2>
        <p>Si tienes preguntas sobre esta Política de Privacidad, puedes contactarnos en: <a href="mailto:3dmodog@gmail.com">3dmodog@gmail.com</a></p>
      </section>
    </div>
  );
}

export default Privacy;