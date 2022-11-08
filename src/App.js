import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import AOS from 'aos';
import { router } from './Routes/Router';

function App() {
  useEffect(() => {
    AOS.init();
}, [])
  return (
    <div>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
