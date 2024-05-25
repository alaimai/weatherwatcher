import { useState } from 'react'
import invercargillAverages from '../data/invercargillAverages.ts'

function Invercargill() {
  const [selectedMonth, setSelectedMonth] = useState<string>('')

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMonth: string = event.target.value
    setSelectedMonth(selectedMonth)
  }

  const selectedMonthData = selectedMonth
    ? invercargillAverages.find((month) => month.month === selectedMonth)
    : null

  const johnText = `"According to my Uncle John, Friday 24 May has been pleasant with
    some incoming cloud on the horizon. Considering the temperature in
    Invercargill has hovered around 4-6°C today, this shows the positive
    and hardy attitude of the people of Southland. There have been
    multiple frosts already and it is now Rugby season."`
  const maraeMessage = `"Murihiku Marae in Waihōpai/Invercargill. The name Murihiku was given to the Southland region, and means "the last joint of the tail". Early Māori of the Waitaha iwi were based on the coast. Later iwi to come to the region were Ngāti Māmoe and Kāi Tahu, from further north. Sealers and whalers arrived in the 1790s and from the 1850s immigrants from Britain."`
  const towerMessage = `"Sunset behind the Invercargill Water Tower, built in the late 1880s. It was once open to the public, but closed in 2012 due to earthquake safety risks."`
  const basilicaMessage = `"Basilica of St Mary in the snow in 2009. This Gothic Revival style
    church was designed by celebrated architect Francis Petre, and
    opened in 1905. It is of Catholic denomination and is part of the
    Diocese of Dunedin."`
  return (
    <div>
      <h2>Invercargill/Waihōpai Weather</h2>

      <div className="invercargillLiveCam">
        <h3>Live Weather Camera</h3>
        <div className="invCamBox">
          <iframe
            width={500}
            height={238}
            src="https://live.harvest.com/?cmd=cwc&sid=8917"
            title="Invercargill Live Weather Camera"
            className="liveWeatherCam"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="invercargillInfo">
        <h3>Average Monthly Temperatures</h3>
        <select value={selectedMonth} onChange={handleMonthChange}>
          <option value="">Select Month</option>
          {invercargillAverages.map((month) => (
            <option key={month.month} value={month.month}>
              {month.month}
            </option>
          ))}
        </select>
        {selectedMonthData && (
          <div>
            <p>Selected Month: {selectedMonthData.month}</p>
            <p>Average Temperature: {selectedMonthData.averageTemperature}°C</p>
          </div>
        )}
        <div className="johnsWeatherReport">
          <h3>Live Weather from John M.</h3>
          <p>{johnText}</p>
        </div>
        <div className="images-section">
          <h3>Images</h3>
          <div className="image-text-pair">
            <img
              className="waihopai-marae"
              src="/images/waihopai-marae.jpg"
              alt="marae in waihōpai"
            />
            <div className="marae-image-text">
              <h3>Waihopai Marae</h3>
              <p>{maraeMessage}</p>
            </div>
          </div>
          <div className="image-text-pair">
            <img
              className="inv-water-tower"
              src="/images/invercargill-1.jpg"
              alt="Sunset behind the Invercargill water tower"
            />
            <div className="tower-image-text">
              <h3>Invercargill Water Tower</h3>
              <p>{towerMessage}</p>
            </div>
          </div>
          <div className="image-text-pair">
            <img
              className="inv-basilica"
              src="/images/inv-basilica.jpg"
              alt="Snow surrounding St Mary's basilica in 2009"
            />
            <div className="basilica-image-text">
              <h3>Catholic Basilica in Snow</h3>
              <p>{basilicaMessage}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Invercargill
