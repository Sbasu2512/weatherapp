import React from 'react';
import { Row, Col, Card, } from "react-bootstrap";

export default function WeatherNews(props){
    const {news} = props;
    // console.log('i m news', news)  
    
  return(
        <div>
            <Card className="news-card">
          <Card.Title>News</Card.Title>
          {
            news.map(data => 
          (<Card.Body>
            <Card.Subtitle>
            {data.title}
            </Card.Subtitle>
            <br/>
            <Card.Text>
              {data.description}
            </Card.Text>
          </Card.Body>))
          }
        </Card>
        </div>
    )
}