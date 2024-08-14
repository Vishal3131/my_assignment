import React, { useEffect, useState } from 'react'

export default function Modal({togglebtn,title,description}) {
    const [Hidden, setHidden]=useState(true)
  useEffect(()=>{
    setHidden(togglebtn)
  },[togglebtn])

  const handleBtn=()=>{
    setHidden(true)
    localStorage.removeItem('token')
  }
    
  return (
    <>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="false">
 
  <div class=" inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

  <div className= {`${(Hidden) ?'hidden':''} fixed inset-0 z-10 w-screen overflow-y-auto`}>
    <div class="flex min-h-full items-start justify-center p-4 text-center sm:items-center sm:p-0">
     
      <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-96 sm:max-w-lg">
        <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start"> 
            <div class="mx-auto  h-12 w-12 flex-shrink-0 flex items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <div class="mt-3 text-start sm:ml-4 sm:mt-0 sm:text-center">
              <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">{title}</h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500">{description}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-3 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button type="button" class=" justify-center rounded-md  px-2 py-2 text-sm font-semibold text-white shadow-sm bg-[#5d1689] sm:ml-3 sm:w-auto" onClick={handleBtn}>Confirm</button>
          <button type="button" class=" justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={()=>setHidden(true)}>Cancle</button>
        </div>
      </div>
    </div>
  </div>
</div>

    
    </>
  )
}
