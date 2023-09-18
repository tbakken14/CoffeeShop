import React from "react";
import Menu from "./Menu";
import FormControl from "./FormControl";

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems : [{name: "Java", origin: "Colombia", price:"10", roast: "Dark", id: -2},
                         {name: "Lima", origin: "Peru", price:"3", roast: "Light", id: -1}],
            id : 0
        }
    }

    addItem(newMenuItem) { 
        newMenuItem.id = this.state.id;
        const newMenuItems = this.state.menuItems.concat(newMenuItem);
        this.setState({ menuItems : newMenuItems,
                        id : this.state.id + 1 });
    }

    deleteItem(index) {
        this.state.menuItems.splice(index, 1);
        this.setState({ menuItems : this.state.menuItems });
    }

    render() {
        return (
            <React.Fragment>
                <div className="Content">
                    <Menu 
                        items={this.state.menuItems} delete={this.deleteItem.bind(this)}/>
                    <FormControl 
                        addItem={this.addItem.bind(this)} />
                </div>
            </React.Fragment>
            );
    }
}

export default Content;
