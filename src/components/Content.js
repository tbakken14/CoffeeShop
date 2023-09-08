import React from "react";
import Menu from "./Menu";
import FormControl from "./FormControl";

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems : {}
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="Content">
                    <Menu 
                        items={this.state.menuItems}/>
                    <FormControl />
                </div>
            </React.Fragment>
            );
    }
}

export default Content;
