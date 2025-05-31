
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <div>
      {/* Top Logo Bar */}
      <nav className="border-b border-gray-200 shadow-[0px_6px_12px_rgba(255,255,255,0.7)] z-50 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 md:px-6">
          <div>
            <Link href="/" className="flex items-center">
              <Image
                src="/book.svg"
                width={44}
                height={38}
                alt="Deeni-Markaz"
                className="object-contain"
              />
              <span className="ml-0.5 mt-2 text-[1.4rem] text-gray-600 font-semibold tracking-wide">
                Tabyeen ul Kitaab
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Bottom Navigation Links */}
      <nav
        className="bg-gradient-to-t from-gray-200 to-gray-50 border-b border-gray-200"
        style={{ boxShadow: '0 1.2px 3px rgba(0, 0, 0, 0.19)' }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex justify-center gap-6 text-md font-medium text-gray-700">
          <Link
            href="/"
            className={`hover:text-blue-600 ${
              isActive('/') ? 'text-blue-700 font-semibold' : ''
            }`}
          >
            Terms
          </Link>
          <Link
            href="/videos"
            className={`hover:text-blue-600 ${
              isActive('/videos') ? 'text-blue-700 font-semibold' : ''
            }`}
          >
            Videos
          </Link>
          <Link
            href="/gallery"
            className={`hover:text-blue-600 ${
              isActive('/gallery') ? 'text-blue-700 font-semibold' : ''
            }`}
          >
            Gallery
          </Link>
          <Link
            href="/announcements"
            className={`hover:text-blue-600 ${
              isActive('/announcements') ? 'text-blue-700 font-semibold' : ''
            }`}
          >
            Announcements
          </Link>
          <Link
            href="/about-us"
            className={`hover:text-blue-600 ${
              isActive('/about-us') ? 'text-blue-700 font-semibold' : ''
            }`}
          >
            About
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

















// import Link from 'next/link';
// import React from 'react';

// import Image from 'next/image';
// const Navbar = () => {
//     return (
//       <div>
//         <nav className="border-b border-gray-200 shadow-[0px_6px_12px_rgba(255,255,255,0.7)] z-50 relative">
//         <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 md:px-6">
//           <div>
//             <Link href="/" className="flex items-center">
//               <Image
//                 src="/book.svg"
//                 width={44}
//                 height={38}
//                 alt="Deeni-Markaz"
//                 className="object-contain"
//               />
//                           <span className="ml-0.5 mt-2 text-[1.4rem] text-gray-600 font-semibold tracking-wide">
//   Tabyeen ul Kitaab
// </span>
//             </Link>
//           </div>
//         </div>
//       </nav>
//       {/* ✅ New Navbar Below the Original One */}
// <nav className="bg-gradient-to-t from-gray-200 to-gray-50 border-b border-gray-200"      
// style={{
//     boxShadow:'0 1.2px 3px rgba(0, 0, 0, 0.19)'
//   }}>
//   <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex justify-center gap-6 text-md font-medium text-gray-700">
//     <Link href="/" className="hover:text-blue-600">Terms</Link>
//       <Link href="/" className="hover:text-blue-600">Videos</Link>
//         <Link href="/" className="hover:text-blue-600">Gallery</Link>
//          <Link href="/" className="hover:text-blue-600">Announcements</Link>
//     <Link href="/about-us" className="hover:text-blue-600">About</Link>
//   </div>
// </nav>

//       </div>

      
//     );
// };

// export default Navbar;

