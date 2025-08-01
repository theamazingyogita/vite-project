
import gallery_1 from '../../assets/gallery-1.png'

import gallery_2 from '../../assets/gallery-2.png'

import gallery_3 from '../../assets/gallery-3.png'

import gallery_4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'
import './Campus.css'
const Campus = () => {
  return (
    <div className='section'>
        <div className="gallery">
             <img src={gallery_1} alt="" className='image' />
             <img src={gallery_2}  alt="" className='image'  />
             <img src= {gallery_3} alt="" className='image' />
             <img src={gallery_4}  alt=""className='image' />
        </div>
        <button className='btn dark-btn'>See more here<img src ={white_arrow} className='white-arrow'/></button>
    </div>
  )
}

export default Campus