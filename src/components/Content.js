import React from "react";
import Menu from "./Menu";
import FormControl from "./FormControl";

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems : [{name: "Java", origin: "Colombia", price:"10", roast: "Dark"},
                         {name: "Lima", origin: "Peru", price:"3", roast: "Light"}]
        }
    }

    addItem(newMenuItem) { 
        const newMenuItems = this.state.menuItems.concat(newMenuItem);
        this.setState({ menuItems : newMenuItems});
    }

    render() {
        return (
            <React.Fragment>
                <div className="Content">
                    <Menu 
                        items={this.state.menuItems} />
                    <FormControl 
                        addItem={this.addItem.bind(this)} />
                </div>
            </React.Fragment>
            );
    }
}

export default Content;
