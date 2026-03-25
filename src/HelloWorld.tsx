import { useState } from "react";

export default function HelloWorld() {
  const [shouldThrowError, setShouldThrowError] = useState(false);

  if (shouldThrowError) {
    throw new Error("Erro teste do componente Hello World!");
  }

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>Hello World! 👋</h1>
      <p>Bem-vindo ao exemplo com Error Boundary</p>
      <button
        onClick={() => setShouldThrowError(true)}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#ff6b6b",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Clique aqui para simular erro
      </button>
    </div>
  );
}
