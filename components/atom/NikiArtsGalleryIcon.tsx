import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';
// import Nikita_Art_Gallery_Icon from '../../public/Nikita_Art_Gallery_Icon.png';

function NikiArtsGalleryIcon() {
  return (
    <div>
      <Link href="/" passHref>
        <div className="flex flex-row cursor-pointer">
          <h1 className="nikitaFont lg:mx-1 text-xl font-bold text-blue-400 xl:text-4xl lg:text-3xl md:text-2xl">
            NIKI
          </h1>
          <h1 className="nikitaFont lg:mx-1 text-base font-bold text-red-400 xl:text-2xl lg:text-xl md:text-lg">
            Arts
          </h1>
          <h1 className="nikitaFont lg:mx-1 text-xl font-bold text-blue-400 xl:text-4xl lg:text-3xl md:text-2xl">
            GALLERY
          </h1>
        </div>
      </Link>
    </div>
  );
}

export default NikiArtsGalleryIcon;
