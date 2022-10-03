// import React from "react";
// import { useState } from "react";


// // import Imagen1 from "../assets/carousell.jpg"
// import Imagen2 from "../assets/CarouselProd.jpg"
// import Imagen3 from "../assets/carousel.webp"

// import styles from './../styles/Carousel.module.css'

// const Carousel = () => {

//    let image = [ Imagen2, Imagen3];

//    const [currentPage, setCurrentPage] = useState(1);
//    const [imagePerPage, setImagePerPage] = useState(1);
//    const indexOfLast = currentPage * imagePerPage;
//    const indexOfFirst = indexOfLast - imagePerPage;
//    const currentImage = image.slice(indexOfFirst, indexOfLast);
//    const paginated = (pageNumber) => {
//      setCurrentPage(pageNumber);
//    };

//   const handleClick = (e) => {


//     setCurrentPage(currentPage + 1)
//   }


  

//   return (
//     <div className={styles.container_slider}>
//       <div className={styles.slider} id="slider">
//         <div className={styles.slider_section}>
//           <img src={Imagen2} className={styles.slider_img} />
//         </div>
//         <div className={styles.slider_section}>
//           <img src={Imagen3} className={styles.slider_img} />
//         </div>
//         <div className={styles.slider_section}>
//           <img 
//           src={Imagen2} 
//           className={styles.slider_img} />
//         </div>
//       </div>
      
//         <button 
//         className={styles.btn_right} 
//         onClick= {e => handleClick(e)}
//         >
//           &#62;
//         </button>
      
//         <button className={styles.btn_left}>
//           &#60;
//         </button>
//     </div>
//   );
// };

// export default Carousel;

/*
{ /*<div className="Slide" type={images}>
      <div className="Slide_Container">
        {images.map((image, index) => (
          <img
            src={image.src.Image1}
            alt={image.title}
            
          />
        ))}
        <button>OFERTAS</button>
        <div className="Slide_Container_Title">{images[activeIndex].title}</div>
      </div>
        </div>*/



import React from 'react'

// import Image from '../assets/oferta.jpg '

const Oferts = () => {



  return (
    <div>
     <img src={''}></img> 
    </div>
  )
}

export default Oferts
