// 'use client';

// import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
// import { usePathname, useRouter, useSearchParams } from 'next/navigation';
// // import { useDebouncedCallback } from 'use-debounce';
// interface Term {
//   _id: string;
//   termArabic: string;
//   termRoman:string;
//   // add more fields if needed
// }
// export default function Search({
//   placeholder,
//   filtvideos = [],
// }: {
//   placeholder: string;
//   filtvideos: Term[];
// }) {
//     console.log("This is Data which come from Bg in Search:",filtvideos)
//  const searchParams = useSearchParams();
//   const pathname = usePathname();
//   const { replace } = useRouter();


//   const handleSearch = (term:string) => {
//    console.log("Input field Data:",term)
//     const params = new URLSearchParams(searchParams);
//     // params.set('page', '1');
//     if (term) {
//       params.set('query', term);
//     } else {
//       params.delete('query');
//     }

//     replace(`${pathname}?${params.toString()}`);
//   };
//   return (
//     <div className="relative flex flex-2 flex-shrink-0">
    
//       <input
//         className="peer block w-full rounded-md border border-gray-400 py-[16px] pl-10 text-lg outline-3 placeholder:text-gray-600"
//         placeholder={placeholder}
//         onChange={(e) => {
//           handleSearch(e.target.value);
//         }}
//         defaultValue={searchParams.get('query')?.toString()}
//       />
//       <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[22px] w-[22px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
//    {
//    filtvideos.length > 0 && (
//         <div className="absolute z-10 mt-12 w-full rounded-md border border-gray-300 bg-white shadow-lg max-h-[300px] overflow-y-auto">
//           {filtvideos.map((term:any) => (
//            <div
//   key={term._id}
//   className="cursor-pointer px-4 py-2 hover:bg-gray-100 flex justify-between items-center"
// >
//   <span className="text-left">{term.termRoman}</span>
//   <span className="text-right">{term.termArabic}</span>
// </div>

//           ))}
   
   
//     </div>
// )
// }
// </div>
//   );
// }



'use client';

import { useState, useEffect } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
interface Term {
  _id: string;
  termArabic: string;
  termRoman: string;
}

export default function Search({
  placeholder,
  filtvideos = [],
}: {
  placeholder: string;
  filtvideos: Term[];
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // const [inputValue, setInputValue] = useState(searchParams.get('query')?.toString() || '');
  const [inputValue, setInputValue] = useState('');
  const [filteredResults, setFilteredResults] = useState<Term[]>([]);
  console.log("Input me yeh he",inputValue);
  console.log("Dropdown things",filteredResults);

  useEffect(() => {
    // Filter data locally
    if (inputValue.trim() === '') {
      setFilteredResults([]);
    } else {
const filtered = filtvideos.filter(term =>
  term.termRoman.toLowerCase().startsWith(inputValue.toLowerCase()) ||
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
    <div className="relative flex flex-2 flex-shrink-0">
      <input
        className="peer bg-gray-50 block w-full rounded-md border border-gray-300 shadow-sm py-[16px] pl-10 text-lg outline-3 placeholder:text-gray-600"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => handleSearch(e.target.value)}
        
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[22px] w-[22px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />

      {filteredResults?.length > 0 && (
        <div className="absolute z-10 mt-12 w-full rounded-md border border-gray-300 bg-white shadow-lg max-h-[300px] overflow-y-auto">
          {filteredResults.map((term) => (
            <Link href={`/term/${term._id}`} className="block" key={term._id}>
            <div
             
              className="cursor-pointer px-4 py-2 hover:bg-gray-100 flex justify-between items-center"
            >
              <span className="text-left">{term.termRoman}</span>
              <span className="text-right">{term.termArabic}</span>
            </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
