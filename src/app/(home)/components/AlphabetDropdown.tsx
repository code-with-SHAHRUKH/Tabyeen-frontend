/* eslint-disable react/no-unescaped-entities */

'use client';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect,useCallback } from "react";
import { PlayIcon } from '@heroicons/react/24/outline';
// import Search from "./search";

interface Term {
  _id:string;
  termRoman: string;
  termArabic: string;
  // Add more fields if needed
}

interface TermsListProps {
  terms: Term[];
}


export default function AlphabetDropdown({ alphabets,placeholder,filtvideos = [] }: { alphabets: any[] ,placeholder: string,  filtvideos: any[]}) {


  //All state variables
  const [AlphaRomanorArabic, setAlphaRomanorArabic] = useState<string[]>([]);
  const [isRomantogle, setIsRomantogle] = useState<boolean>(true);
  const [selected, setSelected] = useState<string | null>();// select Alphabet
  const [selectedTermId, setSelectedTermId] = useState<string | null>(null);
  const [results, setResults] = useState<Term[]>([]);// store the terms according to user selected Alphabet
  const [selectedTermDetails, setSelectedTermDetails] = useState<any>(null);
  const [allowHindDesc, setAllowHindDesc] = useState<any>(false);
  const [allowUrdDesc, setAllowUrdDesc] = useState<any>(false);
  const [selectedAyah, setSelectedAyah] = useState<any | null>(null);
const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
const [direction, setDirection] = useState<"ltr" | "rtl">("ltr");
  const [inputValue, setInputValue] = useState<string | null>(null);
  const [filteredResults, setFilteredResults] = useState<Term[]>([]);
  console.log("Input me yeh he",inputValue);
  console.log("Dropdown things",filteredResults);

  console.log("All Alphabets:",AlphaRomanorArabic);
   console.log("All results datability:",results);
   console.log("default Selectedterm id:",selectedTermId);

  //Utility function to extract 1st alphabet

// function extractUniqueFirstLetters(key: "termRoman" | "termArabic") {
//   const letters = alphabets
//     .map((item: any) => item[key]?.charAt(0).toUpperCase()) // Uppercase for consistent sorting
//     .filter(Boolean); // remove undefined/null/empty

//   const uniqueLetters = [...new Set(letters)].sort(); // Sort alphabetically
//   // ['آ', 'أ', 'إ', 'ا', 'ت', 'د', 'ص', 'ع']

//   setAlphaRomanorArabic(uniqueLetters);
// }


// function extractUniqueFirstLetters(key: "termRoman" | "termArabic") {
//   const letters = alphabets
//     .map((item: any) => item[key]?.charAt(0).toUpperCase())
//     .filter(Boolean);

//   // Normalize Arabic variants
//   const normalizeArabic = (char: string) =>
//     char
//       .replace(/[أإآ]/g, "ا")
//       .replace(/ى/g, "ي")
//       .replace(/ؤ/g, "و")
//       .replace(/ئ/g, "ي");

//   const normalizedLetters =
//     key === "termArabic" ? letters.map(normalizeArabic) : letters;

//   const uniqueLetters = Array.from(new Set(normalizedLetters));

//   if (key === "termRoman") {
//     uniqueLetters.sort(); // Only sort for Roman terms
//   }

//   setAlphaRomanorArabic(uniqueLetters);
// }

const extractUniqueFirstLetters = useCallback(
  (key: "termRoman" | "termArabic") => {
    const letters = alphabets
      .map((item: any) => item[key]?.charAt(0).toUpperCase())
      .filter(Boolean);

    // Arabic normalization
    const normalizeArabic = (char: string) =>
      char
        .replace(/أ|إ|آ/g, "ا")
        .replace(/ى/g, "ي")
        .replace(/ؤ/g, "و")
        .replace(/ئ/g, "ي");

    const normalizedLetters =
      key === "termArabic" ? letters.map(normalizeArabic) : letters;

    const uniqueLetters = [...new Set(normalizedLetters)].sort();

    setDirection(key === "termArabic" ? "rtl" : "ltr");
    setAlphaRomanorArabic(uniqueLetters);
  },
  [alphabets, setDirection, setAlphaRomanorArabic] // 👈 dependencies
);






  //API Calls
  const Filtfetch = async (query: string) => {
    try {
      console.log("Query from front is here", query)
      // const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      const response = await fetch(`https://tabeyeen.up.railway.app/api/v1/videos/videos-list?search=${query}&page=1&limit=20`, {
        // next: { revalidate: 60 }, // Cache bhi hoga, aur har 60 sec baad refresh bhi hoga
        cache: "no-store", // Always get fresh data (No cache)
      });

//       const response = await fetch(`https://tabeyeen.up.railway.app/api/v1/videos/videos-list?search=${query}`, {
//   cache: "no-store",
// });

      if (!response.ok) {
        throw new Error("Failed to fetch videos");
      }

      const terms = await response.json();

      console.log("terms in Json formate:", terms?.data)
      return terms?.data || [];
    } catch (error) {
      console.error("Error fetching videos:", error);
      return null;
    }

  };

  const fetchTermDetails = async (termId: string) => {
    try {
      const response = await fetch(`https://tabeyeen.up.railway.app/api/v1/videos/single-Video/${termId}`, {
        cache: "no-store", // Always fetch fresh data
      });

      if (!response.ok) {
        throw new Error("Error fetching video");
      }

      const data = await response.json();
      return data;


    } catch (err) {
      console.error("Error fetching video:", err);
      setSelectedTermDetails(null); // Reset if error
    }
  };

  //All useEffects


useEffect(() => {
  if (alphabets && alphabets.length > 0) {
    //step 1  automaticaly set Roman Alphabets
    console.log("All terms inside Alphabet Page:", alphabets);
    extractUniqueFirstLetters("termRoman"); // Default to Roman
    setIsRomantogle(true);    
  }
}, [alphabets,extractUniqueFirstLetters]);

// Once Roman alphabets are extracted, select the first alphabet
useEffect(() => {
  if (AlphaRomanorArabic.length > 0) {
    const firstAlphabet = AlphaRomanorArabic[0];
    setSelected(firstAlphabet);
  }
}, [AlphaRomanorArabic]);



  useEffect(() => {
    if (selected) {
      Filtfetch(selected).then((data) => {
        console.log("Databilibili:",data);
        setResults(data?.items); // Save fetched results

         // Auto-select the first term
      if (data?.items && data?.items?.length > 0) {
        console.log("Selected term:",data);
        setSelectedTermId(data.items[0]._id);
      }

      });
    }
  }, [selected]); // useEffect runs whenever `selected`state change/user click on any alphabet


  // useEffect(() => {
  //   if (selectedTermId) {
  //      fetchTermDetails(selectedTermId);
  //   }
  // }, [allowHindDesc, allowUrdDesc, selectedTermId])
useEffect(() => {
  const fetchData = async () => {
    if (selectedTermId) {
      try {
        const response = await fetchTermDetails(selectedTermId);
        setSelectedTermDetails(response?.data || null);
      } catch (error) {
        console.error("Failed to fetch term details:", error);
      }
    }
  };

  fetchData();
}, [allowHindDesc, allowUrdDesc, selectedTermId]);



  //all onclick functions
function handlesetRoman() {
  extractUniqueFirstLetters("termRoman");
  setIsRomantogle(true);
}

function handlesetArabic() {
  extractUniqueFirstLetters("termArabic");
  setIsRomantogle(false);
}

  const selectAlphabet = (alphabet:string) => {
    console.log("Alphabets you select:",alphabet);
    setSelected(alphabet);
    // You can lift this state up or use context to share with TermDropdown
    // console.log("Selected Alphabet:", alphabet);
  };


function getTermDetails(termId: string) {
    setSelectedTermId(termId);
    setFilteredResults([]);
    setInputValue('');
}


  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // const [inputValue, setInputValue] = useState(searchParams.get('query')?.toString() || '');


  useEffect(() => {
    // Filter data locally
    if (inputValue?.trim() === '') {
      setFilteredResults([]);
    } else {
const filtered = filtvideos.filter(term =>
  term.termRoman.toLowerCase().startsWith(inputValue?.toLowerCase()) ||
  term.termArabic.startsWith(inputValue));
      console.log("gig:",filtered);
      setFilteredResults(filtered);
    }
  }, [inputValue, filtvideos]);

  const handleSearch = (term: string) => {
    setInputValue(term);

    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  };
  return (

    <div className="mx-4 md:mx-40 mb-20 mt-10">

     <div className="max-w-full mx-auto px-4 py-4 flex flex-wrap md:flex-nowrap justify-between items-center gap-4">
  {/* Left Side: Buttons */}

        <div className="flex flex-wrap gap-2">
  <button
    onClick={handlesetRoman}
        style={{
    boxShadow: isRomantogle
      ? 'inset 0 1px 3px rgba(0, 0, 0, 0.16), 0 1.6px 1.6px rgba(0, 0, 0, 0.20)'
      : 'inset 0 1px 3px rgba(0, 0, 0, 0.16), 0 1.6px 1.6px rgba(0, 0, 0, 0.05)'
  }}
    className={`text-md font-semibold rounded-md px-2 py-2 border transition min-w-[120px] text-center 
      ${isRomantogle ? 'bg-blue-600 text-white border-blue-500' : 'bg-gray-100 text-gray-700 hover:bg-white'}`}
  >
    Roman Alphabet
  </button>

  <button
    onClick={handlesetArabic}
      style={{  boxShadow: isRomantogle
      ? 'inset 0 1px 3px rgba(0, 0, 0, 0.16), 0 1.6px 1.6px rgba(0, 0, 0, 0.05)'
      : 'inset 0 1px 3px rgba(0, 0, 0, 0.16), 0 1.6px 1.6px rgba(0, 0, 0, 0.20)'
    }}


    className={`text-md font-semibold rounded-md px-2 py-2 border transition min-w-[120px] text-center
      ${isRomantogle ? 'bg-gray-100 text-gray-700 hover:bg-white ' : 'bg-blue-600  text-white border-blue-500 '}`}
  >
    Arabic Alphabet
  </button>
</div>

 {/* Left Side: Search box */}
<div className='w-full md:w-auto flex-grow md:flex-grow-0 md:max-w-md'>
   <div className="relative flex flex-2 flex-shrink-0">
      <input
        className="peer bg-gray-50 block w-full rounded-md border border-gray-300 shadow-sm py-[9px] pl-10 text-lg outline-3 placeholder:text-gray-600"
        placeholder={placeholder}
        value={inputValue ?? ""}
        onChange={(e) => handleSearch(e.target.value)}
        
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[22px] w-[22px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />

      {filteredResults?.length > 0 && (
        <div className="absolute z-10 mt-12 w-full rounded-md border border-gray-300 bg-white shadow-lg max-h-[300px] overflow-y-auto">
          {filteredResults.map((term) => (
            
             
              
            <div
            key={term._id}
              onClick={() => getTermDetails(term._id)}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100 flex justify-between items-center"
            >
              <span className="text-left">{term.termRoman}</span>
              <span className="text-right">{term.termArabic}</span>
            </div>
           
          ))}
        </div>
      )}
    </div>
</div>

{/* input end */}
</div>
  {/* Check box code */}
<div className="inline-block mt-4 mb-4 w-full">
  <div className="flex flex-row gap-4 justify-center items-center flex-wrap">
    {/* English Checkbox */}
    <label className="flex items-center gap-2 opacity-50 cursor-not-allowed whitespace-nowrap">
      <input type="checkbox" checked={true} disabled className="w-4 h-4" />
      <span className="text-sm text-black">English</span>
    </label>

    {/* Urdu Checkbox */}
    <label className="flex items-center gap-2 whitespace-nowrap">
      <input
        type="checkbox"
        checked={allowUrdDesc}
        onChange={() => {
          setAllowUrdDesc(true);
          setAllowHindDesc(false);
        }}
        className="w-4 h-4"
      />
      <span className="text-sm text-gray-700">Urdu</span>
    </label>

    {/* Hindi Checkbox */}
    <label className="flex items-center gap-2 whitespace-nowrap">
      <input
        type="checkbox"
        checked={allowHindDesc}
        onChange={() => {
          setAllowHindDesc(true);
          setAllowUrdDesc(false);
        }}
        className="w-4 h-4"
      />
      <span className="text-sm text-gray-700">Hindi</span>
    </label>
  </div>

  <p className="text-xs text-red-600 text-center mt-2 px-2">
    From Urdu and Hindi, only ONE selection is allowed
  </p>
</div>




      <div className="p-0 border rounded-lg shadow ">
        <h2 className="text-xl font-semibold text-gray-700 mb-1 rounded-t-lg border-b border-gray-200 pb-4 pt-4 text-center bg-gradient-to-t from-gray-50 to-gray-300">
          Select Any Letter
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-12 gap-3 px-3 py-3" style={{ direction }}>

          {AlphaRomanorArabic.map((alphabet, index) => (
            <button
              key={index}
              onClick={() => selectAlphabet(alphabet)}
              
                      style={{
    boxShadow: selected === alphabet
      ? 'inset 0 1px 3px rgba(0, 0, 0, 0.16), 0 1.4px 1.4px rgba(0, 0, 0, 0.20)'
      : 'inset 0 1px 3px rgba(0, 0, 0, 0.16), 0 1.3px 1.3px rgba(0, 0, 0, 0.04)'
  }}
              className={`text-md font-semibold rounded-md px-2 py-2 transition
              ${selected === alphabet ? 'bg-blue-600 text-white border-blue-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {alphabet}


            </button>
          ))}
        </div>

      </div>


      <div className="flex flex-col md:flex-row gap-4 mt-4">
       
<div className="w-full md:w-1/4 border rounded-lg pb-0 bg-white shadow mx-auto min-h-[200px] self-start">
  <h2 className="text-xl font-semibold text-gray-700 mb-1 border-b rounded-t-lg border-gray-200  pb-4 pt-4 text-center bg-gradient-to-t from-gray-50 to-gray-300">
    Terms for '{selected?.toUpperCase()}'
  </h2>

  <div className="p-0">
    {results.length === 0 ? (
      <p className="text-gray-500 italic text-center pt-4">No terms available for this letter.</p>
    ) : (
      <div className="space-y-1">
        {results?.map((term:Term, index:number) => (
          <div
            key={index}
            onClick={() => getTermDetails(term._id)}
             className={`p-3 text-gray-600 rounded-sm hover:shadow-sm hover:bg-gray-50 cursor-pointer transition-all duration-200 text-center  ${
      selectedTermId === term._id ? 'border-blue-600 shadow-sm bg-gray-50 border-l-4 border-r-4' : 'border-b border-gray-100'
    }`}
      >
            <div className="flex flex-row justify-center items-center gap-0">
              <p className="text-lg font-bold">{term.termRoman }</p>
              <p className="text-lg pt-1 pl-2">{ term.termArabic}</p>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
</div>




        {/* Selected Term Details (Right - Wider) */}
        <div className="w-full md:w-2/2 p-0 border rounded-lg bg-white shadow">
       { selectedTermDetails?
        <div>
          <div className="border-b border-gray-200 rounded-t-lg bg-gradient-to-t from-gray-50 to-gray-300 p-4 pb-1">
                <h2 className="text-xl font-bold text-gray-700 mb-2 flex justify-between items-center ">
  <span>{selectedTermDetails?.termRoman}</span>
  <span className="text-right">{selectedTermDetails?.termArabic}</span>
</h2>

<p className="text-gray-600 mb-1 text-center">
              <strong className="text-gray-700">Source:</strong> {selectedTermDetails.source}
            </p>
          </div>
 

<div className="p-4">          
  {/* {selectedTermDetails?.source && (
            <p className="text-gray-600 mb-2">
              <strong>Source:</strong> {selectedTermDetails.source}
            </p>
          )} */}
          {selectedTermDetails?.explanationEnglish && (
            // <p className="text-gray-700 mb-2">
            //   <strong>English Desciption:</strong> {selectedTermDetails.explanationEnglish}
            // </p>
              <div className="text-center mb-4 border rounded-md p-2 shadow-sm">
          <label className="block text-md font-semibold text-gray-600 dark:text-gray-300 mb-1 p-2">
            English Desciption
          </label>
          <p className="text-base leading-relaxed font-urdu">
            {selectedTermDetails.explanationEnglish}
          </p>
        </div>
          )}

          {selectedTermDetails?.explanationUrdu && allowUrdDesc && (
              <div className="text-center mb-4 border rounded-md p-2 shadow-sm">
          <label className="block text-md font-semibold text-gray-600 dark:text-gray-300 mb-1 p-2">
            Urdu Desciption
          </label>
          <p className="text-base leading-relaxed font-urdu">
            {selectedTermDetails.explanationUrdu}
          </p>
        </div>
          )}
          {selectedTermDetails?.explanationHindi && allowHindDesc && (
                 <div className="text-center mb-4 border border rounded-md p-2 shadow-sm">
          <label className="block text-md font-semibold text-gray-600 dark:text-gray-300 mb-1 p-2">
            Hindi Desciption
          </label>
          <p className="text-base leading-relaxed font-urdu">
            {selectedTermDetails.explanationHindi}
          </p>
        </div>
          )}

          {/* {selectedTermDetails?.videoLink && (
            <div className="mt-2">
              <strong>Video:</strong>
              <iframe
                className="mt-1 w-full rounded-md"
                height="300"
                src={selectedTermDetails.videoLink}
                allowFullScreen
              ></iframe>
            </div>
          )} */}

 <div className="w-full max-w-3xl mx-auto p-4 sm:p-0"> {/* Container for demo */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 pb-2">
        {/* Reference Box */}
       { selectedTermDetails.reference &&
        <div className="flex-1 bg-gray-50 border border-iman-border-light-brown rounded-lg p-2 text-center">
     
          <h3 className="text-gray-600 font-semibold text-base mb-1">
        
            Reference
          </h3>
          <p className="text-[#007B77] text-sm">
         
             {selectedTermDetails.reference}
          </p>
        </div>
       }

        {/* Video Resource Box */}
           { selectedTermDetails?.videoLink &&
        <div className="flex-1 bg-gray-50 border rounded-lg p-2 text-center">
      
          <h3 className="text-gray-600 font-semibold text-base mb-1">
   
            Video Resource
          </h3>
          <a
            href={selectedTermDetails?.videoLink} // Replace with actual video link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#007B77] text-sm hover:underline"
          >
          
             <div className="flex items-center justify-center w-7 h-7 rounded-full bg-red-600 mr-2 p-1 pl-1" style={{ boxShadow: 'inset 0 1.8px 2.8px rgba(0, 0, 0, 0.51)' }}>
      <PlayIcon className="w-4 h-4 text-white font-bold " />
    </div>
            Watch Video Explanation
          </a>
        </div>
           }
      </div>
    </div>




{selectedTermDetails?.quranReferences && (
  <div className="text-center">
    <h3 className="text-lg font-semibold text-[#7B3F00] mb-4">
      Quranic Verse References:
    </h3>

    <div className="flex justify-center">
      <div className="flex flex-wrap justify-center gap-3 max-w-3xl">
        {selectedTermDetails.quranReferences.map((ref:any, index:number) => (
          <div
            key={index}
            onClick={() => {
              setSelectedAyah(ref);
              setIsModalOpen(true);
            }}
            className="bg-emerald-700 hover:bg-emerald-600 text-white text-sm font-semibold px-4 py-2 rounded-md cursor-pointer transition shadow-md"
            
                              style={{
    boxShadow:'inset 0 2px 4px rgba(0, 0, 0, 0.51), 0 1.4px 1.4px rgba(0, 0, 0, 0.20)'
     
  }}
          >
            {ref.surahNumber}:{ref.ayahNumber}
          </div>
        ))}
      </div>
    </div>
  </div>
)}


</div>

        </div>
        
        
        :  <div className="text-center text-gray-500 p-6 pt-14">
      <h2 className="text-xl font-semibold mb-1 text-emerald-700">Select a Term</h2>
      <p className="text-md">Choose a term from the list to view its details.</p>
    </div>
}


{isModalOpen && selectedAyah && (
  <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div 
          style={{
    boxShadow:'inset 0 -2px 6px rgba(0, 0, 0, 0.38),inset 0 2px 6px rgba(0, 0, 0, 0.38), 0 6px 10px rgba(0, 0, 0, 0.5)'
  }}
    className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative transition-all duration-300">
      
      <button
        onClick={() => setIsModalOpen(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-2xl font-bold focus:outline-none"
      >
        ×
      </button>

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">
          Surah {selectedAyah.surahNumber}, Ayah {selectedAyah.ayahNumber}
        </h2>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-right text-2xl font-semibold text-gray-800 dark:text-white leading-relaxed">
            {selectedAyah.ayahArabic}
          </p>
        </div>

      <div className="text-center border border-gray-300 rounded-md p-4 shadow-sm">
  <label className="block text-md font-semibold text-gray-600 dark:text-gray-300 mb-1">
    English Translation
  </label>
  <p className="text-base leading-relaxed">
    {selectedAyah.ayahEnglish}
  </p>
</div>

        <div className="text-center border border-gray-300 rounded-md p-4 shadow-sm">
          <label className="block text-md font-semibold text-gray-600 dark:text-gray-300 mb-1">
            Urdu Translation
          </label>
          <p className="text-base leading-relaxed font-urdu">
            {selectedAyah.ayahUrdu}
          </p>
        </div>
      </div>
    </div>
  </div>
)}




        </div>
      </div>




    </div>




  );
}
