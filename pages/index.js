import axios from "axios";
import React,{ useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import WeatherCard from "../components/card/card";
import SearchBar from "../components/globals/search";
import WeatherNews from '../components/Weather News/weather_news'
import { countryCodes } from "../countryCodes";
// import { fetchGeocode } from "../lib/weather";

// export const getServerSideProps = async (context) => {
//   const weather_key=process.env.WEATHER_API;
// const geo_url = process.env.GEOCODING_API;

  // console.log(process.env.WEATHER_API);

//   console.log(context.params);

  // let location = context.params.location;
  // let country = context.params.country;

  // const res = await fetch(`${geo_url}/geo/1.0/direct?q=${location},${country}&appid=${weather_key}`)
  // const articles = await res.json()

//   return {
//     props: {
      // articles,
//     },
//   }
// }
export default function Home({articles}) {

  const [location, setLocation] = useState("")
  const [country, setCountry] = useState("")
  const [countryCode, setCountryCode] = useState("")

  useEffect(()=>{
    // let countryCode;
    if(country !== ""){
      countryCodes.map((item) => {
        if(item.Name.toLowerCase() == country.toLowerCase()){
          // countryCode = item.Code;
          setCountryCode(item.Code);
        }
      })
    }
    // console.log(countryCode)

  },[location, country])

  useEffect(()=>{
    if(location !== '' && countryCode !== ''){
      axios.get(`/api/hello`,{
        params:{
          location:location,
          countryCode: countryCode,
        }
      }).then((res)=>{
        console.log(res.data)
      })
    }
  },[location, countryCode])

  
  const handleLocation = (location) => {
    if(location !== ''){
      const arr = location.split(/,|[ ]/).filter((item) => item !== '')
      setLocation(arr[0])
      
      if(arr.length > 2){
        let countryString = arr.slice(1,).join(' ');
        
        setCountry(countryString)
      } else {
        setCountry(arr[1])
      }
    }
    
  };

  return (
    <div className='section'>    
    {console.log(location,country)}
    <Row>
      <Col xs={8} style={{ height: "100vh" }}>
        <Row>
          <section>
            <Card style={{ width: "730px", padding: "0px 5px" }}>
              <Row>
                {" "}
                <SearchBar handleLocation={handleLocation} />{" "}
              </Row>
              <Row></Row>
              <Row>
                <Col xs={4}>
                  <Card.Body>
                    <Card.Title className="basic font-20">
                      New York, US{" "}
                    </Card.Title>
                    <div>
                      <p className="bold font-50">84 F</p>

                      <p className="basic font-15">Feels like 79F</p>

                      <p className="basic font-30">Partly Cloudy</p>
                    </div>
                  </Card.Body>
                </Col>
                <Col xs={8}>
                  <p
                    className="bold font-50"
                    style={{ marginTop: "10px", padding: "10px" }}
                  >
                    Quote of the Day:
                  </p>
                  <Row
                    className="quote font-20"
                    style={{ marginTop: "10px", padding: "10px" }}
                  >
                    "lorem ipsum lorem isum lorem ipsum lorem ipsum lorem isum
                    lorem ipsum lorem ipsum lorem isum lorem ipsum" <br /> -
                    Lorem Ipsum
                  </Row>
                </Col>
              </Row>
            </Card>
          </section>
        </Row>
        <Row style={{ marginTop: "40px", gap: "70px" }}>
          <Col xs={5}>
            <WeatherCard />
          </Col>
          <Col xs={5}>
            <WeatherCard />
          </Col>
        </Row>
      </Col>
      <Col xs={4} className="news">
        <WeatherNews/>
      </Col>
    </Row>
    </div>
  );
}
