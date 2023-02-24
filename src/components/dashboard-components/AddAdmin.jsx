import React, { useRef } from 'react'

export default function AddAdmin() {
  const refAdminName = useRef(null);
  const refPassword = useRef(null);
  return (
    <div className='mainContainer d-flex'>
        <div className="subContainer text-start">
          <div className="line d-flex">
              <h5 className='line-name'>Admin Username</h5>
              <input type="text" className='line-input' ref={refAdminName}/>
          </div>
          <div className="line d-flex">
              <h5 className='line-name'>Password</h5>
              <input type="password" className='line-input' ref={refPassword}/>
          </div>
          <button>Save</button>
        </div>
    </div>
  )
}
