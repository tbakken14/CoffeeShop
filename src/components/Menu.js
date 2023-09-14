import React from "react";
import Item from "./Item";

function Menu(props){
  return ( 
    <React.Fragment>
        <h1>Menu</h1>
        <div className="Menu">
            {props.items.map((e, i) => <Item {...e} key={i}/>)}
        </div>
    </React.Fragment>
  );
}

export default Menu;