import { Video,QuranReference } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const VideoCard = ({ term }: { term: Video }) => {


    return (
  
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
