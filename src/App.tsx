import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from './components/ThemeProvider';

//pages
import Home from './pages/Home';

//components
import Footer from './components/Footer/Footer';


const App = () => {

  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
