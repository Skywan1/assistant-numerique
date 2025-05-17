import React from "react";

export default function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Assistant numérique personnel</h1>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Connexion à votre boîte courriel</h2>
        <button>Connecter mon compte Gmail</button>
        <p style={{ fontSize: "0.8rem", color: "#555" }}>
          Nous analyserons uniquement vos courriels promotionnels pour proposer des désinscriptions.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Ajouter un rappel</h2>
        <input placeholder="Ex: Renouveler permis de conduire" style={{ display: "block", marginBottom: "0.5rem" }} />
        <input type="date" />
        <br />
        <button style={{ marginTop: "1rem" }}>Ajouter au calendrier</button>
      </section>

      <section>
        <h2>Classer un document</h2>
        <input type="file" />
        <br />
        <button style={{ marginTop: "1rem" }}>Téléverser et organiser</button>
        <p style={{ fontSize: "0.8rem", color: "#555" }}>
          Nous sauvegarderons vos documents dans un espace sécurisé.
        </p>
      </section>
    </div>
  );
}
