import React from 'react';

function ComparisonMessage({ quickInfoMessageData }) {
  if (typeof quickInfoMessageData === 'number') {
    if (quickInfoMessageData > 100) {
      return (
        <>
          You journaled{' '}
          <span className="greenhighlight">{quickInfoMessageData}% MORE</span>
          <br /> this month than the last!
        </>
      );
    } else {
      return (
        <>
          You journaled{' '}
          <span className="redhighlight">{quickInfoMessageData}% LESS</span>
          <br /> this month than the last :c
        </>
      );
    }
  }

  return (
    <>
      No entries found from <br />
      last month to compare :c <br />
    </>
  );
}

export default ComparisonMessage;
