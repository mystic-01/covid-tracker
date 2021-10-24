import React, { useEffect, useState } from "react";

import "./App.css";

import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api/index";

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
    <div className="app">
      <Cards covidData={covidData} />
      <CountryPicker />
      <Chart />
    </div>
  );
};

export default App;
