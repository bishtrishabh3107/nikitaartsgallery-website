import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

function PaintingCard({ paintingID, name, date, price, url }) {
  const easing = [0.6, -0.5, 0.01, 0.99];
  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing,
      },
    },
  };
  return (
    <div className="cursor-pointer shadow-xl" key={paintingID}>
      <Link href="/paintings/[id]" as={`/paintings/${paintingID}`}>
        <motion.div
          variants={fadeInUp}
          className="overflow-hidden rounded-lg shadow-lg"
        >
          <Image src={url} width={200} height={200} layout="responsive" />
          <div>
            <div className="text-gray-200 text-center text-xs md:text-sm lg:text-base xl:text-lg font-medium p-1 bg-gray-800 uppercase">
              {name}
            </div>
          </div>
          <div className="flex items-center justify-between leading-none p-1 bg-gray-800 -mt-1">
            <p className="ml-2 text-xs md:text-sm text-green-400">₹ {price}</p>
            <div className="text-xs md:text-sm text-gray-500">{date}</div>
          </div>
        </motion.div>
      </Link>
    </div>
  );
}

export default PaintingCard;
