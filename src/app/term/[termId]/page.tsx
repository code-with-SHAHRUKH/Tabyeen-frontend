import React from 'react';
import ClearQueryParams from '@/app/(home)/components/CleanQuery';
import { Video } from '@/types';
import VideoPlayer from './components/VideoPlayerComponent';
const SingleVideoPage = async ({ params }: { params: { termId: string } }) => {
    console.log('params', params);
    let term: Video | null = null;
    try {




const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
        const response = await fetch(`${baseUrl}/api/v1/videos/single-Video/${params.termId}`, {
            next: {
                revalidate: 3600,//Cache data just for 1hour ahfter that delete it from cache and add new data
            },
        });


        if (!response.ok) {
            throw new Error('Error fetching Video');
        }
        let Video = await response.json();
        term=await Video.data; 
        console.log("Single Video:",term);
    } catch (err: any) {
        throw new Error('Error fetching video');
    }

    if (!term) {
        throw new Error('video not found');
    }

    return (
       <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6 mb-3">
      <h1 className="text-2xl font-bold mb-2 text-gray-800">{term.termArabic}</h1>
      {term.termRoman && <p className="text-gray-600 mb-4 italic">({term.termRoman})</p>}
<ClearQueryParams></ClearQueryParams>
      <div className="space-y-3">
        {term.explanationEnglish && (
          <p><strong>Explanation (English):</strong> {term.explanationEnglish}</p>
        )}
        {term.explanationUrdu && (
          <p><strong>Explanation (Urdu):</strong> {term.explanationUrdu}</p>
        )}
        {term.explanationHindi && (
          <p><strong>Explanation (Hindi):</strong> {term.explanationHindi}</p>
        )}
        {term.source && (
          <p><strong>Source:</strong> {term.source}</p>
        )}
        {term.reference && (
          <p><strong>Reference:</strong> {term.reference}</p>
        )}
        {term.videoLink && (
          <p>
            <strong>Video:</strong>{" "}
            <a
              href={term.videoLink}
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch here
            </a>
          </p>
        )}
      </div>

      {/* Quran References */}
      {term.quranReferences && term.quranReferences.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Qur’an References</h2>
          <div className="space-y-4">
            {term.quranReferences.map((ref, index) => (
              <div
                key={index}
                className="border p-4 rounded-lg bg-gray-50 shadow-sm"
              >
                <p className="text-sm text-gray-500">
                  <strong>Surah:</strong> {ref.surahNumber} | <strong>Ayah:</strong> {ref.ayahNumber}
                </p>
                <p className="text-lg text-right font-semibold text-gray-800">{ref.ayahArabic}</p>
                <p><strong>English:</strong> {ref.ayahEnglish}</p>
                <p><strong>Urdu:</strong> {ref.ayahUrdu}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
      
    );
};

export default SingleVideoPage;






