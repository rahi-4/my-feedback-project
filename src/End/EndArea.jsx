import React from 'react';
import BellaCard from '../Bella/BellaCard';
import OverallRating from '../Bella/OverallRating';
import MoreInformation from '../Bella/MoreInformationCard';
import FullPhoto from '../Bella/photos/FullPhoto';
import RestaurantInfo from '../ResInfo/ResturentInfo';
import DiscoverSection from '../ResInfo/ResturentData'
import ButtonLast from '../ResInfo/ButtonLast';
function EndArea() {

  return (
    <div>
        <RestaurantInfo/>
      <FullPhoto/>
      <MoreInformation />
      <OverallRating />
      <BellaCard />
      <ButtonLast/>
      <DiscoverSection/>
    </div>
  );
}

export default EndArea;
