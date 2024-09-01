
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import NotFoundPage from './pages/NotFoundPage';

function App() {

  const router = createBrowserRouter([{
    path : '/',
    element : <Home/>,
    errorElement : <NotFoundPage />
  },

  {
    path : '/about',
    element : <About/>
  },

  {
    path : '/services',
    element : <Services/>
  },

  {
    path : '/contact',
    element : <Contact/>
  },

]);

  

  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
