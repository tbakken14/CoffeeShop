import React from "react";

function Item(props){
    return ( 
    <React.Fragment>
        <div className="item">{props.name}</div>
    </React.Fragment>
    );
}

export default Item;