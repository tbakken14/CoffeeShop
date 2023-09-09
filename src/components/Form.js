import React from "react";

function Form(props){
    return ( 
    <React.Fragment>
        <div className="Form">
            <form onSubmit={props.onSubmit}>
                <label for="name">Name:</label>
                <input id="name" type="text" name="name" required/>
                <br/>
                <label for="origin">Origin:</label>
                <input id="origin" type="text" name="origin" required/>
                <br/>
                <label for="price">Price:</label>
                <input id="price" type="number" name="price" required/>
                <br/>
                <label for="roast">Roast:</label>
                <input id="roast" type="text" name="roast" required/>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    </React.Fragment>
    );
}

export default Form;