// import React from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import specialEdition from "@/Data/specialData";
// const SpecialEdition = () => {
//   return (
//     <section className="w-full max-w-[1440px] flex flex-col justify-center items-center py-10 lg:py-28">
//       <div className=" w-full flex flex-col justify-center items-center px-5 lg:px-16">
//         <h1 className="font-ogg font-normal text-[25px] sm:text-[30px] md:text-[38px] lg:text-[48px] leading-[28px] sm:leading-[35px] md:leading-[43px] lg:leading-[52px] text-center mb-3 lg:mb-6">
//           &quot;Unsere
//           <span className="text-[#B65033]"> Special Editions&quot;</span>
//         </h1>
//         <p className="w-full md:w-[60%] font-normal text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] font-Epilogue text-center mb-10 lg:mb-20">
//           Außergewöhnliche Hotels mit 101 Potenzial, die nicht im Ranking
//           vertreten sind – entdeckt in den Special Editions.
//         </p>
//         {/* Mobile Section */}
//         <div className="w-full lg:hidden flex justify-center items-center">
//           <Carousel
//             opts={{
//               align: "start",
//               loop: true,
//             }}
//             className="w-full relative"
//           >
//             <CarouselContent className="flex justify-start items-center w-full gap-4">
//               {specialEdition.map((item) => {
//                 return (
//                   <CarouselItem
//                     key={item.id}
//                     className="flex max-w-[368px] w-full"
//                   >
//                     <div className="w-full flex flex-col justify-center items-center">
//                       <h1 className="font-ogg font-normal text-[20px] sm:text-[26px] md:text-[32px] lg:text-[38px] text-center mb-3">
//                         {item.name}
//                       </h1>
//                       <div className="w-full relative group/show">
//                         <img className="w-full" src={item.img} alt="" />
//                         <div className="absolute w-full h-full bottom-0 left-0 bg-[#0000003D] hidden group-hover/show:flex justify-center items-center">
//                           <button className="w-[285px] h-[64px] font-Montserrat font-bold text-[12px] md:text-[14px] text-white bg-gradient-to-r from-[#F49E6E] to-[#B64F32] leading-[24px] text-center hover:scale-[1.05] active:scale-[1] ">
//                             SPECIAL EDITIONS ANSEHEN
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </CarouselItem>
//                 );
//               })}
//             </CarouselContent>
//           </Carousel>
//         </div>
//         {/* Display Section */}
//         <div className="w-full hidden lg:flex justify-center items-center">
//           <Carousel className="w-full relative group">
//             <CarouselContent className="flex justify-start items-end w-full">
//               {specialEdition.map((item) => {
//                 return (
//                   <CarouselItem
//                     key={item.id}
//                     className="max-w-[368px] max-h-[576px] hover:max-w-[740px] w-full group/show duration-500 cursor-pointer hover:mx-[-50px] hover:z-10"
//                   >
//                     <div className="w-full h-full  flex flex-col justify-center items-center">
//                       <h1 className="font-ogg font-normal text-[20px] sm:text-[26px] md:text-[32px] lg:text-[38px] text-center mb-3">
//                         {item.name}
//                       </h1>
//                       <div className="relative w-full h-full">
//                         <div className="w-full h-full group-hover/show:max-w-[730px]">
//                           <img
//                             className="w-full h-full "
//                             src={item.img}
//                             alt=""
//                           />
//                           <div className="absolute w-full h-full bottom-0 left-0 bg-[#0000003D] hidden group-hover/show:flex justify-center items-center">
//                             <div className="w-full flex justify-center items-center">
//                               <button className="w-[285px]  h-[64px] font-Montserrat font-bold text-[12px] md:text-[14px] text-white bg-gradient-to-r from-[#F49E6E] to-[#B64F32] leading-[24px] text-center mt-[-500px]">
//                                 SPECIAL EDITIONS ANSEHEN
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </CarouselItem>
//                 );
//               })}
//             </CarouselContent>
//             <div className="absolute top-60 left-0 hidden md:group-hover:block">
//               <CarouselPrevious />
//             </div>
//             <div className="absolute top-60 right-0 hidden md:group-hover:block">
//               <CarouselNext />
//             </div>
//           </Carousel>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SpecialEdition;
