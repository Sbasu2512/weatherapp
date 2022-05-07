import Head from "next/head";
import Image from "next/image";
import { Row, Col, Card, Button } from "react-bootstrap";
import WeatherCard from "../components/card/card";
import SearchBar from "../components/globals/search";

export default function Home() {
  
  const handleLocation = (location) => {
    console.log(location)
  }
  
  return (
    <Row>
      <Col xs={10} style={{ height: "100vh" }}>
        <Row>
          <section>
            <Card style={{ width: "730px", padding:'0px 5px' }}>
              <Row> <SearchBar handleLocation={handleLocation} /> </Row> 
              <Row></Row>
              <Row>
              <Col xs={4}>
              <Card.Body>
                <Card.Title className="basic font-20">New York, US </Card.Title>
                <div>
                  <p className="bold font-50" >84 F</p>
                  
                  <p>Feels like 79F</p>
                  
                  <p className="basic font-30" >Partly Cloudy</p>
                </div>
              </Card.Body>
                </Col>              
                <Col xs={8}>
                  <p style={{marginTop:'10px', padding:'10px'}}>Quote of the Day:</p>
                  <Row style={{marginTop:'50px', padding:'10px'}} >
                    "lorem ipsum lorem isum lorem ipsum lorem ipsum lorem isum lorem ipsum lorem ipsum lorem isum lorem ipsum"
                  </Row>
                </Col>
                </Row>               
            </Card>
          </section>
        </Row>
        <Row style={{ marginTop: "50px" }}>
          <Col xs={5}>
            <WeatherCard />
          </Col>
          <Col xs={5}>
            <WeatherCard />
          </Col>
        </Row>
      </Col>
      <Col xs={2} style={{ height: "100vh" }}>
        Weather News Sidebar
      </Col>
    </Row>
  );
}
