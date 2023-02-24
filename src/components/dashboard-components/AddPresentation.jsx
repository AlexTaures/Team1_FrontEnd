import React, { useRef } from 'react'

export default function AddPresentation() {
  const refPresentation = useRef(null);
  
  return (
    <div className='mainContainer d-flex'>
        <div className="subContainer text-start">
          <div className="line d-flex">
              <h5 className='line-name'>Presentation Name</h5>
              <input type="text" className='line-input' ref={refPresentation}/>
          </div>
          <button>Save</button>
        </div>
    </div>
  )
}
