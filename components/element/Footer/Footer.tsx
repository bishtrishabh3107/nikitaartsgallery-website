import React from 'react';
import { FiInstagram } from 'react-icons/fi';
import { FaFacebook } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Link from 'next/link';

function Footer() {
  const style = { fontSize: '1.5em' };

  return (
    <div>
      <footer className="footer-1 bg-gray-100 p-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
              <h5 className="text-xl font-bold mb-6">Features</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <AnchorLink href="#FirstScreen">
                    <div className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 cursor-pointer">
                      Spiritual Paintings
                    </div>
                  </AnchorLink>
                </li>
                <li className="mb-2">
                  <AnchorLink href="#SecondScreen">
                    <div className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 cursor-pointer">
                      Modern Paintings
                    </div>
                  </AnchorLink>
                </li>
                <li className="mb-2">
                  <AnchorLink href="#ThirdScreen">
                    <div className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 cursor-pointer">
                      Abstract Paintings
                    </div>
                  </AnchorLink>
                </li>
                <li className="mb-2">
                  <AnchorLink href="#FourthScreen">
                    <div className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 cursor-pointer">
                      Anime Paintings
                    </div>
                  </AnchorLink>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
              <h5 className="text-xl font-bold mb-6">Resources</h5>
              <ul className="list-none footer-links">
                <li className="mb-2 border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">
                  <Link href="/">Painting Products</Link>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              <h5 className="text-xl font-bold mb-6">About</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a
                    href="https://instagram.com/nikartssss"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Team
                  </a>
                </li>
                <li className="mb-2 border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">
                  <Link href="/">Privacy</Link>
                </li>
                <li className="mb-2 border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">
                  <Link href="/">Terms</Link>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              <h5 className="text-xl font-bold mb-6">Help</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a
                    href="https://instagram.com/nikartssss"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Support
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://instagram.com/nikartssss"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Help Center
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://instagram.com/nikartssss"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
              <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">
                Stay connected
              </h5>
              <div className="flex sm:justify-center xl:justify-start">
                <a
                  href="https://instagram.com/nikartssss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1 px-1 mx-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600 rounded-lg"
                >
                  <FiInstagram style={style} />
                </a>
                <a
                  href="https://facebook.com/nikartssss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1 px-1 mx-1 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400 rounded-lg"
                >
                  <FaFacebook style={style} />
                </a>
                <a
                  href="https://gmail.com/nikartssss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1 px-1 mx-1 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600 rounded-lg"
                >
                  <SiGmail style={style} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
