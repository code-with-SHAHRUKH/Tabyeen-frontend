// 'use client';

// import { useEffect } from 'react';
// import { usePathname, useRouter, useSearchParams } from 'next/navigation';

// const ClearQueryParams = () => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   useEffect(() => {
//     if (searchParams.has('query')) {
//       const params = new URLSearchParams(searchParams);
//       params.delete('query');
//       router.replace(`${pathname}?${params.toString()}`, { scroll: false });
//     }
//   }, [pathname, router, searchParams]);

//   return null;
// };

// export default ClearQueryParams;
