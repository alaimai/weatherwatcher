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

  return (
    <div>
      <h2>Invercargill Weather</h2>
      <div className="invercargillLiveCam">
        <h3>Live Weather Camera</h3>
        <iframe
          src="https://live.harvest.com/?cmd=cwc&sid=8917"
          title="Invercargill Live Weather Camera"
          className="liveWeatherCam"
          allowFullScreen
        ></iframe>
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
        <h3>Images</h3>
        <div className="invercargillImageContainer">
          <img
            src="/public/images/invercargill-1.jpg"
            alt="Sunset behind the Invercargill water tower"
          />
          <img
            src="/public/images/inv-basilica.jpg"
            alt="Snow surrounding St Paul's basilica in 2009"
          />
        </div>
      </div>
    </div>
  )
}

export default Invercargill
