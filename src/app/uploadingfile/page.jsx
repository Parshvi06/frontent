'use client'
import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';

const uploadingFile = () => {
  
  const handleUpload=(e)=>{
    const file=e.target.files[0];

    const formData=new FormData();
    formData.append('file',file)
    formData.append('upload_preset','mypreset');
    formData.append('cloud_name','dmnl8ozex');

    axios.post('https://api.cloudinary.com/v1_1/dmnl8ozex/image/upload',formData,{
      headers:{'Content-Type':'multipart/form-Data'}
    })
    .then((result) => {
      console.log(result.data);
      toast.success('File Uploaded Successfully');
      
      
    }).catch((err) => {
      console.log(err);
      toast.error('Failed to Upload File');
      
      
    });

  }

  return (
    <div className='max-w-2xl mx-auto rounded-lg border-4 border-blue-300 flex justify-center p-8 mt-5'>
             <label htmlFor="uploadfile" 
             className='text-5xl font-bold text-blue-300'>⚡ Upload Your File</label>
             <input onChange={handleUpload} id='uploadfile' type="file" className='hidden' />
    </div>
  )
}

export default uploadingFile;