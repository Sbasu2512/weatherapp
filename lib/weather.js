import axios from "axios";

const weather_key=process.env.WEATHER_API;
const geo_url = process.env.GEOCODING_API;

export const fetchGeocode = (location, country) => {
  axios
    .get(
      `${geo_url}/geo/1.0/direct?q=${location},${country}&appid=${weather_key}`
    )
    .then((res) => {
      return res.data;
    });
};
