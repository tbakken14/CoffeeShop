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
                <div className="item">
                    <h1>{this.props.name}</h1>
                    <h1>{this.props.origin}</h1>
                    <h1>{this.props.price}</h1>
                    <h1>{this.props.roast}</h1>
                    <h1>{this.state.quantity}</h1>
                    <button onClick={this.decrementQuantity.bind(this)}>Sell Beans</button>
                </div>
            </React.Fragment>
            );
    }
}

export default Item;
