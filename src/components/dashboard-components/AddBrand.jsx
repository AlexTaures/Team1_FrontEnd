import React, { useRef } from 'react'

export default function AddBrand() {
  const refBrandName = useRef(null);
  return (
    <div className='mainContainer d-flex'>
        <div className="subContainer text-start">
          <div className="line d-flex">
              <h5 className='line-name'>Brand Name</h5>
              <input type="text" className='line-input' ref={refBrandName}/>
          </div>
          <button>Save</button>
        </div>
    </div>
  )
}
