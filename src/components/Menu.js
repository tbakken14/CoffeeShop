import React from "react";
import Item from "./Item";

function Menu(props){
  return ( 
    <React.Fragment>
        <div className="Menu">
            Menu
            {props.items.map((e, i) => <Item {...e} key={i}/>)}
        </div>
    </React.Fragment>
  );
}

export default Menu;