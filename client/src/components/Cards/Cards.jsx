import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";

import "./Cards.css";

const Cards = ({ covidData: { confirmed, recovered, deaths, lastUpdate } }) => {
  const displayData = [
    {
      title: "Infected",
      data: confirmed?.value,
      date: new Date(lastUpdate).toDateString(),
      subtitle: "Number of active cases of COVID-19",
      className: "cards__infected",
    },
    {
      title: "Recovered",
      data: recovered?.value,
      date: new Date(lastUpdate).toDateString(),
      subtitle: "Number of recoveries from COVID-19",
      className: "cards__recovered",
    },
    {
      title: "Deaths",
      data: deaths?.value,
      date: new Date(lastUpdate).toDateString(),
      subtitle: "Number of deaths caused by COVID-19",
      className: "cards__deaths",
    },
  ];

  return (
    <div className="cards">
      <Grid container spacing={3} justifyContent="space-between">
        {displayData.map((item) => (
          <Grid
            item
            xs={12}
            md={3}
            component={Card}
            className={`cards__card ${item.className}`}
            key={item.title}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={item.data}
                  duration={2}
                  separator={","}
                />
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                {item.date}
              </Typography>
              <Typography variant="body1">{item.subtitle}</Typography>
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Cards;
