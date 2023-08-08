import React, { useEffect, useState } from 'react'

function HookMouse() {
    const [coords , setCoords] = useState({x: 0, y: 0})

    const logMousePoition = e => {
        console.log('Mouse Event')
        setCoords({x: e.clientX, y: e.clientY})
    }
    useEffect(()=>{
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePoition)

        return () => {
            console.log('Component unmounting code')
            window.removeEventListener('mousemove', logMousePoition)
        }
    }, [])
  return (
    <div>
        X : {coords.x} Y : {coords.y}
    </div>
  )
}

export default HookMouse