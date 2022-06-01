import React from 'react';
import Journal from '../../features/journal/Journal';
import NavigationBar from '../../features/navBar/NavBar';

function JournalView() {
  return (
    <>
      <NavigationBar />
      <Journal />
    </>
  );
}

export default JournalView;
