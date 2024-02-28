import React from 'react';
import './App.scss';
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/header/header';
import { Section } from './Components/section/section';
import { Context } from './Components/context/theme';
function App() {
  const {theme} = React.useContext(Context)
  return (
   <div className={`container container--${theme}`}>

    <Header />
    <Section />
    <Footer />
   
   </div>
  );
}

export default App;
