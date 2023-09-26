import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

interface ICardPet {
  picture: string;
  name: string;
  kind: string;
}

export const CardPet = (values: ICardPet) => {
  return (
    <>
      <Card
        sx={{ maxWidth: 345, boxShadow: "0px 15px 15px 1px rgba(0,0,0,0.2)" }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={values.picture}
            alt={values.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {values.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {values.kind}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};
