/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import aucklandSeasons from '../data/aucklandSeasons.ts'

function Auckland() {
  // handleClick of a season
  const [selectedSeason, setSelectedSeason] = useState<string | null>(null)

  function handleClick(season: string) {
    setSelectedSeason(season === selectedSeason ? null : season)
  }

  const seasonData = selectedSeason ? aucklandSeasons[selectedSeason] : null

  //Form for subscription
  const [regoData, setNewRego] = useState({ name: '', email: '' })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setNewRego((prevRego) => ({
      ...prevRego,
      [name]: value,
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    alert(`Thank you ${regoData.name} for subscribing`)
    console.log('Form submitted', regoData)
    window.location.reload()
  }

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
            aria-hidden="true"
          />
          <img
            className="aukAutumnImg"
            src="/images/auk-autumn.jpg"
            alt="auckland cbd in autumn"
            onClick={() => handleClick('Autumn')}
            aria-hidden="true"
          />
          <img
            className="aukWinterImg"
            src="/images/auk-winter.jpg"
            alt="Victoria Park, Auckland in winter"
            onClick={() => handleClick('Winter')}
            aria-hidden="true"
          />
          <img
            className="aukSpringImg"
            src="/images/auk-spring.jpg"
            alt="auckland in spring"
            onClick={() => handleClick('Spring')}
            aria-hidden="true"
          />
        </div>
        {seasonData && (
          <div>
            <h2>{selectedSeason} in Auckland</h2>
            <p>
              <strong>Duration: </strong>
              {seasonData.duration}
            </p>
            <p>
              <strong>Temperature: </strong>
              {seasonData.temperature}
            </p>
            <p>
              <strong>Conditions: </strong>
              {seasonData.conditions}
            </p>
          </div>
        )}
      </div>
      <div className="subscriptionContainer">
        <h2>Subscribe To Weather-Watcher Updates!</h2>
        <p>
          Want updates of New Zealand's weather everyday? Sign-up for FREE now!
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            className="aucklandInput"
            type="text"
            id="name"
            name="name"
            value={regoData.name}
            onChange={handleChange}
          />

          <label htmlFor="email">Email:</label>
          <input
            className="aucklandInput"
            type="email"
            id="email"
            name="email"
            value={regoData.email}
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Auckland
