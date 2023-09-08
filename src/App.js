import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './nav/Nav.js';
import Footer from './components/Footer.js';

const App = () => {
  return <>
            <Nav />
            <main>
              This is the main div
            </main>
            <Footer />
        </>;
}

export default App;
