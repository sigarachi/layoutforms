import React from 'react'
import * as Components from '../index'

export default function Verticallayout({props}) {
    return (
        <div className="verticalLayout" style={{width: props.width !== undefined ? props.width : "auto"}}>
            {props.componentList.length > 0 && props.componentList.length !== undefined ? props.componentList.map((prop,index) =>{
                const Component = Components[prop.type]

                return <Component props={prop} />
            }) : <></>}
        </div>
    )
}
