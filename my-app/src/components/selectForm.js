import React from "react";

function SelectForm(props){
    return(
        <>
        
        <label>{props.textlable}:</label>
        <select
           onChange = {e => props.onChange(e)}
           //onClick = {e => props.onClick(e)}
        >
            {props.options && props.options.map(function(item){    
                return <option  value={item['value']}>{item['label']}</option>
            })}
             
        </select>
        </>
    );
}

export default SelectForm