import React from 'react'
import '../App.css'

const Image = ({item}) => {
    //Creating url for images from Img state
  const imageUrl = (farm,serverId, id, secret) => {
      //let urlImage = `https://live.staticflickr.com/${serverId}/${id}_${secret}_w.jpg`;
      let urlImage = `http://farm${farm}.staticflickr.com/${serverId}/${id}_${secret}_b.jpg`;
      return urlImage;
  };
  return (
      
    <img alt="gallery" className="block object-cover object-center w-full h-screen rounded-lg lg:h-full md:h-full sm:h-full"
    src={imageUrl(item.farm, item.server, item.id, item.secret)}/>
    
    )
}

export default Image