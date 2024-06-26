// 'use client'
//
// import React, { useState } from 'react';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Icons from '../../../../../public/Icons';
//
// function SampleNextArrow(props: any) {
//   const { onClick } = props;
//   return (
//     <div onClick={onClick} className={'bg-error absolute inset-y-0 left-0'}>
//       <Icons name={'direction-left-gray'} />
//     </div>
//   );
// }
//
// function SamplePrevArrow(props: any) {
//   const { onClick } = props;
//   return (
//     <div onClick={onClick} className={'bg-emerald-700 absolute inset-y-0 right-0'}>
//       <Icons name={'direction-right'} />
//     </div>
//   );
// }
// export default function ICarousel() {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />
// };
//   return (
//     <div className={'bg-fuchsia-400 text-secondary-17'}>
//       <Slider {...settings}>
//         <div className={'flex'}>
//           <p>6219 8610 0784 1232</p>
//           <p>بـلو بـانـک</p>
//           <Icons name={'Bank-Blu'} />
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//       </Slider>
//     </div>
//   );}
