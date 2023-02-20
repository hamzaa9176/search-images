import {  useEffect, useState } from 'react'
import '../App.css'
import Modal from './Modal'

const Image = ({ item, indexImage, dataa}) => {

  const [modalState, setModalState] = useState(false);
  const [counter, setCounter] = useState(indexImage);

  //prevetning body from scrolling while modal is open
  modalState?(document.body.style.overflow = 'hidden'):(document.body.style.overflow = 'unset')
  //Creating url for images from Img state
  const imageUrl = (farm, serverId, id, secret) => {
    //let urlImage = `https://live.staticflickr.com/${serverId}/${id}_${secret}_w.jpg`;
    let urlImage = `http://farm${farm}.staticflickr.com/${serverId}/${id}_${secret}_b.jpg`;
    return urlImage;
  };
  return (
    <>
    
      <Modal onClose={setModalState}  setCounter={setCounter} indexImage={indexImage} state={modalState} data={imageUrl(dataa[counter].farm, dataa[counter].server, dataa[counter].id, dataa[counter].secret)} />

      <img alt='ciao' onClick={() => setModalState(true)} className="block object-cover object-center w-full h-screen rounded-lg lg:h-full md:h-fit sm:w-full md:w-full"
        src={imageUrl(item.farm, item.server, item.id, item.secret)} />
    </>
  )
}

export default Image