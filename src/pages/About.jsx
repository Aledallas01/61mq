// src/pages/About.jsx
import React from "react";

import StefanoIMG from "../assets/images/stefano.jpg";

export default function About() {
  return (
    <>
      <main>
        {/* Hero About */}
        <section className="hero" id="about-hero">
          <h1>
            <i className="fas fa-info-circle" /> Chi Siamo
          </h1>
          <p>
            61MetriQuadri nasce dalla visione di Stefano Pomposo: creare uno
            spazio dove l’occhiale non è solo uno strumento, ma un’estensione
            della personalità. <br />
            Nel cuore di Vimercate, la nostra boutique indipendente unisce
            passione per il design, artigianalità italiana e attenzione per i
            materiali sostenibili. <br />
            Ogni collezione è selezionata con cura: vogliamo offrirti montature
            uniche, fuori dagli schemi, che raccontino qualcosa di te. <br />
            Che tu stia cercando stile, comfort o innovazione, 61MetriQuadri è
            il posto giusto per trovare ciò che ti rappresenta.
          </p>
        </section>

        {/* Storia */}
        <section id="storia">
          <div className="container">
            <h2 className="section-title">
              <i className="fas fa-book-open" /> La Nostra Storia
            </h2>
            <p>
              61MetriQuadri nasce nel cuore di Vimercate da un'idea di Stefano
              Pomposo: creare un luogo dove l'occhiale diventa espressione di
              stile, personalità e cultura. Dai primi passi come piccola realtà
              indipendente, siamo cresciuti rimanendo fedeli a ciò che ci
              distingue: la ricerca, l’autenticità e l’amore per l’artigianato.
              Ogni montatura che entra in boutique è frutto di un percorso fatto
              di scelte consapevoli, collaborazioni con designer italiani e
              attenzione ai dettagli.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section id="missione">
          <div className="container">
            <h2 className="section-title">
              <i className="fas fa-bullseye" /> La Nostra Missione
            </h2>
            <p>
              La nostra missione è ridefinire il concetto di occhiale come
              semplice accessorio, trasformandolo in un simbolo identitario.
              Vogliamo offrire prodotti autentici, di alta qualità e realizzati
              nel rispetto dell’ambiente, supportando al contempo il talento dei
              piccoli artigiani. Guidiamo ogni cliente verso la scelta che più
              lo rappresenta, con ascolto, passione e cura.
            </p>
          </div>
        </section>

        {/* Valori */}
        <section id="valori">
          <div className="container">
            <h2 className="section-title">
              <i className="fas fa-heart" /> I Nostri Valori
            </h2>
            <div className="cards">
              <div className="card">
                <i className="fas fa-hands-helping" />
                <span>Artigianalità</span>
                <p>
                  ogni occhiale è selezionato per la sua qualità costruttiva e
                  unicità.
                </p>
              </div>
              <div className="card">
                <i className="fas fa-cogs" />
                <span>Autenticità</span>
                <p>
                  scegliamo brand indipendenti, fuori dalle logiche della
                  produzione di massa.
                </p>
              </div>
              <div className="card">
                <i className="fas fa-trophy" />
                <span>Cura</span>
                <p>
                  mettiamo passione in ogni consiglio, in ogni dettaglio, in
                  ogni cliente.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
