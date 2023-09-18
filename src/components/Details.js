import React from "react";

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity : 130,
            revenue : 0
        }
    }

    sellOne() { 
        this.setState({ quantity : this.state.quantity - 1 });
        this.setState({ revenue : this.state.revenue + parseFloat(this.props.price) });
    }

    render() {
        return ( 
            <React.Fragment>
                <div className="Details">
                    <h2>Origin: {this.props.origin}</h2>
                    <h2>Price: ${this.props.price}</h2>
                    <h2>Roast: {this.props.roast}</h2>
                    <h2>Quantity: {this.state.quantity}</h2>
                    <h2>Revenue: ${this.state.revenue}</h2>
                    <button onClick={this.sellOne.bind(this)}>Sell Beans</button>
                    <button onClick={() => this.props.delete(this.index)}>Delete Item</button>
                </div>
            </React.Fragment>
            );
    }
}

export default Details;