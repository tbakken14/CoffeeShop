import React from "react";
import Details from "./Details";

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

export default Item;
