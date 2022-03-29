import React from 'react'
import Topmenu from '../components/Topmenu'
import bulkLand from '../exportImg/BulkLand';
import './Portfolio.css'
import Masonry from 'react-masonry-css'

function LandPage() {
  return (
    <div>
      <Topmenu />
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {bulkLand.map((img, index) => (
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

export default LandPage