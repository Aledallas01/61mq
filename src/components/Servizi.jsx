// src/components/Servizi.jsx
import React from "react";

export default function Servizi() {
  return (
    <section id="servizi" className="servizi-section">
      <div className="container">
        <h2 className="servizi-titolo">
          <i className="fa-solid fa-glasses"></i> I Nostri Servizi
        </h2>
        <div className="servizi-grid">
          <div className="servizio-box">
            <i className="fa-solid fa-eye"></i>
            <h3>Controllo della Vista</h3>
            <p>
              Offriamo controlli visivi professionali in negozio per garantire
              che i tuoi occhiali siano sempre perfetti.
            </p>
          </div>
          <div className="servizio-box">
            <i className="fa-solid fa-glasses"></i>
            <h3>Personalizzazione Montature</h3>
            <p>
              Adattiamo ogni montatura al tuo viso e stile, scegliendo materiali
              e colori che ti rappresentano.
            </p>
          </div>
          <div className="servizio-box">
            <i className="fa-solid fa-wrench"></i>
            <h3>Assistenza Post-Vendita</h3>
            <p>
              Riparazioni, regolazioni e supporto continuo anche dopo
              l'acquisto: ci prendiamo cura dei tuoi occhiali.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
