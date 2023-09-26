import React, { useEffect } from "react";

// HTML PAGE
function TestGeral2() {
  useEffect(() => {
    console.log("aqui");
  }, []);

  return (
    <>
      <h1>Teste shared2</h1>
    </>
  );
}

export { TestGeral2 };

