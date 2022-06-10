// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default async function handler(req, res) {
  // console.log('**',process.env.WEATHER_API)
  console.log("++", req.query);
  let lat, lon, weatherData;
  const { location, countryCode } = req.query;
  // res.status(200).json({ name: 'request received' })
  const response = await axios
    .get(
      `${process.env.GEOCODING_API}/geo/1.0/direct?q=${location},${countryCode}&appid=${process.env.WEATHER_API}`
    )
    .then((res) => {
      // return res;
      if (res.status === 200) {
        return res.data;
      } else {
        return `Error`;
      }
    });
  if (response !== "Error") {
    response.map((item) => {
      if (item.name.toLowerCase() == location.toLowerCase()) {
        if (item.country.toLowerCase() == countryCode.toLowerCase()) {
          lat = item.lat;
          lon = item.lon;
        }
      }
    });
  } else {
    res.status(500).json('Internal Server Error');
  }

  if(lat !== '' & lon  !==''){
    weatherData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API}`).then((res)=>{
      return res.data
    })
  } else {
    res.status(500).json('Internal Server Error');
  }

  res.status(200).json(weatherData);

}
