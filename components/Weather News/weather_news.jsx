import React from 'react';
import { Row, Col, Card, } from "react-bootstrap";

export default function WeatherNews(){
    return(
        <div>
            <Card className="news-card">
          <Card.Title>News</Card.Title>
          <Card.Body>
            <Card.Subtitle>
            New 1
            </Card.Subtitle>
            <Card.Text>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.
            </Card.Text>
          </Card.Body>
          <Card.Body>
           <Card.Subtitle>New 2</Card.Subtitle>
          <Card.Text>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.
            </Card.Text>
          </Card.Body>
          <Card.Body>
          <Card.Subtitle>New 3</Card.Subtitle>
          <Card.Text>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
    )
}