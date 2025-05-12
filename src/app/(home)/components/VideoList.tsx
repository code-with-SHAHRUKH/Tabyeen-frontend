import React from "react";
import VideoCard from "./VideoCard";
import Search from "./search";
import { Video } from "@/types";

//API Call Separate Function
const fetchBooks = async () => {
  try {
    
            // const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    // const response = await fetch(`${baseUrl}/api/v1/videos/videos-list?search=${query}&page=1&limit=5`,

    const response = await fetch('https://tabeyeen.up.railway.app/api/v1/videos/videos-list', {
      // next: { revalidate: 60 }, // Cache bhi hoga, aur har 60 sec baad refresh bhi hoga
       cache: "no-store", // Always get fresh data (No cache)
    });

    if (!response.ok) {
      throw new Error("Failed to fetch videos");
    }

    const Videos = await response.json();
    return Videos?.data || [];
  } catch (error) {
    console.error("Error fetching videos:", error);
    return null;
  }
};



const VideoList = async () => {

  const videos = await fetchBooks();
console.log("All VideoFiles:",videos.items);
  if (!videos) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[200px] text-gray-600">
        <p className="text-lg font-semibold">⚠️ Failed to load videos. Please try again later.</p>
      </div>
    );
  }

  return (
    // <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4 gap-y-3 sm:gap-x-0 max-w-2xl sm:gap-6 gap-3 p-4 pt-1 sm:max-w-6xl sm:px-12 mx-auto mb-10 justify-center place-items-center">
    //   {videos.map((video: Video) => (
    //     <VideoCard key={video._id} video={video} />
    //   ))}
    // </div>

       <div className="max-w-4xl mx-auto p-4">
       
      {videos?.items?.map((term: Video) => (
        <VideoCard key={term._id} term={term} />
      ))}
    </div>
  );
};

export default VideoList;
