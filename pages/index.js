import Head from 'next/head'
import Image from 'next/image'
import {Container,Row, Col} from 'react-bootstrap'
import Card from '../components/card/card'
import Dashboard from '../components/Sidebar/Dashboard'


export default function Home() {
  return (
    <Row>
    <Col xs={8} style={{height:'100vh'}}>
    <Row style={{height: '50vh'}}>
Top Part
    </Row>
    <Row style={{height: '50vh'}}>
      <Card/>
    </Row>
    </Col >
    <Col xs={4} style={{height:'100vh'}} >
    Weather News Sidebar
    </Col>
    </Row>
  )
}
