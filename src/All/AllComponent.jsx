import React from 'react'
import HeroArea from '../HeroAreaCard/HeroArea'

import ShowMoreButton from '../HomeCard.jsx/ShowMoreButton'
import ExploreCard from '../Card/ExploreCard'
import Card from '../Card/Card'
import ResCard from '../HomeCard.jsx/ResturentCard'
function AllComponent() {
  return (
    <div>
 <HeroArea/>
<ResCard/>
<ShowMoreButton/>
<ExploreCard/>
<Card/>
    </div>
  )
}

export default AllComponent