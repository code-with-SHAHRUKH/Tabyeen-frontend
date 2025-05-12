
// "use client";

// import { useMemo } from "react";
// import { Video } from "@/types";

// import Player from "./Player";

// export default function MediaPlayer({ video }: { video: Video }) {
//   // Check if there is no video available
//   const isVideoAvailable = useMemo(() => !!video.videoFile, [video]);

//   if (isVideoAvailable) {
//     return (
//         <Player
//         thumbnail={video.thumbnail}
//         videoSrc={{ src: video.videoFile as string, type: "video/mp4" }} 
//       />
      
//     );
//   }

//   return (
//     <div className="relative w-full aspect-[16/9] overflow-hidden">
//       <div
//         className={`absolute inset-0 flex items-center justify-center ${
//           video.thumbnail ? "bg-black/50" : "bg-black/80"
//         }`}
//       >
//         <p className="px-5 text-center text-white text-[15px] shadow-[0_0_10px_#000000]">
//           No video available for this.
//         </p>
//       </div>
//       {video.thumbnail && <img src={video.thumbnail} alt="video Thumbnail" className="w-full h-full" />}
//     </div>
//   );
// }
