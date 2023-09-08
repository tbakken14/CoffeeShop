import React from "react";

function Form(props){
    return ( 
    <React.Fragment>
        <div className="Form">
            <form onSubmit={(e) => props.onSubmit(e)}>
                <input type="text"/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    </React.Fragment>
    );
}

export default Form;