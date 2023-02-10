import React from 'react'

const NoImage = ({word}) => {
  return (
    <div className='  text-white flex flex-row justify-center mt-20'>
      <div className=" w-fit  p-20 NoImg bg-red-700 rounded-2xl text-center font-medium text-2xl">
      No Image Found for: {word}
      </div>
    </div>
  )
}

export default NoImage