import React, { useRef } from 'react'

export default function AddProducts() {
  const refName = useRef(null);
  const refDesc = useRef(null);
  const refAmount = useRef(null);
  const refPrice = useRef(null);
  const refAddDate = useRef(null);
  const refExpDate = useRef(null);
  const refBrandId = useRef(null);
  const refPresId = useRef(null);
  const refCatId = useRef(null);

  return (
    <div className='mainContainer d-flex'>
        <div className="subContainer text-start">
          <div className="line d-flex">
              <h5 className='line-name'>Name</h5>
              <input type="text" className='line-input' ref={refName}/>
          </div>
          <div className="line d-flex">
              <h5 className='line-name'>Descripcion</h5>
              <input type="text" className='line-input' ref={refDesc}/>
          </div>
          <div className="line d-flex">
              <h5 className='line-name'>Price</h5>
              <input type="text" className='line-input' ref={refPrice}/>
          </div>
          <div className="line d-flex">
              <h5 className='line-name'>Amount</h5>
              <input type="text" className='line-input' ref={refAmount}/>
          </div>
          <div className="line d-flex">
              <h5 className='line-name'>Addmision Date</h5>
              <input type="date" className='line-input' ref={refAddDate}/>
          </div>
          <div className="line d-flex">
              <h5 className='line-name'>Expiration Date</h5>
              <input type="date" className='line-input' ref={refExpDate}/>
          </div>
          <div className="line d-flex">
              <h5 className='line-name'>Brand Id</h5>
              <input type="text" className='line-input' ref={refBrandId}/>
          </div>
          <div className="line d-flex">
              <h5 className='line-name'>Presentation Id</h5>
              <input type="text" className='line-input' ref={refPresId}/>
          </div>
          <div className="line d-flex">
              <h5 className='line-name'>Category Id</h5>
              <input type="text" className='line-input' ref={refCatId}/>
          </div>
          <button>Save</button>
        </div>
        
      </div>
  )
}
