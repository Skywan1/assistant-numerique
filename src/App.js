import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function App() {
  const handleSuccess = (credentialResponse) => {
    console.log("Connexion réussie !");
    console.log(credentialResponse);
    alert("Connexion réussie !");
  };

  const handleError = () => {
    console.log("Échec de la connexion.");
    alert("Erreur de connexion à Google.");
  };

  return (
    <GoogleOAuthProvider clientId="889888777826-bbgb1r4he0moc3u190qtfvoaaep0itf.apps.googleusercontent.com">
      <div style={{ padding: "2rem", fontFamily: "Arial" }}>
        <h1>Assistant numérique personnel</h1>

        <section style={{ marginBottom: "2rem" }}>
          <h2>Connexion à votre boîte courriel</h2>
          <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
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
    </GoogleOAuthProvider>
  );
}
