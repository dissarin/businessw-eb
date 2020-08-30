import React, { Component } from 'react'
import data from '../Data';
import {Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button,Row,Col}from 'reactstrap';
export default class Products extends Component 
{
    render() 
    {
        return (
            <div>
                <h2>สินค้าทั้งหมด</h2>
                <Row>
                {
                    data.products.map(item =>
                        <Col md={4}>
                            <Card>
                                <CardImg src={item.pic} />
                                <CardBody>
                                    <CardText>MAXMISS</CardText>
                                    <CardTitle>{item.name} </CardTitle>
                                    <CardSubtitle>ราคา {item.price} บาท</CardSubtitle>
                                    <CardSubtitle>จำนวนคงเหลือง {item.stock} ชิ้น</CardSubtitle>
                                    <Button>ซื้อสินค้า</Button>    
                                </CardBody>
                            </Card>
                        </Col>
                    )
                }
                </Row>
            </div>
        )
    }
}
