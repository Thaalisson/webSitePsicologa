// src/App.js
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/globalStyles';
import theme from './styles/theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './sections/About';
import Work from './sections/Work';
import Contact from './sections/Contact';
import Videos from './sections/Videos';
import Welcome from './sections/Welcome';
import Blog from './sections/Blog';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <main>
        <Welcome />
        <About />
        <Work/>
        <Blog />
        <Videos/>
        <Contact/>
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
