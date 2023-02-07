import React from 'react'
import '../App.css'

const Image = ({imageUrl, item}) => {
  return (
      
    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
    src={imageUrl(item.server, item.id, item.secret)}/>
    
    )
}

export default Image