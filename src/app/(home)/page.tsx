// import Banner from '@/app/(home)/components/Banner';
// import Image from 'next/image';
// import Search from './components/search';
import AlphabetDropdown from './components/AlphabetDropdown';
import TermDropdown from './components/TermDropdown';
// import VideoList from './components/VideoList';
// import { Suspense } from 'react';
// import Loading from '@/components/Loading';

// export const dynamic = 'force-dynamic';
const Filtfetch = async (query:string) => {
    try {
      console.log("Query from front is here",query)
      // const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`https://tabeyeen-complete-back-end.vercel.app/api/v1/videos/videos-list?search=${query}&page=1&limit=5`, {
      // next: { revalidate: 60 }, // Cache bhi hoga, aur har 60 sec baad refresh bhi hoga
       cache: "no-store", // Always get fresh data (No cache)
    });

    if (!response.ok) {
      throw new Error("Failed to fetch videos");
    }

    const terms = await response.json();

    console.log("Video in Json formate:",terms?.data)
    return terms?.data || [];
  } catch (error) {
    console.error("Error fetching videos:", error);
    return null;
  }

};


const fetchTerms = async () => {
  try {
    
            // const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    // const response = await fetch(`${baseUrl}/api/v1/videos/videos-list?search=${query}&page=1&limit=5`,

    const response = await fetch('https://tabeyeen-complete-back-end.vercel.app/api/v1/videos/videos-list', {
      // next: { revalidate: 60 }, // Cache bhi hoga, aur har 60 sec baad refresh bhi hoga
       cache: "no-store", // Always get fresh data (No cache)
    });

    if (!response.ok) {
      throw new Error("Failed to fetch videos");
    }

    const terms = await response.json();
    console.log("All terms",terms.data.items);

    return terms.data.items || [];
  } catch (error) {
    console.error("Error fetching videos:", error);
    return null;
  }
};

export default async function Home({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) {
      const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  console.log("Query he yeh bhai:",query)
  const filtvideos = await Filtfetch(query);
console.log("Filterd Data:",filtvideos?.items);
// filtvideos?.items?.map((item:any) => console.log("Your Sugessions :)",item.termRoman,":",item.termArabic));

//-------------->fetch all Terms<---------------
  const termsAlphabets = await fetchTerms();
 
// console.log("All terms:",terms.items);
// terms?.items?.map((item:any) => console.log("data of dropdown :)",item.termRoman,":",item.termArabic));
  if (!termsAlphabets) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[200px] text-gray-600">
        <p className="text-lg font-semibold">⚠️ Failed to load terms. Please try again later.</p>
      </div>
    );
  }
    return (
        <>
            {/* <div className='max-w-4xl mx-auto p-4'><Search placeholder="Search term..." filtvideos={filtvideos?.items}/></div>  */}

             {/* ye component wait kre ga or baaki k components show ho jy ge */}
            {/* <Suspense fallback={<Loading />}>
                <VideoList />
            </Suspense> */}
            <AlphabetDropdown alphabets={termsAlphabets} placeholder="Search term..." filtvideos={filtvideos?.items} />
      <TermDropdown />
        </>
    );
}
