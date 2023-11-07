import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { Grid } from "@mui/material";
import { DatePicker, DatePickerProps } from "antd";
import Background from "@src/assets/background.svg";
import { loadStripe } from "@stripe/stripe-js";
import { CardPerson } from "@src/components/cardPerson";
import { CheckCircleOutline } from "@mui/icons-material";

function PagamentoAceito() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  const ProductDisplay = () => (
    <S.CheckoutBox>
      <div className="product">
        <img
          src="https://i.imgur.com/EHyR2nP.png"
          alt="The cover of Stubborn Attachments"
        />
        <div className="description">
          <h3>Stubborn Attachments</h3>
          <h5>$20.00</h5>
        </div>
      </div>
      <form
        action="http://localhost:5241/api/Checkout/create-checkout-session"
        method="POST"
      >
        <button type="submit">Checkout</button>
      </form>
    </S.CheckoutBox>
  );

  const Message = ({ message }: any) => (
    <section>
      <p>{message}</p>
    </section>
  );

  return (
    <>
      <div
        style={{
          background: `url(${Background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
          width: "100%",
          position: "fixed",
          zIndex: 0,
        }}
      />

      <Grid container style={{}}>
        <Grid item xs={0} sm={1} md={1}></Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={10}
          style={{
            backgroundColor: "white",
            maxWidth: "100%",
            marginBottom: 30,
            boxShadow: " 0px 14px 15px 5px rgba(0,0,0,0.26)",
            borderRadius: 10,
            marginTop: 30,
            zIndex: 1,
            // background: "#7bff7b",
            background: "rgb(160, 230, 108)",
            color: "#000000",
            fontWeight: "bold",
          }}
        >
          <Grid container style={{ padding: 30 }}>
            <Grid
              item
              xs={12}
              md={12}
              sm={12}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 10,
                textAlign: "center",
              }}
            >
              <Grid container>
                <Grid item xs={12} md={12} sm={12}>
                  <CheckCircleOutline style={{ fontSize: 80 }} />
                </Grid>
                <Grid item xs={12} md={12} sm={12} style={{ fontSize: 40 }}>
                  Pagamento Aprovado!
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={1} md={2} />
        <Grid item sm={1} md={1} />
      </Grid>
      {/* </div> */}
    </>
  );
}

export { PagamentoAceito };
