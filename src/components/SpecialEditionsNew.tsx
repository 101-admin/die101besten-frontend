// import React from 'react';
// import specialEdition from '@/Data/specialData';

// const SpecialEdition = () => {
//   return (
//     <section className='w-full flex flex-col justify-center items-center pb-[128px] gap-12'>
//       <div className=' w-full flex flex-col justify-center items-center px-8 gap-4'>
//         <h2 className='font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] text-center mb-3 lg:mb-6'>
//           &quot;Unsere
//           <span className='gradient-de-text'> Special Editions&quot;</span>
//         </h2>
//         <p className='w-full md:w-[60%] font-light text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] font-gte text-center mb-10 lg:mb-20'>
//           Außergewöhnliche Hotels mit 101 Potenzial, die nicht im Ranking
//           vertreten sind – entdeckt in den Special Editions.
//         </p>
//       </div>

//       {/* Mobile Section */}
//       <div className='w-full lg:hidden flex justify-center items-center'></div>

//       {/* Display Section */}
//       <div className='w-full hidden lg:flex justify-center items-center px-6 py-5'>
//         <div className='w-full flex justify-between items-end'>
//           {specialEdition.map((item) => {
//             return (
//               <div
//                 key={item.id}
//                 className='w-full h-full max-w-[368px] flex flex-col gap-4'
//               >
//                 <div className='w-full h-full flex align-baseline'>
//                   <h4 className='w-full max-w-[368px] font-ogg font-normal text-[38px] text-center'>
//                     {item.name}
//                   </h4>
//                 </div>
//                 <div className='w-full'>
//                   <img
//                     className='w-[368px] h-[480px] object-cover'
//                     src={item.img}
//                     alt=''
//                   />
//                   <div className='absolute w-full bottom-0 left-0 bg-[#0000003D] hidden group-hover:flex justify-center items-center'>
//                     <button className='btn-primary btn-primary-hover-de w-[285px]'>
//                       Special Editions ansehen
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SpecialEdition;
