import axios from "axios";

import { API_URL } from "../constants/index";

const url = API_URL;

export const fetchData = async () => {
  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } = {} } =
      await axios.get(url);

    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
  } catch (err) {
    console.log(err);
  }
};
