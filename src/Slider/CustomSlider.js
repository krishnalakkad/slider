     import './CustomSlider.css';
import React, { useState } from 'react';

const CustomSlider = ({ slides }) => {

     const [position, setPosition] = useState(0);

     const handlePre = () => {
          setPosition(prevIndex =>
               prevIndex === 0 ? images.length - 1 : prevIndex - 1
          );
     }

     const handleNext = () => {
          setPosition(prevIndex =>
               prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
     }

     const images = [
          'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
          'https://st2.depositphotos.com/7980778/11764/i/950/depositphotos_117643032-stock-photo-cute-baby-boy.jpg',
          'https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg',
          'https://i.pinimg.com/originals/da/d9/d5/dad9d5c4b64fe76d915fe3ae3fa54530.jpg',
          'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg',
          'https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Mahadev-Bhagwan-Photo-for-Devotee.jpg',
          'https://cdn2.sharechat.com/cutecate_3b58e8d7_1640279144191_sc_exp_cmprsd_75.jpg',
          'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
          'https://img.freepik.com/free-photo/cute-baby-with-toys_624325-3247.jpg?w=2000',
          'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/1200',
          'https://thumbs.dreamstime.com/b/cute-baby-towel-white-background-45103472.jpg',
          'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v1085-076a-kvvuf4jh.jpg?w=1200&h=1200&dpr=1&fit=clip&crop=default&fm=jpg&q=75&vib=3&con=3&usm=15&cs=srgb&bg=F4F4F3&ixlib=js-2.2.1&s=96542131be9aa08e17cd0d6b0682ae9c',
          'https://images.unsplash.com/photo-1636246441747-7d7f83f4629c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
          'https://img.freepik.com/free-photo/cute-baby-with-toys_624325-3247.jpg?w=2000',
     ] 
     
     const visibleImage = images.slice(position, position + slides)
     console.log('visibleImage',visibleImage);

     return (
          <>
               <div className='carousel'>
                    <button className='pre' onClick={handlePre}>&lt;</button>
                    <button className='next' onClick={handleNext}>&gt;</button>

                    <div className="container">
                         {visibleImage.concat(images).slice(0, slides).map((imageUrl, index) => (
                              <div className="images" key={index}>
                                   <img src={imageUrl} alt="" />
                              </div>
                         ))}
                    </div>
               </div>
          </>
     )
}

export default CustomSlider