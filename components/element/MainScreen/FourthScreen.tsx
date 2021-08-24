import React from 'react';
import Headline from '../../atom/Headline';
import PaintingCard from '../Card/PaintingCard';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';
import Bounce from 'react-reveal/Bounce';

function FourthScreen() {
  const AmazonProducts = gql`
    query AmazonProducts {
      paintings(where: { categories: { name: "Anime Paintings" } }) {
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

  const { error, data, loading } = useQuery(AmazonProducts);
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
    <div className="backgoundColoured p-2 md:p-6 lg:p-8 xl:p-10 mb-3 lg:mb-5 xl:mb-7 mx-2 md:mx-4 lg:mx-6">
      <div className="p-2 font-bold mx-10 bg-white w-56 h-10 lg:w-72 lg:h-12 xl:w-72 xl:h-12 text-center">
        <Headline headline="ANIME PAINTINGS" />
      </div>
      <div className="p-2 md:p-6 lg:p-8 xl:p-10 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-3 lg:gap-6 xl:grid-cols-3 xl:gap-8">
        {data.paintings.map((el) => (
          <div>
            <Bounce right>
              <PaintingCard
                paintingID={el.paintingID}
                name={el.name}
                date={el.date}
                price={el.price}
                url={el.image.url}
              />
            </Bounce>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FourthScreen;
