import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from './components/ThemeProvider';

//pages
import Home from './pages/Home';
import OurStory from './pages/OurStory';

//components
import Footer from './components/Footer/Footer';
import Hero from './components/Hero';



const App = () => {

  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <BrowserRouter>
          <Hero />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/our_story' element={<OurStory />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
