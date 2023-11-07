import { Grid } from "@mui/material";
import React, { useEffect } from "react";

// HTML PAGE
function MeusPets() {
  useEffect(() => {
    console.log("aqui");
  }, []);

  return (
    <>
      <Grid
        container
        style={{
          background:
            "url(https://as2.ftcdn.net/v2/jpg/05/25/78/33/1000_F_525783364_wLHN1SMAnXb2WB9mITpxW2aPjLZhDXJr.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "93.2vh",
        }}
      >
        <Grid item xs={0} sm={1} md={1}></Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={8}
          style={{
            backgroundColor: "white",
            minHeight: 600,
            maxWidth: "100%",
            boxShadow: " 0px 14px 15px 5px rgba(0,0,0,0.26)",
          }}
        ></Grid>
        <Grid item xs={0} sm={3} md={3} />
      </Grid>
    </>
  );
}

export { MeusPets };

