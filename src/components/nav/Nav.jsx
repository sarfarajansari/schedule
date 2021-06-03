import React from 'react'
import "./nav.css"
import app_data from "../app_data/app_data"

export default function Nav() {
    return (
        <div className="nav-container">
            <div className="projname">{app_data.name}</div>
        </div>
    )
}
