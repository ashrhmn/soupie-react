import React from 'react'
import logo from '../SVG/logo.svg'
import cup from '../SVG/cup.svg'

function TestComponent() {
    return (
        <div>
            <div>
                <img src={logo} alt="" />
                <img src={cup} alt="" />
            </div>
        </div>
    )
}

export default TestComponent
