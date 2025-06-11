import React from "react";

export default function ComeTrovarci() {
  return (
    <section id="contatti" className="light-container contatti-section">
      <h2 className="text-3xl font-bold mb-6">Vieni a trovarci</h2>

      <div className="map-container mb-6">
        <iframe
          title="Mappa 61MQ"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.211523074755!2d9.370230215559372!3d45.61899897910216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786b9b8a2b3b3f7%3A0x2b6a4b06b88b5e4a!2s61MetriQuadri!5e0!3m2!1sit!2sit!4v1683201672600!5m2!1sit!2sit"
          width="100%"
          height="350"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="info-contatti">
        <ul className="space-y-2">
          <li>
            <i className="fa-solid fa-location-dot mr-2"></i>
            Via Camillo Benso di Cavour 30, Vimercate, 20871
          </li>
          <li>
            <i className="fa-solid fa-phone mr-2"></i>
            <a href="tel:+39039459459">+39 039 291 4075</a>
          </li>
          <li>
            <i className="fa-solid fa-envelope mr-2"></i>
            <a href="mailto:info@61metriquadri.it">info@61metriquadri.it</a>
          </li>
          <li className="flex gap-4 mt-2">
            <a
              href="https://www.instagram.com/ottica61mq/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram text-xl"></i>
            </a>
            <a
              href="https://www.facebook.com/61metriquadri/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-facebook text-xl"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
