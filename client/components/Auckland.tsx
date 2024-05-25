import { useState } from 'react'
import aucklandSeasons from '../data/aucklandSeasons.ts'

function Auckland() {
  return (
    <>
      <div className="aucklandHeader">
        <h2 className="aucklandMainTitle">Auckland Weather 🌤️</h2>
        <h2>General Climate Overview</h2>
        <p>
          <strong>Temperature: </strong>Generally mild, with average daytime
          temperatures ranging from about 14°C in winter to 24°C in summer.
        </p>
        <p>
          <strong>Weather Conditions: </strong>Auckland experiences a mix of
          sunny, cloudy, and rainy days. Snow is extremely rare.
        </p>
      </div>
      <div className="aucklandSeasonContainer">
        <h2>Seasonal Weather Breakdown</h2>
        <p>Click on a season for more information.</p>
        <div className="aukImgContainer">
          <img
            className="aukSummerImg"
            src="/images/auk-summer.jpg"
            alt="gannets at Muriwai"
            onClick={() => handleClick('Summer')}
          />
          <img
            className="aukAutumnImg"
            src="/images/auk-autumn.jpg"
            alt="auckland cbd in autumn"
            onClick={() => handleClick('Winter')}
          />
          <img
            className="aukWinterImg"
            src="/images/auk-winter.jpg"
            alt="Victoria Park, Auckland in winter"
            onClick={() => handleClick('Winter')}
          />
          <img
            className="aukSpringImg"
            src="/images/auk-spring.jpg"
            alt="auckland in spring"
            onClick={() => handleClick('Spring')}
          />
        </div>
      </div>
    </>
  )
}

export default Auckland
