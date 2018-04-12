import React, { Component } from 'react';
import './App.css';

class Recommended extends Component {

    render() {
        return (

            <div>

                <div className="row">
                    <div className="col-sm-4">
                        <a data-toggle="modal" data-target="#myModal">SALMON SASHIMI</a>
                        <img
                            src="https://images.pexels.com/photos/628776/pexels-photo-628776.jpeg?cs=srgb&dl=asian-food-bowl-chopsticks-628776.jpg&fm=jpg"
                            className="img-responsive margin" alt="food"/>
                        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        <h4 className="modal-title">Salmon sashimi</h4>
                                    </div>
                                    <div className="modal-body">
                                        <p><b>Ingredients</b><br/><br/>
                                            1 Sashimi grade salmon filet<br/>
                                            Pure sesame seed oil<br/>
                                            Toasted sesame seeds<br/>
                                            Korean spicy sauce <br/>
                                            Fresh pickled ginger – to garnish<br/>
                                            Watercress – to garnish</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-default" data-dismiss="modal">Close
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <a data-toggle="modal" data-target="#myModal2">AVOCADO TOAST</a>
                        <img
                            src="https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?cs=srgb&dl=appetizer-avocado-bread-566566.jpg&fm=jpg"
                            className="img-responsive margin" alt="food"/>
                        <div id="myModal2" className="modal fade" role="dialog">
                            <div className="modal-dialog">


                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        <h4 className="modal-title">Avocado toast</h4>
                                    </div>
                                    <div className="modal-body">
                                        <p><b>Ingredients</b><br/><br/>
                                            One 8-ounce ripe avocado, halved, pitted and peeled<br/>
                                            Fine salt and freshly ground black pepper<br/>
                                            4 slices whole grain or whole wheat bread<br/>
                                            1 clove garlic, peeled and halved<br/>
                                            2 tablespoons extra-virgin olive oil or unsalted butter, softened<br/>
                                            Flaky sea salt, for serving<br/>
                                            Crushed red pepper flakes, optional<br/><br/>

                                            <b>Directions</b><br/><br/>
                                            Mash the avocado with a fork in a shallow bowl until chunky. Season with
                                            fine salt and black pepper.<br/>

                                            Toast the bread until browned and crisp. <br/>
                                            Lightly rub 1 side of each slice with the cut side of the garlic until
                                            fragrant; discard the garlic. <br/>
                                            Lightly brush the toasts with oil, and season with fine salt and pepper.
                                            Divide the mashed avocado evenly among the toasts, <br/>
                                            and top with more flaky sea salt, more black pepper and red pepper flakes if
                                            using.<br/><br/>

                                            Copyright 2015 Television Food Network, G.P. All rights reserved</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-default" data-dismiss="modal">Close
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <a data-toggle="modal" data-target="#myModal3">BUTTERNUT SQUASH SOUP</a>
                        <img
                            src="https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?cs=srgb&dl=appetizer-bowl-bread-539451.jpg&fm=jpg"
                            className="img-responsive margin" alt="food"/>
                        <div id="myModal3" className="modal fade" role="dialog">
                            <div className="modal-dialog">


                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        <h4 className="modal-title">Butternut squash soup</h4>
                                    </div>
                                    <div className="modal-body">
                                        <p><b>Ingredients</b><br/><br/>
                                            1 butternut squash, about 1kg, peeled and deseeded<br/>
                                            2 tbsp olive oil<br/>
                                            1 tbsp butter<br/>
                                            2 onions, diced<br/>
                                            1 garlic clove, thinly sliced<br/>
                                            2 mild red chillies, deseeded and finely chopped<br/>
                                            850ml hot vegetable stock<br/>
                                            4 tbsp crème fraîche, plus more to serve<br/><br/>

                                            <b>Directions</b><br/><br/>
                                            Heat oven to 200C/180C fan/gas 6. Cut the squash into large cubes, about 4cm/1½in across, <br/>
                                            then toss in a large roasting tin with half the olive oil. Roast for 30 mins, turning once <br/>
                                            during cooking, until golden and soft.<br/><br/>

                                            While the squash cooks, melt the butter with the remaining oil in a large saucepan, then <br/>
                                            add the onions, garlic and ¾ of the chilli. Cover and cook on a very low heat for 15-20 mins <br/>
                                            until the onions are completely soft.<br/><br/>

                                            Tip the squash into the pan, add the stock and the crème fraîche, then whizz with a stick <br/>
                                            blender until smooth. For a really silky soup, put the soup into a liquidiser and blitz it in batches. <br/>
                                            Return to the pan, gently reheat, then season to taste. Serve the soup in bowls with swirls of crème fraîche <br/>
                                            and a scattering of the remaining chopped chilli.

                                        </p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-default" data-dismiss="modal">Close
                                        </button>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Recommended;