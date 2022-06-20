import React from "react"

function InputForm(props){

    return(
        <>
            <label>{props.textlable}</label>
            <input type={props.type}
            className="form-control" 
            value={props.value}
            placeholder={props.placeholder} 
            onChange={e=>props.onChange(e)}
            />
        </>
    )
}

export default InputForm