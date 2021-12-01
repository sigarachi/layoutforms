import React from 'react'
import './Panel.css'
import * as Components from '../index'

export default function Panel({props}) {
    return (
        <div className="panel" style={{width: props.width !== undefined ? props.width : "auto"}}>
            <div className="panel-caption">
                <h3 className="panel-capiton">{props.caption}</h3>
            </div>
            <div className="panel-body">
                {props.componentList.length > 0 && props.componentList.length !== undefined ? props.componentList.map((prop,index) =>{
                    const Component = Components[prop.type]

                    return <Component props={prop} />
                }) : <></>}
            </div>
        </div>
    )
}
