import React from 'react';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function BestSeller() {
  const BestSeller = gql`
    query BestSeller {
      paintings(where: { categories: { name: "Best Sellers" } }) {
        paintingID
        name
        date
        price
        image {
          url
        }
      }
    }
  `;

  const { error, data, loading } = useQuery(BestSeller);
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
  const sliderSettings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="px-10">
      <Slider {...sliderSettings}>
        {data.paintings.map((el) => (
          <div key={el.paintingID}>
            <div className="mx-2 cursor-pointer shadow-md rounded-md">
              <Link
                href="/paintings/[id]"
                as={`/paintings/${el.paintingID}`}
                passHref
              >
                <Image
                  src={el.image.url}
                  width={200}
                  height={200}
                  layout="responsive"
                  alt={el.name}
                />
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BestSeller;
