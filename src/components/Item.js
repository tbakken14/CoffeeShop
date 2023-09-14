import React from "react";

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity : 100
        }
    }

    decrementQuantity() { 
        this.setState({ quantity : this.state.quantity - 10 });
    }

    render() {
        return ( 
            <React.Fragment>
                <div className="Item">
                    <h1>{this.props.name}</h1>
                    <h2>Origin: {this.props.origin}</h2>
                    <h2>Price: ${this.props.price}</h2>
                    <h2>Roast: {this.props.roast}</h2>
                    <h2>Quantity: {this.state.quantity}</h2>
                    <button onClick={this.decrementQuantity.bind(this)}>Sell Beans</button>
                </div>
            </React.Fragment>
            );
    }
}

export default Item;
