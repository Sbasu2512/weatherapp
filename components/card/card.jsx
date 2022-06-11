import React from "react";
import { Card, Row, Col, ListGroup } from "react-bootstrap";

const unixToTime = (milsecs) => {
  console.log(milsecs);
  const newDate = new Date(milsecs);
  console.log(newDate);
  return newDate.getHours();
}


export default function WeatherCard(props) {
  const {weatherData} = props;

  return (
      <Card
        className="white-bg"
        style={{ width:"125%", height: "350px", padding: "10px" }}
      >
        <Card.Title>Weather Details</Card.Title>
        <Card.Body>
          
            <Row>
              <Col xs={5}>
                  <Row style={{ marginTop: "5px" }}>
                   <Card.Text>
                    {weatherData?.main?.temp}
                    <br />
                    {weatherData?.weather[Array.length-1]?.description.charAt(0).toUpperCase() + weatherData?.weather[Array.length-1]?.description.slice(1)}
                   </Card.Text>
                  </Row>
                <Row>
                  {/* <Card.Img
                    src="/icons/cloud/5.png"
                    className="width-200"
                  /> */}
                   <ListGroup>
                <ListGroup.Item>Sunrise: {unixToTime(weatherData?.sys?.sunrise)} AM </ListGroup.Item>
                <ListGroup.Item>Sunset: {unixToTime(weatherData?.sys?.sunset)} PM </ListGroup.Item>
                
                <ListGroup.Item>Updated At: {unixToTime(weatherData?.dt)}  </ListGroup.Item>
                </ListGroup>
                </Row>
              </Col>
              <Col xs={7} style={{marginTop:'80px'}} >
                  
                <ListGroup>
                <ListGroup.Item>Max Temp: {weatherData?.main?.temp_max} C</ListGroup.Item>
                <ListGroup.Item>Min Temp: {weatherData?.main?.temp_min} C</ListGroup.Item>
                <ListGroup.Item>Humidity: {weatherData?.main?.humidity} </ListGroup.Item>
                <ListGroup.Item>Wind Speed: {weatherData?.wind?.speed} m/s </ListGroup.Item>
                </ListGroup>
                 
              </Col>
            </Row>
          
        </Card.Body>
      </Card>
  );
}
