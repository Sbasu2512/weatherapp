import React,{ useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import WeatherCard from "../components/card/card";
import SearchBar from "../components/globals/search";
import WeatherNews from '../components/Weather News/weather_news'

export default function Home() {

  const [location, setLocation] = useState("")

  useEffect(()=>{

  },[location])

  
  const handleLocation = (location) => {
    // console.log(location);
    setLocation(location)
  };

  return (
    <div className='section'>    
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
