import React from 'react';
import Footer from '../components/common/footer';
import Header from '../components/common/header';
import TabOptions from '../components/common/tabOptions';
import { useState } from 'react';
import Delivery from '../components/delivery';
import DiningOut from '../components/diningOut';
import Nightlite from '../components/nightLite';

const HomePage = () => {
   
   const [activeTab, setActiveTab]= useState ("Delivery")

  return (
    <div>
      <Header />
      <TabOptions activeTab = {activeTab} setActiveTab = {setActiveTab} />
    {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
};

const getCorrectScreen=(tab) => {
  switch(tab){
    case "Delivery":
      return <Delivery />
    case "Dining Out":
      return <DiningOut />
    case "Night Lite":
      return <Nightlite />
    default:
      return<div>Delivery</div>
  }
};

export default HomePage;