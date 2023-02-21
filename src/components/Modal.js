import { useState } from 'react';
import { FaBackward, FaForward, FaWindowClose } from 'react-icons/fa';

const Modal = ({state, onClose, data, setCounter, indexImage, counter, updatePage, dataa}) => {
const [count, setCount] = useState(counter);
  return (
        
      state&&(
        <>
      <div className="modal z-50 w-screen h-screen fixed top-0 left-0 m-auto bg-black bg-opacity-90">
        <div className="modal-content flex flex-col relative justify-center items-center" onClick={(e)=>e.stopPropagation()}>
        
            <div className="modal-footer w-full flex flex-row justify-around p-2 text-white  text-3xl">
            {count>1?<button className="fixed top-2/4 left-0 rounded-3xl bg-green-800 p-2" onClick={()=>{setCounter(indexImage=>indexImage-1); }}><FaBackward/></button>:''}
            <button className='fixed top-2/4 right-0 rounded-3xl bg-green-800 p-2' onClick={()=>{setCounter(indexImage=>indexImage+1);setCount(prev=>prev+1);if(count===dataa.length-5){updatePage()}}}><FaForward/></button>
                <button className="fixed right-0 close rounded-3xl bg-green-800 p-2" onClick={()=>{onClose(false); setCounter(0); setCount(0)}}><FaWindowClose/></button>
            </div>
            <div className="main-content min-w-fit min-h-fit">
                <img alt="modal" src={data} className=" max-w-screen block"/>
            </div>
            
        </div>
      </div>
  
        
      </>
      )
      
    
  )
}

export default Modal
