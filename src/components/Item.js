import React from "react";
import Details from "./Details";
import PropTypes from "prop-types";

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDetailsActive : false
        }
    }

    toggleDetails() {
        this.setState({ isDetailsActive : !this.state.isDetailsActive})
    }

    render() {
        let currentVisibleState = null;
        if (this.state.isDetailsActive) {
            const {name, ...details} = this.props;
            currentVisibleState = <Details {...details}/>
        }
        return ( 
            <React.Fragment>
                <div className="Item">
                    <h1>{this.props.name}</h1>
                    <button onClick={this.toggleDetails.bind(this)}>Show Details</button>
                    {currentVisibleState}
                </div>
            </React.Fragment>
            );
    }
}

Item.propTypes = {
    name: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    roast: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    delete: PropTypes.func.isRequired
};

export default Item;
