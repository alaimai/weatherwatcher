export interface PicDetails {
  id: number, 
  intro: string
}

const WellyPictures: {[key: string]:PicDetails} = {
  Welly1:{
    id: 1,
    intro: 'Wellington features a temperate maritime climate, and is the world&apos;s windiest city by average wind speed.'
  },
  Welly2:{
    id: 2,
    intro: 'The Wellington urban area, which only includes urbanised areas within Wellington City, has a population of 215,200 as of June 2023.'
  },
  Welly3:{
    id: 3,
    intro: 'Wellington&apos;s economy is primarily service-based, with an emphasis on finance, business services, government, and the film industry.'
  }
}

export default WellyPictures