import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import Home from './components/Home'
import App from './components/App'
import Christchurch from './components/Christchurch'

const routes = createRoutesFromElements([
  // eslint-disable-next-line react/jsx-key
  <Route path="/" element={<App />}>
    <Route path="christchurch" element={<Christchurch />} />
    <Route path="/home" element={<Home />} />
  </Route>,
])

export const router = createBrowserRouter(routes)
