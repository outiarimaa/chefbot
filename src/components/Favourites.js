import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './App.css';

class Favourites extends Component {

    render() {
        return (
            <div>
                <p id="favtitle">Our all-time favorite recipes</p>

                <Grid className="testi">
                    <Row>
                        <Col xs={6} md={5}>
                            <a href="#johanna" data-toggle="collapse">
                                <Image src="https://images.pexels.com/photos/46247/thai-food-noodle-fried-noodles-meal-46247.jpeg?cs=srgb&dl=chopsticks-cuisine-dinner-46247.jpg&fm=jpg" circle width="200" height="120"/></a>
                            <div id="johanna" class="collapse">
                                <h4>Johanna<br/>
                                    My favorite is<br/>
                                    chicken wok!</h4>
                            </div>
                        </Col>
                        <Col xs={6} md={5}>
                            <a href="#juukeli" data-toggle="collapse">
                                <Image src="https://img.taste.com.au/NtQQVTyu/taste/2016/11/gluten-free-lasagne-93960-1.jpeg" circle width="200" height="120" /></a>
                            <div id="juukeli" class="collapse">
                                <h4>Juuso<br/>
                                    I love<br/>
                                    lasagne!</h4>
                            </div>
                        </Col>
                        <Col xs={6} md={5}>
                            <a href="#outi" data-toggle="collapse">
                                <Image src="https://images.pexels.com/photos/262982/pexels-photo-262982.jpeg?cs=srgb&dl=cooking-cuisine-delicious-262982.jpg&fm=jpg" circle width="200" height="120" /></a>
                            <div id="outi" class="collapse">
                                <h4>Outi<br/>
                                    My favorite<br/>is soy<br/>
                                    glazed salmon!</h4>
                            </div>
                        </Col>
                        <Col xs={6} md={5}>
                            <a href="#aleksi" data-toggle="collapse">
                                <Image src="https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?cs=srgb&dl=blur-close-up-cooking-723198.jpg&fm=jpg" circle width="200" height="120" /></a>
                            <div id="aleksi" class="collapse">
                                <h4>Allu<br/>
                                    turpa kiinni</h4>
                            </div>
                        </Col>
                        <Col xs={6} md={5}>
                            <a href="#jani" data-toggle="collapse">
                                <Image src="https://images.pexels.com/photos/722670/spaghetti-bolognese-food-rustic-722670.jpeg?cs=srgb&dl=board-bolognese-carbohydrates-722670.jpg&fm=jpg" circle width="200" height="120" /></a>
                            <div id="jani" class="collapse">
                                <h4>Jani<br/>
                                    I love<br/>
                                    spaghetti bolognese!</h4>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Favourites;