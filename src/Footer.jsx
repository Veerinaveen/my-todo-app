import React from 'react'

const Footer = ({items}) => {
  return (
    <div className='footer'>
      <p>{items} list {items === 1 ? "item" : "items"}.</p>
    </div>
  )
}

export default Footer
