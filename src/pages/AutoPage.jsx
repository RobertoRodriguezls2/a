import React from 'react'
import Topmenu from '../components/Topmenu'
import bulkAuto from '../exportImg/BulkAuto';
import './Portfolio.css'
import Masonry from 'react-masonry-css'
function AutoPage() {
  return (
    <div>
      <Topmenu />
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {bulkAuto.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              srcSet={img}
              className='pics'
              alt={img}
              loading="lazy"
            />
          </div>
        ))}
      </Masonry>
    </div>
  )
}

export default AutoPage