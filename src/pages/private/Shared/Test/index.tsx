import React, { useEffect } from "react";

// HTML PAGE
function TestGeral() {
  useEffect(() => {
    console.log("aqui");
  }, []);

  return (
    <>
      <h1>Teste shared</h1>
    </>
  );
}

export { TestGeral };

