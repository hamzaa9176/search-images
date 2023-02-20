import React from 'react'
import { FaBackward, FaForward, FaWindowClose } from 'react-icons/fa';

const Modal = ({state, onClose, data, setCounter, indexImage}) => {

  return (
        
      state&&(
        <>
         
      <div className="modal w-screen h-screen fixed top-0 left-0 m-auto bg-black z-50 bg-opacity-60">
        <div className="modal-content flex flex-col justify-center items-center" onClick={(e)=>e.stopPropagation()}>
        
            <div className="modal-footer w-full flex flex-row justify-center p-2 text-white font-medium">
            {<button onClick={()=>{setCounter(indexImage=>indexImage-1);}}><FaBackward/></button>}
            <button className='ml-3' onClick={()=>{setCounter(indexImage=>indexImage+1);}}><FaForward/></button>
                <button className="close ml-2" onClick={()=>{onClose(false); setCounter(0)}}><FaWindowClose/></button>
            </div>
            <div className="main-content ">
                <img alt="modal" src={data} className="w-screen h-max block"/>
            </div>
            
        </div>
      </div>
  
        
      </>
      )
      
    
  )
}

export default Modal
