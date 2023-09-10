import React from "react";

function Form(props){
    return ( 
    <React.Fragment>
        <div className="Form">
            <form onSubmit={props.onSubmit}>
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" name="name" required/>
                <br/>
                <label htmlFor="origin">Origin:</label>
                <input id="origin" type="text" name="origin" required/>
                <br/>
                <label htmlFor="price">Price:</label>
                <input id="price" type="number" name="price" required/>
                <br/>
                <label htmlFor="roast">Roast:</label>
                <input id="roast" type="text" name="roast" required/>
                <br/>
                <button type="submit" >Submit</button>
            </form>
        </div>
    </React.Fragment>
    );
}

export default Form;