import React from 'react'
import { useState } from 'react'



const AddTodo = ({onAdd}) => {
    const [text, setText] = useState(" ")

    function onSubmit(e){
    e.preventDefault()

    // if(!text){
    //     alert("please add text")
    //     return
    // }

    onAdd({text})

    setText(" ")
}
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>todo</label>
                <input 
                type="text" 
                placeholder="add todo" 
                value={text}
                // we need this onChange handler bcos when we type in the input, its going to fire off the onChange handler
                onChange={(e)=> setText(e.target.value)}
                />
            </div>
            <input className="btn btn-block" type="submit" value="save todo"/>
        </form>
    )
}

export default AddTodo
