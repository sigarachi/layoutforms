import React from 'react'
import './Combobox.css'

export default function Combobox({props}) {
    return (
        <div className="full-input">
            <label htmlFor='text'>{props.label}</label>
            <select name="text">
                <option value="value1">Доверенность</option>
                <option value="value2">Другой документ</option>
            </select>
        </div>
    )
}
