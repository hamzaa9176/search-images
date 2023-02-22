import { useEffect } from "react";
import { useState } from "react";
import "../App.css";
import Modal from "./Modal";

const Image = ({ item, indexImage, dataa, updatePage, getModalState }) => {
  const [modalState, setModalState] = useState(false);
  const [counter, setCounter] = useState(indexImage);

  useEffect(() => {
    if (modalState) {
      document.body.style.overflow = 'hidden'
    }else {
      document.body.style.overflow = 'scroll'
    }
  }, [modalState])

  useEffect(
    () =>
      getModalState(modalState),
      // eslint-disable-next-line
    [modalState]
  );

  //Creating url for images from Img state
  const imageUrl = (farm, serverId, id, secret) => {
    //let urlImage = `https://live.staticflickr.com/${serverId}/${id}_${secret}_w.jpg`;
    let urlImage = `http://farm${farm}.staticflickr.com/${serverId}/${id}_${secret}_b.jpg`;
    return urlImage;
  };
  return (
    <>
      <Modal
        onClose={setModalState}
        dataa={dataa}
        counter={counter}
        updatePage={updatePage}
        setCounter={setCounter}
        indexImage={indexImage}
        state={modalState}
        data={imageUrl(
          dataa[counter].farm,
          dataa[counter].server,
          dataa[counter].id,
          dataa[counter].secret
        )}
      />

      <img
        alt="ciao"
        onClick={() => setModalState(true)}
        className="block relative object-cover object-center w-full h-screen rounded-lg lg:h-full md:h-fit sm:w-full md:w-full"
        src={imageUrl(item.farm, item.server, item.id, item.secret)}
      />
    </>
  );
};

export default Image;
