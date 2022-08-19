import React, { useState } from 'react'

const ActiveIcon = ({ normalUrl='', activeUrl='', trigger='hover', width='36', height= '36', active = false, onClick= null }) => {
  const [light, setLight] = useState(active || false)

  let event: any = {}
  switch (trigger) {
    case 'hover':
      event.onMouseOver = () => {
        setLight(true)
      }
      event.onMouseOut = () => {
        setLight(false)
      }
      break

    case 'click':
      event.onClick = () => {
        setLight(!active)
      }
      break

    default:
      break
  }
  return (
    <div onClick={onClick} {...event}>
      <img
        style={{ display: !light ? 'block' : 'none' }}
        src={normalUrl} width={width} height={height}
      />

      {trigger && (
        <img
          style={{ display: light ? 'block' : 'none' }}
          src={activeUrl} width={width} height={height}
        />
      )}
    </div>
  )
}

export default ActiveIcon