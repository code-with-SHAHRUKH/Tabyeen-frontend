import Link from 'next/link';
import React from 'react';

import Image from 'next/image';
const Navbar = () => {
    return (
        <nav className="border-b shadow-[0px_6px_12px_rgba(255,255,255,0.7)] z-50 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 md:px-6">
          <div>
            <Link href="/" className="flex items-center">
              {/* <Image
                src="/logo.svg"
                width={44}
                height={44}
                alt="Deeni-Markaz"
                className="object-contain"
              /> */}
              <span className="ml-1 mt-2 text-[1.3rem] text-[#1a1a1a]">Tabeyeen</span>
            </Link>
          </div>
        </div>
      </nav>
      
    );
};

export default Navbar;

