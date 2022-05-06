import Head from "next/head";
import Image from "next/image";
import { Row, Col, Card, Button } from "react-bootstrap";
import WeatherCard from "../components/card/card";
import SearchBar from "../components/globals/search";

export default function Home() {
  return (
    <Row>
      <Col xs={10} style={{ height: "100vh" }}>
        <Row>
          <section>
            <Card style={{ width: "730px", padding:'0px 5px' }}>
              <Row> <SearchBar/> </Row> 
              <Row>2</Row>
              <Row>3</Row>               
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
