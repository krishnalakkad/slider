import './Slider.css';
import React, { useState } from 'react';

const Slider = () => {
     const [currentIndex, setCurrentIndex] = useState(0);

     const images = [
          'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
          'https://st2.depositphotos.com/7980778/11764/i/950/depositphotos_117643032-stock-photo-cute-baby-boy.jpg',
          'https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg',
          'https://i.pinimg.com/originals/da/d9/d5/dad9d5c4b64fe76d915fe3ae3fa54530.jpg',
          'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg',
          'https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Mahadev-Bhagwan-Photo-for-Devotee.jpg',
          'https://cdn2.sharechat.com/cutecate_3b58e8d7_1640279144191_sc_exp_cmprsd_75.jpg',
          'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
     ];

     const handlePrev = () => {
          setCurrentIndex(prevIndex =>
               prevIndex === 0 ? images.length - 1 : prevIndex - 1
          );
     };

     const handleNext = () => {
          setCurrentIndex(prevIndex =>
               prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
     };
     return (
          <>
               <div className="custom-slider">
                    <img
                         src={images[currentIndex]}
                         alt={`Image ${currentIndex + 1}`}
                         className="slider-image"
                    />

                    <button onClick={handlePrev} className="slider-button prev-button">
                         Prev
                    </button>
                    <button onClick={handleNext} className="slider-button next-button">
                         Next
                    </button>
               </div>
          </>
     )
}

export default Slider