import React from "react";
import { Card, Row, Col, ListGroup } from "react-bootstrap";

export default function WeatherCard() {
  return (
      <Card
        className="white-bg"
        style={{ width: "350px", height: "350px", padding: "10px" }}
      >
        <Card.Title>Monday 14</Card.Title>
        <Card.Body>
          
            <Row>
              <Col xs={5}>
                <Row>
                  <Card.Img
                    src="/icons/cloud/5.png"
                    className="width-200"
                  />
                </Row>
                <Row style={{ marginTop: "60px" }}>
                 <Card.Text>
                  21 C
                  <br />
                  Cloudy
                 </Card.Text>
                </Row>
              </Col>
              <Col xs={7} style={{marginTop:'80px'}} >
                  
                <ListGroup>
                  <ListGroup.Item>Feels Like: 23</ListGroup.Item>
                  <ListGroup.Item>Humidity: 90</ListGroup.Item>
                  <ListGroup.Item>Wind Speed: 45km/h</ListGroup.Item>
                </ListGroup>
                 
              </Col>
            </Row>
          
        </Card.Body>
      </Card>
  );
}
