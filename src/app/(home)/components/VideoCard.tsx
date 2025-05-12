import { Video,QuranReference } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const VideoCard = ({ term }: { term: Video }) => {
  // console.log("Term:",term);
  const getTimeAgo = (dateString: string) => {
    const now = new Date();
    const past = new Date(dateString);
    const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);
  
    const intervals = [
      { label: "year", seconds: 31536000 },
      { label: "month", seconds: 2592000 },
      { label: "week", seconds: 604800 },
      { label: "day", seconds: 86400 },
      { label: "hour", seconds: 3600 },
      { label: "minute", seconds: 60 },
      { label: "second", seconds: 1 },
    ];
  
    for (const interval of intervals) {
      const count = Math.floor(diffInSeconds / interval.seconds);
      if (count >= 1) {
        return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
      }
    }
  
    return "Just now";
  };
  

  const formatDuration = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return `${hours}:${minutes}:${remainingSeconds}`;
};

    return (
    //     <div
    //     key={video._id}
    //     className="shadow-sm border rounded-lg dark:bg-gray-800 w-[100%] sm:w-[90%] md:w-[80%] lg:w-[100%] max-w-[350px]"
    //   >
    //     <Link href={`/video/${video._id}`} className="block">
    //       <div className="relative w-full h-44">
    //         <Image
    //           src={video.thumbnail}
    //           alt={video.title ?? "Video title"}
    //           fill
    //           className="object-cover rounded-b-sm rounded-t-lg shadow-sm"
    //         />
    //           <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs font-semibold px-2 py-1 rounded">
    //           {video.duration?formatDuration(video.duration):'3:25'}
    //           </div>
    //       </div>
    //     </Link>
    //    <div className="p-2 flex justify-between items-center">
    //    {/* Left Side: Title & Time */}
    //    <div>
    //      <h5 className="text-md font-bold text-gray-900 dark:text-white">
    //        {video.title}
    //      </h5>
    //      <h6 className="text-sm font-semibold text-gray-600 dark:text-gray-400">
    //      {getTimeAgo(video.createdAt)}
    //      </h6>
    //    </div>
     
    //    {/* Right Side: Rounded Profile Image */}
      
    //  </div>
     
    //   </div>
<Link href={`/term/${term._id}`} className="block">
  <div className="bg-white rounded-md border border-gray-200 shadow-sm p-6 mb-6">
      {/* Term title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{term.termArabic} ({term.termRoman})</h2>

      {/* Explanation Section */}
      <div className="mb-4 space-y-1">
        <p><span className="font-semibold">Explanation (English):</span> {term.explanationEnglish}</p>
        <p><span className="font-semibold">Explanation (Urdu):</span> {term.explanationUrdu}</p>
        <p><span className="font-semibold">Explanation (Hindi):</span> {term.explanationHindi}</p>
      </div>

      {/* Source and Reference */}
      {/* <div className="mb-4">
        <p><span className="font-semibold">Source:</span> {term.source}</p>
        {term.reference &&<p><span className="font-semibold">Reference:</span> {term.reference}</p>}
      </div> */}

      {/* Video Link */}
      {/* {term.videoLink && (
        <div className="mb-2">
          <a
            href={term.videoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Watch Video
          </a>
        </div>
      )} */}
 <span className="mt-0 inline-block text-blue-600 text-sm font-medium group-hover:underline">
      Read more →
    </span>
      {/* Quran References */}
    
    </div>

</Link>
  
    );
};

export default VideoCard;
