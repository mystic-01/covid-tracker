import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

import "./Cards.css";

const Cards = ({ covidData }) => {
  const displayData = [
    {
      title: "Infected",
      data: "",
      date: "",
      subtitle: "Number of active cases of COVID-19",
    },
    {
      title: "Recovered",
      data: "",
      date: "",
      subtitle: "Number of recoveries from COVID-19",
    },
    {
      title: "Deaths",
      data: "",
      date: "",
      subtitle: "Number of deaths caused by COVID-19",
    },
  ];
  return (
    <div className="cards">
      <Grid container spacing={3}>
        {displayData.map((item) => (
          <Grid item component={Card} key={item.title}>
            <Typography color="textSecondary">{item.title}</Typography>
            <Typography variant="h5">{item.data}</Typography>
            <Typography color="textSecondary">{item.date}</Typography>
            <Typography variant="body1">{item.subtitle}</Typography>
          </Grid>
        ))}
      </Grid>
      <CardContent />
    </div>
  );
};

export default Cards;
