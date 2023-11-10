import React, { useEffect, useState } from "react";
import * as S from "./styles";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { DatePicker, DatePickerProps } from "antd";
import Background from "@src/assets/background.svg";
import { loadStripe } from "@stripe/stripe-js";
import { CardPerson } from "@src/components/cardPerson";
import moment from "moment";
import { RangePickerProps } from "antd/es/date-picker";
import { useParams } from "react-router-dom";
import Services from "./services";
import { IProviders } from "@src/@interfaces/IProviders";

function ConfirmacaoServico() {
  const { id }: { id: string } = useParams();
  const [prestador, setPrestador] = useState<IProviders>();
  const [message, setMessage] = useState("");
  const [pet, setPet] = useState("");
  const { RangePicker } = DatePicker;
  const dateFormat = "MM/DD/YYYY";

  const [loading, setLoading] = useState(false);

  const LoadPrestadores = async () => {
    let services = new Services();
    setLoading(true);
    console.log(id);
    const { error, response } = await services.FindByID({ id });

    if (!error && response) {
      setPrestador(response);
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(id);
    LoadPrestadores();

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

  const onChange = (
    value: DatePickerProps["value"] | RangePickerProps["value"],
    dateString: [string, string] | string
  ) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
    console.log(
      new Date(dateString[0]).getTime() +
        " " +
        new Date(dateString[1]).getTime()
    );

    var timeDiff = Math.abs(
      new Date(dateString[0]).getTime() - new Date(dateString[1]).getTime()
    );

    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    console.log(timeDiff);

    console.log(diffDays);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setPet(event.target.value);
  };

  const ProductDisplay = () => (
    <S.CheckoutBox>
      <div className="product">
        <img
          src="https://i.imgur.com/EHyR2nP.png"
          alt="The cover of Stubborn Attachments"
        />
        <div className="description">
          <h3>Hospedagem</h3>
          <h5>{prestador?.pbkPrice}</h5>
        </div>
      </div>
      <form
        action="http://localhost:5241/api/Checkout/create-checkout-session"
        method="POST"
      >
        <button type="submit">Finalizar pagamento</button>
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
          position: "relative",
        }}
      >
        <Grid container>
          <Grid item xs={0} sm={1} md={1}></Grid>
          <Grid
            item
            xs={12}
            sm={9}
            md={9}
            style={{
              backgroundColor: "white",
              maxWidth: "100%",
              marginBottom: 30,
              boxShadow: " 0px 14px 15px 5px rgba(0,0,0,0.26)",
              borderRadius: 10,
              marginTop: 30,
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
                }}
              >
                <CardPerson
                  personId={prestador?.id ?? 0}
                  personName={prestador?.useName ?? ""}
                  personDistance={prestador?.useDistance ?? ""}
                  personDistrict={prestador?.useDistrict ?? ""}
                  personDescription={prestador?.useProfileDescription ?? ""}
                  personPicture={prestador?.useProfilePicture ?? ""}
                  personRate="5"
                  personPrice="0"
                  buttonNotVisible
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={1} md={2} />
          <Grid item sm={1} md={1} />

          <Grid
            item
            xs={12}
            sm={5}
            md={5}
            style={{
              backgroundColor: "white",
              maxWidth: "100%",
              marginBottom: 30,
              boxShadow: " 0px 14px 15px 5px rgba(0,0,0,0.26)",
              borderRadius: 10,
              marginTop: 30,
              padding: 15,
            }}
          >
            <h3>Dados para confirmar pedido</h3>
            <br />
            Selecione a data de inicio e término da hospedagem: (O padrão da
            data é MÊS/DIA/ANO)
            <br />
            <RangePicker format={dateFormat} onChange={onChange} />
            <br />
            <br />
            <FormControl fullWidth>
              <InputLabel>Selecione seu pet:</InputLabel>
              <Select value={pet} label="Pet" onChange={handleChange}>
                <MenuItem value={10}>Gato</MenuItem>
                <MenuItem value={20}>Totó</MenuItem>
                <MenuItem value={30}>Princesa</MenuItem>
              </Select>
            </FormControl>
            <br />
            Dados de pagamento
            <div>
              {message ? <Message message={message} /> : <ProductDisplay />}
            </div>
          </Grid>
          <Grid item sm={1} md={1} />
        </Grid>
      </div>
    </>
  );
}

export { ConfirmacaoServico };
