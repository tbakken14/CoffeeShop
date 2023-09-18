import Item from "./Item";
import PropTypes from "prop-types";

function Menu(props){
    return ( 
        <>
            <h1>Menu</h1>
            <div className="Menu">
                {props.items.map((e, i) => <Item {...e} key={i} index={i} delete={props.delete}/>)}
            </div>
        </>
    );
}

Menu.propTypes = {
    items: PropTypes.array.isRequired,
    delete: PropTypes.func.isRequired
};

export default Menu;