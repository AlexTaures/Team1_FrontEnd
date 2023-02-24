import React, { useRef } from 'react'

export default function AddCategory() {
  const refCatName = useRef(null);

  return (
    <div className='mainContainer d-flex'>
        <div className="subContainer text-start">
          <div className="line d-flex">
              <h5 className='line-name'>Category Name</h5>
              <input type="text" className='line-input' ref={refCatName}/>
          </div>
          <button>Save</button>
        </div>
    </div>
  )
}
