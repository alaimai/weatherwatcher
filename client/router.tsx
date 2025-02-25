import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from 'react-router-dom'

import App from './components/App.tsx'
import Home from './components/Home.tsx'
import Auckland from './components/Auckland.tsx'
import Wellington from './components/Wellington.tsx'
import Christchurch from './components/Christchurch.tsx'
import Invercargill from './components/Invercargill.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/Auckland" element={<Auckland />} />
      <Route path="/Wellington" element={<Wellington />} />
      <Route path="/Christchurch" element={<Christchurch />} />
      <Route path="/Invercargill" element={<Invercargill />} />
      <Route path="/index" element={<Navigate to="/" replace />} />
    </Route>,
  ),
)

export default router
