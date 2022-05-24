import React from 'react';
import Journal from '../features/journal/Journal';
import NavigationBar from '../features/navBar/NavBar';
import SearchBar from '../features/popUp/LocationInput';

function JournalView() {
  return (
    <>
      <NavigationBar />
      <Journal />
    </>
  );
}

export default JournalView;
