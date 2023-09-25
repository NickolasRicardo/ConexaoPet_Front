import React, { useEffect } from "react";

// HTML PAGE
function TestGeral() {
  useEffect(() => {
    console.log("aqui");
  }, []);

  return (
    <>
      <div
        style={{ height: "100vch", width: "100%", backgroundColor: "black" }}
      >
        <h1>Teste shared</h1>
      </div>
    </>
  );
}

export { TestGeral };

