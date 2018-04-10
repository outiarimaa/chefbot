import React, { Component } from 'react';

class Recommended extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-4">
                        <p data-toggle="modal" data-target="#myModal">SALMON SASHIMI</p>
                        <img
                            src="https://images.pexels.com/photos/628776/pexels-photo-628776.jpeg?cs=srgb&dl=asian-food-bowl-chopsticks-628776.jpg&fm=jpg"
                            class="img-responsive margin" alt="Image"/>
                        <div id="myModal" class="modal fade" role="dialog">
                            <div class="modal-dialog">


                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        <h4 class="modal-title">Salmon sashimi</h4>
                                    </div>
                                    <div class="modal-body">
                                        <p>1 Sashimi grade salmon filet<br/>
                                            Pure sesame seed oil<br/>
                                            Toasted sesame seeds<br/>
                                            Korean spicy sauce <br/>
                                            Fresh pickled ginger – to garnish<br/>
                                            Watercress – to garnish</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-default" data-dismiss="modal">Close
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <p data-toggle="modal" data-target="#myModal2">AVOCADO TOAST</p>
                        <img
                            src="https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?cs=srgb&dl=appetizer-avocado-bread-566566.jpg&fm=jpg"
                            class="img-responsive margin" alt="Image"/>
                        <div id="myModal2" class="modal fade" role="dialog">
                            <div class="modal-dialog">


                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        <h4 class="modal-title">Avocado toast</h4>
                                    </div>
                                    <div class="modal-body">
                                        <p>Ingredients<br/>
                                            One 8-ounce ripe avocado, halved, pitted and peeled<br/>
                                            Fine salt and freshly ground black pepper<br/>
                                            4 slices whole grain or whole wheat bread<br/>
                                            1 clove garlic, peeled and halved<br/>
                                            2 tablespoons extra-virgin olive oil or unsalted butter, softened<br/>
                                            Flaky sea salt, for serving<br/>
                                            Crushed red pepper flakes, optional<br/>
                                            Directions<br/>
                                            Mash the avocado with a fork in a shallow bowl until chunky. Season with
                                            fine salt and black pepper.<br/>

                                            Toast the bread until browned and crisp. <br/>
                                            Lightly rub 1 side of each slice with the cut side of the garlic until
                                            fragrant; discard the garlic. <br/>
                                            Lightly brush the toasts with oil, and season with fine salt and pepper.
                                            Divide the mashed avocado evenly among the toasts, <br/>
                                            and top with more flaky sea salt, more black pepper and red pepper flakes if
                                            using.<br/>

                                            Copyright 2015 Television Food Network, G.P. All rights reserved</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-default" data-dismiss="modal">Close
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <p>BUTTERSQUASH SOUP</p>
                        <img
                            src="https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?cs=srgb&dl=appetizer-bowl-bread-539451.jpg&fm=jpg"
                            class="img-responsive margin" alt="Image"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Recommended;