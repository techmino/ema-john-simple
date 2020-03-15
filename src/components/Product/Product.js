import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css';

const Product = (props) => {
    //console.log(props);
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product">

            <div>
                <img src={img} alt="" />
            </div>
            <div>+-----
                <h4 className="poduct-name">{name}</h4>
                <br />
                <p>by: {seller}</p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                <button className="main-button"
                    onClick={() => props.handleAppProduct(props.product)}
                >
                    <FontAwesomeIcon icon={faShoppingCart} />Add to Cart</button>

            </div>


        </div>
    );
};

export default Product; 