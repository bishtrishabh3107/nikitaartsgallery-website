import React from 'react';
import Headline from '../../atom/Headline';

function MainScreenCard_Mobile({ headline }) {
  return (
    <div>
      <div className="m-2 my-6">
        <div className="bg-white p-2 rounded-lg shadow-xl">
          <h2 className="mb-2 font-bold text-base md:text-xl lg:text-2xl text-center text-gray-600">
            <Headline headline={headline} />
          </h2>
        </div>
      </div>
    </div>
  );
}

export default MainScreenCard_Mobile;
