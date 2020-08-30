import React, { Component } from 'react'
import { Button,Jumbotron } from 'reactstrap';
import Slides from './Slides';
export default class Home extends Component {
    render() {
        return (
            <div>
                
                <Jumbotron>
                  <h1>ยินดีต้อนรับสู่เว็บไซต์</h1> <br/><Slides/><br/>
                <Button>เข้าสู่หน้าหลัก</Button> 
                </Jumbotron>
                

            </div>
        )
    }
}