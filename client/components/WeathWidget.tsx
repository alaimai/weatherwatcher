import { useEffect } from 'react'

function WeatherWidget(City: string) {
  useEffect(() => {
    // Configuration for the weather widget
    window.weatherWidgetConfig = window.weatherWidgetConfig || []
    window.weatherWidgetConfig.push({
      selector: '.weatherWidget',
      apiKey: '5Y72TBMZS9CJVW3EZWDLY9RZS',
      location: City, // Enter an address and useState--------------
      unitGroup: 'metric',
      forecastDays: 5, // how many days forecast to show
      title: City, // Optional title to show
      showTitle: true,
      showConditions: true,
    })

    // Create the script element to load the weather widget
    const script = document.createElement('script')
    script.src =
      'https://www.visualcrossing.com/widgets/forecast-simple/weather-forecast-widget-simple.js'
    script.setAttribute('data-timestamp', +new Date())
    document.head.appendChild(script)

    // Cleanup function to remove the script and config on component unmount
    return () => {
      document.head.removeChild(script)
      window.weatherWidgetConfig = window.weatherWidgetConfig.filter(
        (config) => config.selector !== '.weatherWidget',
      )
    }
  }, [City])

  return <div className="weatherWidget"></div>
}

export default WeatherWidget
