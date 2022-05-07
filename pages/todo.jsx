import React from 'react';
import { Row, Card, Button } from 'react-bootstrap';

export default function ToDO() {
    return(
        <div>
        <Row>
            <Card>
                <Card.Title className='text-center bold font-50' >To Do's</Card.Title>
                <Card.Body>
                    <input type="textbox"
                    className='w-700 padding-5'
                    />
                    <Button
                    className='margin-10'
                    >Add</Button>
                </Card.Body>
            </Card>
        </Row>
        <Row>
            <div style={{backgroundColor:'#fff', marginTop:'10px', width:'100%'}} >
                <input type='checkbox' value='id' name='vehicle1' style={{borderRadius:'100%'}} />
                <label for="vehicle1" style={{margin:'5px'}} > Buy a Bike </label><br></br>
                <input type='checkbox' value='id' name='vehicle1' style={{borderRadius:'100%'}} />
                <label for="vehicle1" style={{margin:'5px'}} > Buy a Bike </label><br></br>
                <input type='checkbox' value='id' name='vehicle1' style={{borderRadius:'100%'}} />
                <label for="vehicle1" style={{margin:'5px'}} > Buy a Bike </label><br></br>
                <input type='checkbox' value='id' name='vehicle1' style={{borderRadius:'100%'}} />
                <label for="vehicle1" style={{margin:'5px'}} > Buy a Bike </label><br></br>
                <input type='checkbox' value='id' name='vehicle1' style={{borderRadius:'100%'}} />
                <label for="vehicle1" style={{margin:'5px'}} > Buy a Bike </label><br></br>
                <input type='checkbox' value='id' name='vehicle1' style={{borderRadius:'100%'}} />
                <label for="vehicle1" style={{margin:'5px'}} > Buy a Bike </label><br></br>
                <input type='checkbox' value='id' name='vehicle1' style={{borderRadius:'100%'}} />
                <label for="vehicle1" style={{margin:'5px'}} > Buy a Bike </label><br></br>
            </div>
        </Row>
        </div>
    )
}