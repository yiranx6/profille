import React from "react"
import Clock from 'react-live-clock'

function Time() {
    return (
        <div className="flex flex-col text-center lg:mt-24
             font-mono text-4xl md:text-6xl lg:text-8xl  
            font-extrabold text-transparent 
            bg-clip-text bg-gradient-to-r from-indigo-500 via-black to-white">
             <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
             <div>Welcome</div>
        </div>
    )
}

export default Time
