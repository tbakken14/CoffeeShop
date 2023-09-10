import React from "react";
import Form from "./Form";

class FormControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFormActive : false,
        }
    }

    handleClick() {
        this.setState({ isFormActive : true});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addItem(this.formToJSON(event.target));
        this.setState({ isFormActive : false });
    }

    formToJSON(form) {
        return Array.from(form.getElementsByTagName("input"))
            .reduce((accumulator, currentValue) =>
                {
                    accumulator[currentValue.id] = currentValue.value;
                    return accumulator;
                },
                {})
    }

    render() {
        let currentVisibleState = null;
        if (this.state.isFormActive) {
            currentVisibleState = <Form onSubmit={this.handleSubmit.bind(this)}/>
        }
        else {
            currentVisibleState = <button onClick={this.handleClick.bind(this)}>Add Item</button>
        }
        return (
            <React.Fragment>
                {currentVisibleState}
            </React.Fragment>
            );
    }
}

export default FormControl;
