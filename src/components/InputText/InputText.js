import React from 'react'
import './InputText.css'

export default function Inputtext({props}) {
    return (
        <div className="full-input">
            <label htmlFor='text'>{props.label}</label>
            <input type='text' name='text' />
        </div>
    )
}
