import React from 'react'
import '../../assets/css/main.css';
import { useNavigate } from 'react-router-dom';

export default function AddCategory() {
    const navigate=useNavigate();
  return (
   <>
   
     <div className='container'>
        <div className='text-base font-medium mb-5'>
            <span><i class='bx bx-left-arrow-alt text-lg'></i> Add Category</span>
        </div>
       <div className='row d-flex '>
         <div class="relative col col-md-4">
            <div className='form-group'>
             <label class="absolute -top-1 left-7 font-semibold text-xs text-gray-400 dark:text-gray-400 transition-transform transform -translate-y-1/1 bg-white px-1">
               Category name
             </label>
             <input type='text' class="form-control shadow-none border rounded-lg px-3 py-2 mb-5 text-sm"/>
          </div>
          </div>
          <div class=" relative col col-md-4 ">
          <div className='form-group'>
             <label class="absolute -top-1 left-7 font-semibold text-xs text-gray-400 dark:text-gray-400 transition-transform transform -translate-y-1/1 bg-white px-1">
               Category sequence
             </label>
             <input type='text' class="form-control shadow-none border rounded-lg px-3 py-2 mb-5 text-sm"/> 
          </div>
          </div>
            {/* <div className='col-md-4'> </div> */}
       </div>
       <div className='row d-flex'>
       <div class="relative col col-md-2">
            <div className='form-group'>
             <label class="absolute -top-1 left-7 font-semibold text-xs text-gray-400 dark:text-gray-400 transition-transform transform -translate-y-1/1 bg-white px-1">
               upload image
             </label>
             <img src='https://media.istockphoto.com/id/178716575/photo/mobile-devices.jpg?s=612x612&w=0&k=20&c=9YyINgAbcmjfY_HZe-i8FrLUS43-qZh6Sx6raIc_9vQ=' className='border rounded-lg px-5 py-4' alt='img' />
          </div>
          </div>
          <div class="relative col col-md-2">
          <div class="file-upload-container text-center">
         
            <label for="file-upload">
                <i class='bx bx-image-alt text-6xl '></i>
                <p class='text-xs px-2'>Upload maximum allowed file size is 10MB</p>
            </label>
            <input id="file-upload" type="file" className='border border-dashed rounded-lg' alt='img'/>
        </div>
          </div>
       </div>
       <div className='row d-flex mt-5'>
       <div className='d-flex justify-content-end align-items-end'>
       <button type="button" class="mt-3 border border-radius rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={()=>navigate(-1)}>Cancle</button>
       <button type="button" class=" border border-radius rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm bg-[#5d1689] sm:ml-3 sm:w-auto" >Save</button>
       </div>
     </div>
     </div>
    
    
   </>
  )
}