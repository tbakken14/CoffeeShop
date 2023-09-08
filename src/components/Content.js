import React from "react";
import Menu from "./Menu";
import Form from "./Form";

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeForm : false,
            menuItems : {}
        }
    }

    handleClick() {
        this.setState({ activeForm : true });
    }

    handleSubmit() {
        this.setState({ menuItems : {}})
    }

    render() {
        let currentVisibleState = null;
        if (this.state.activeForm) {
            currentVisibleState = <Form onclick={this.handleSubmit.bind(this)}/>;
        }
        else {
            currentVisibleState = <Menu items={this.state.menuItems}/>;
        }
        return (
            <React.Fragment>
                <div className="Content">
                    <Menu 
                        items={this.state.menuItems}/>
                    <Form 
                        onclick={this.handleSubmit.bind(this)} 
                        activeForm={this.state.activeForm}/>
                </div>
            </React.Fragment>
            );
    }
}

export default Content;
