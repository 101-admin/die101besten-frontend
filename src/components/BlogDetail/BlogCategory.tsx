// import React from "react";
// import Image from "next/image";

// const BlogCategory = () => {
//   return (
//     <div className="w-full  pb-12 pt-12 lg:pt-20">
//       <div className="max-w-[1312px] mx-auto  px-5 lg:px-16">
//         <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center">
//           {/* Image */}
//           <div className="w-full lg:w-1/2 rounded-lg overflow-hidden">
//             <Image
//               src="/blogdetail/image.svg"
//               alt="Blog"
//               width={632}
//               height={552}
//               className="w-full h-auto object-cover"
//               priority
//             />
//           </div>

//           {/* Text Content */}
//           <div className="w-full lg:w-1/2 flex flex-col">
//             <div className="max-w-[632px] space-y-6">
//               <div className="inline-block border border-black rounded-sm px-2 py-1">
//                 <h2 className="text-[12px] font-bold leading-[12px] tracking-[0] text-center uppercase font-montserrat text-black">
//                   BLOG KATEGORIE
//                 </h2>
//               </div>

//               <div className="space-y-6">
//                 <p className="font-ogg font-normal text-2xl leading-[40px] tracking-[0]">
//                   Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
//                   eleifend tellus.
//                 </p>

//                 <p className="font-gte text-xl font-[350] leading-8 tracking-[0]">
//                   Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
//                   enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
//                   tellus. Phasellus viverra nulla ut metus varius laoreet.
//                 </p>
//               </div>

//               <button className="w-[300px] h-[64px] px-6 py-3 border-2 border-black text-[16px] font-bold leading-[24px] tracking-[0] uppercase font-montserrat hover:bg-black hover:text-white transition-colors duration-300">
//                 WEITERLESEN
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogCategory;

import React from "react";
import Image from "next/image";

const BlogCategory = () => {
  return (
    <div className="w-full pb-12 pt-12 lg:pt-20  px-5 sm:px-6 md:px-16">
      <div className="max-w-[1312px] w-full mx-auto">
        <div className="w-full flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-center lg:items-start justify-between">
          {/* Image */}
          <div className="w-full lg:w-1/2 rounded-lg overflow-hidden">
            <Image
              src="/blogdetail/image.svg"
              alt="Blog"
              width={632}
              height={552}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="max-w-[632px] space-y-6">
              <div className="inline-block border border-black rounded-sm px-2 py-1">
                <h2 className="text-[12px] font-bold leading-[12px] tracking-[0] text-center uppercase font-montserrat text-black">
                  BLOG KATEGORIE
                </h2>
              </div>

              <div className="space-y-6">
                <p className="font-ogg font-normal text-2xl leading-[40px] tracking-[0]">
                  Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
                  eleifend tellus.
                </p>

                <p className="font-gte text-xl font-[350] leading-8 tracking-[0]">
                  Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                  enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                  tellus. Phasellus viverra nulla ut metus varius laoreet.
                </p>
              </div>

              <button className="w-[300px] h-[64px] px-6 py-3 border-2 border-black text-[16px] font-bold leading-[24px] tracking-[0] uppercase font-montserrat hover:bg-black hover:text-white transition-colors duration-300">
                WEITERLESEN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCategory;
