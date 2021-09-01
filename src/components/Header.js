import React from 'react'
import Button from "./Button"

const Header = (props) => {
    const onClick = () =>{
        // console.log("clicked");
    }

    const flexHeader = {
        display: "flex",
        justifyContent: "space-around",
    }

    return (
        <div style={flexHeader}>
            <h1>{props.title}</h1>
            {/* <Button color="green" text="Add todo" onClick={onClick}/> */}
        </div>
    )
}

export default Header
