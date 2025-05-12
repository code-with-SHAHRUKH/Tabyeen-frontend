import React from 'react';
import Image from 'next/image';



const Banner = () => {
    return (
<div className="mx-auto w-full lg:max-w-7xl mt-0 py-3 pt-0">
    <div className="relative block md:mx-4"> 
        <Image
            src={'/PodCastBanner.webp'}
            alt="billboard"
            className="w-full rounded-b-lg shadow-[0px_4px_4px_rgba(0,0,0,0.2)] 
                       h-[15rem] sm:h-[18rem] lg:h-[25rem] object-cover"
            width={0}
            height={0}
            sizes="100vw"
            style={{ 
                objectFit: 'cover', 
                objectPosition: 'center 50%', // Center focus with top alignment
                width: '100%', 
                height: '100%'
            }} 
        />
    </div>
</div>




    );
};

export default Banner;
