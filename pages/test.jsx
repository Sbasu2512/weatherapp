import React from "react";
import { Col, Card, Row } from "react-bootstrap";

export default function TestPage() {
    return(
        <div>
        <Card style={{ width: '350px', height:'50px', padding:'10px' }}>
    <Card.Title>Monday 14</Card.Title>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Text>
        <Row>
        <Col xs={6}>
      21 C
      <br/>
      Cloudy
        </Col>
        <Col xs={6}>
      Feels like
      <br/>
      Humidity
      <br/>
      Wind
        </Col>
        </Row>
    </Card.Text>
  </Card.Body>
</Card>
        </div>
    )
}