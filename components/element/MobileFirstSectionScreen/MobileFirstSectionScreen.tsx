import React from 'react';
import MainScreenCard_Mobile from '../Card/MainScreenCard_Mobile';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Bounce from 'react-reveal/Bounce';

function MobileFirstSectionScreen() {
  return (
    <div className="backgoundBrush h-4/5 my-2 md:mt-0 lg:invisible lg:w-0 lg:h-0 py-1 lg:py-0 mx-2 md:mx-4 lg:mx-6">
      <Bounce left>
        <AnchorLink href="#FirstScreen">
          <MainScreenCard_Mobile headline="Spiritual Paintings" />
        </AnchorLink>
        <AnchorLink href="#SecondScreen">
          <MainScreenCard_Mobile headline="Mordern Paintings" />
        </AnchorLink>
        <AnchorLink href="#FourthScreen">
          <MainScreenCard_Mobile headline="Anime Paintings" />
        </AnchorLink>
        <AnchorLink href="#ThirdScreen">
          <MainScreenCard_Mobile headline="Abstract Paintings" />
        </AnchorLink>
      </Bounce>
    </div>
  );
}

export default MobileFirstSectionScreen;
