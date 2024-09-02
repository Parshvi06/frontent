import React from 'react'

const uploadingFile = () => {
  return (
    <div className='max-w-2xl mx-auto rounded-lg border-4 border-blue-300 flex justify-center p-8 mt-5'>
             <label htmlFor="uploadfile" 
             className='text-5xl font-bold text-blue-300'>⚡ Upload Your File</label>
             <input id='uploadfile' type="file" className='hidden' />
    </div>
  )
}

export default uploadingFile;