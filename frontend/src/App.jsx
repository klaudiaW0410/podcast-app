import { BrowserRouter, Routes } from 'react-router-dom';
import routes from './Routers/Routers';
import './App.css'


export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          {routes}
        </Routes>
      </main>
    </BrowserRouter>
  )

}

