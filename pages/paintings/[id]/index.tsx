import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';
import Image from 'next/image';
import { AiOutlineRollback } from 'react-icons/Ai';
import { Box } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import { FaInstagram } from 'react-icons/Fa';
import { motion } from 'framer-motion';

function index() {
  const router = useRouter();
  const { id } = router.query;

  const PaintingByIdQuery = gql`
  query PaintingByIdQuery {
    paintings(where:{paintingID:${id}}) {
      paintingID
        name
        description
        date
        price
        image {
          url
        }
        image2 {
          url
        }
      }
  }`;

  const { error, data, loading } = useQuery(PaintingByIdQuery);
  if (loading) {
    return (
      <div>
        <p>Relax, it's worth the wait...</p>
      </div>
    ); // loading state
  }
  if (error) {
    return <div>{error.message}</div>; // error state
  }
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-3 mt-3 p-2 md:p-6 lg:p-8 xl:p-10">
        <Link href="/">
          <div className="text-gray-500 lg:text-lg font-bold">
            <AiOutlineRollback />
          </div>
        </Link>
      </div>
      <div>
        {data.paintings.map((el) => (
          <div
            className="flex flex-col lg:p-4 m-2 p-2 md:p-6 lg:p-8 xl:p-10"
            key={el.paintingID}
          >
            <div className="flex flex-row">
              <div className="py-4 px-2 md:px-4 lg:px-16 xl:px-40 w-1/2 h-1/2">
                <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                  <div className="">
                    <Image
                      src={el.image.url}
                      layout="responsive"
                      height={400}
                      width={400}
                    />
                  </div>
                </Box>
              </div>
              <div className="py-4 px-2 md:px-4 lg:px-16 xl:px-40 w-1/2 h-1/2">
                <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                  <div className="">
                    <Image
                      src={el.image2.url}
                      layout="responsive"
                      height={400}
                      width={400}
                    />
                  </div>
                </Box>
              </div>
            </div>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <div className="flex flex-col p-5">
                <header>
                  <div className="nikitaFont text-center text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-blue-500 p-2 uppercase">
                    {el.name}
                  </div>
                  <div className="text-gray-400 text-left md:text-base lg:text-lg xl:text-xl font-medium p-2 text-left text-sm">
                    <ReactMarkdown>{el.description}</ReactMarkdown>
                  </div>
                </header>
                <footer className="text-gray-500 flex items-center justify-between leading-none p-2">
                  <div>Published On: {el.date}</div>
                  <div className="flex items-center text-green-400 text-sm md:text-base lg:text-lg xl:text-xl">
                    <p className="ml-2 text-sm md:text-base lg:text-lg xl:text-xl">
                      ₹ {el.price}
                    </p>
                  </div>
                </footer>
              </div>
              <div className="flex flex-row justify-center my-2">
                <div className="text-sm text-gray-400">
                  To buy this Painting please contact
                </div>
                <a
                  href="https://instagram.com/nikartssss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 mx-2 text-sm hover:text-blue-500"
                >
                  <FaInstagram className="instagram-icon" size="2em" />
                </a>
              </div>
            </Box>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default index;
