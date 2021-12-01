import React from 'react'

export default function Header({props}) {
    return (
        <div className="header" style={{width: props.width !== undefined ? props.width : "auto"}}>
            <h1>{props.caption}</h1>
            <p>{props.description}</p>
        </div>
    )
}
