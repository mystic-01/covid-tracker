import React, { useEffect, useState } from "react";

import "./App.css";

import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api/index";
import { ThemeProvider } from "@material-ui/core";

import theme from "./theme";

const App = () => {
  const [covidData, setCovidData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setCovidData(data);
    };
    getData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Cards covidData={covidData} />
        <CountryPicker />
        <Chart />
      </div>
    </ThemeProvider>
  );
};

export default App;
