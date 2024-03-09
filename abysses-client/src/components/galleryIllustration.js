import React from 'react'
import { Link } from 'react-router-dom'

function GalleryIllustration(data) {
  return (
    <div>
      <Link to="/card">
        <img className="glow-img glow" style={{ margin: "20px", width: "140px", }} 
        src={(`./img/galleries/gallery_1/fishes_${data.index}.jpg`)}/>
      </Link>
    </div>
  )
}

export default GalleryIllustration