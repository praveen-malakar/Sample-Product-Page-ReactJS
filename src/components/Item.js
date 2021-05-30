import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import "./style.css";

const Item = (props) => {
    const [showImage, setImage] = useState("red");
    const [selectedValue, setSelectedValue] = useState(1);
    const [isOutOfStock, setOutOfStock] = useState(false);

    const description =
        props.description !== null
            ? props.description.slice(3, props.description.length - 4)
            : "";
    const handleChange = (e) => {
        setSelectedValue(e.target.value)
    }

    return (
        <Row className="item">
            <Col sm={6} className="p-5 text-center">
                <Col sm={12} className="p-4" style={{height:'350px'}}>
                    {showImage === "red" ? <img width={"50%"} src={"https://pngimg.com/uploads/polo_shirt/polo_shirt_PNG8165.png"}/>
                : showImage === "black" ? <img width={"50%"} src={"https://i.pinimg.com/originals/e9/b3/6f/e9b36f1da1d55a5da867f09d67d779c5.jpg"}/>
                : <img width={"50%"} src={"https://i.pinimg.com/originals/2f/bb/66/2fbb6650a2b6b07aee93909b1f248e24.png"}/>}
                </Col>
                    <Col sm={12} className="p-4 thumbnail">
                    <img className={showImage==="red" && 'active'}
                         onClick={() => {setImage("red");setOutOfStock(false);}}
                         src={"https://pngimg.com/uploads/polo_shirt/polo_shirt_PNG8165.png"}/>
                    <img className={showImage==="white" && 'active'}
                         onClick={() => {setImage("white");setOutOfStock(true);}}
                         src={"https://i.pinimg.com/originals/2f/bb/66/2fbb6650a2b6b07aee93909b1f248e24.png"}/>
                    <img className={showImage==="black" && 'active'}
                         onClick={() => {setImage("black");setOutOfStock(false);}}
                         src={"https://i.pinimg.com/originals/e9/b3/6f/e9b36f1da1d55a5da867f09d67d779c5.jpg"}/>
                </Col>
            </Col>
            <Col className="info">
                <h2>{props.name}</h2>
                <br />
                <br />
                {description}
                <Row className="buttonRow">
                    <Col>
                        <p>Available Colors:</p>
                        <Button id="red" className={showImage==="red" && 'active'}
                                onClick={() => {setImage("red");setOutOfStock(false);}}>
                        </Button>
                        <Button id="white" className={showImage==="white" && 'active'}
                                onClick={() => {
                                    setImage("white");
                                    setOutOfStock(true);
                                }}>
                        </Button>
                        <Button id="black" className={showImage==="black" && 'active'}
                                onClick={() => {setImage("black");setOutOfStock(false);}}>
                        </Button>
                    </Col>
                    <Col>
                        <p>Select Quantity:</p>
                        <select style={{width:'100px'}} disabled={isOutOfStock} defaultValue={selectedValue}
                                onChange={handleChange}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </Col>
                    <Col style={{ textAlign: "right" }}>
                        <p>Price:{props.price.formatted_with_symbol}</p>
                        <a href='#'>
                            {selectedValue > 5 && <label className={"text-danger"}>Restricted quantity max 5</label> }
                            <Button id="cart" variant="primary" disabled={selectedValue > 5 || isOutOfStock}>
                                {isOutOfStock ? 'Out of stock' : 'Add To Cart'}
                            </Button>
                        </a>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Item;
