import React from 'react';
import EntryPopUp from '../features/popUp/EntryPopUp';
import Journal from '../features/journal/Journal';
import NavigationBar from '../features/navBar/NavBar';

function Home() {
  return (
    <>
      <NavigationBar />
      <EntryPopUp />
      <Journal />
    </>
  );
}

export default Home;
