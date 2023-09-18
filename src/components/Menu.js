import Item from "./Item";

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

export default Menu;