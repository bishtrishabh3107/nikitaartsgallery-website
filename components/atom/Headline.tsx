import React from 'react';

function Headline({ headline }) {
  return (
    <div className="headline">
      <a href="#" className="">
        <div className="hover-headline text-sm md:text-base lg:text-xl xl:text-2xl">
          {headline}
        </div>
      </a>
    </div>
  );
}

export default Headline;
