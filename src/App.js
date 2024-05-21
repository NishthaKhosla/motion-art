import React from 'react';
import Navbar from "./Components/Navbar"
import Subheader from "./Components/subheader"
import Intro from './Components/intro'
import Review from './Components/review'
import Purchase from './Components/purchase'
import Choice from'./Components/choice';
import Browser from './Components/Browser';
import Content from './Components/content';
import Features from './Components/features';
import Footer from './Components/Footer';
import Effect from './Components/effect'


const App = () => {

 

  return (
    <>
  
    <Navbar></Navbar>
    <Subheader></Subheader>
    <Intro></Intro>
    <Review></Review>
    <Purchase></Purchase>
    <Choice></Choice>
    <Browser></Browser>
    <Content></Content>
    <Features></Features>
    <Footer></Footer>
    <Effect></Effect>
  </>
  )
};

export default App;

