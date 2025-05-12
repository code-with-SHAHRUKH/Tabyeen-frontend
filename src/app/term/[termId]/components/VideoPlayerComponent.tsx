
// "use client";

// import { Video } from "@/types";
// import React, { useEffect, useRef } from "react";
// // import Analytics from "@/components/Analytics";
// import MediaPlayer from "./MediaPlayer";

// export default function MediaPage({ video }: { video: Video }) {
//   const listRef = useRef<HTMLDivElement>(null);
//   const stickyRef = useRef<HTMLDivElement>(null);
//   const currentMediaRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (currentMediaRef.current && listRef.current && stickyRef.current) {
//       listRef.current.scrollTo({
//         top: currentMediaRef.current.offsetTop - listRef.current.clientHeight / 2,
//         behavior: "smooth",
//       });
//     }
//   }, []);

//   return (
// <div className="mx-auto min-h-screen max-w-screen-lg my-2">
//   <div className="grid gap-4">
//     <div>
//       <div className="relative w-full overflow-hidden">
//         <MediaPlayer video={video} /> {/*VideoPlayer component */}
//       </div>

//       <h2 className="mt-2 text-xl font-semibold">{video.title}</h2>

//       {video.description && <p className="text-base">{video.description}</p>}
//     </div>
//   </div>
// </div>

//   );
// }
