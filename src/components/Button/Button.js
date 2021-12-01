import React from 'react'
import './Button.css'

export default function Button({props}) {
    return (
        <button class="btn btn-green" style={{width: props.width !== undefined ? props.width : "auto"}}>
            {props.labelText}
        </button>
    )
}
