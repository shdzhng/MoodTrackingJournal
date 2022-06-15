import React from 'react';
import Journal from '../../components/Journal/Journal';
import NavigationBar from '../../components/NavBar/NavBar';

function JournalView() {
  return (
    <>
      <NavigationBar />
      <Journal />
    </>
  );
}

export default JournalView;
