import React from 'react';
import AddEntryForm from '../features/addEntry/AddEntryForm';
import Journal from '../features/journal/Journal';

function Home() {
  return (
    <>
      <AddEntryForm />
      <Journal />
    </>
  );
}

export default Home;
