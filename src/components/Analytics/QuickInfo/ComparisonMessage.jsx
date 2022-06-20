import React, { memo } from 'react';

function ComparisonMessage({ quickInfoMessageData }) {
  if (typeof quickInfoMessageData === 'number') {
    if (quickInfoMessageData > 100) {
      return (
        <>
          AWESOME! You journaled{' '}
          <span className="greenhighlight">{quickInfoMessageData}% MORE </span>{' '}
          this month!
        </>
      );
    } else {
      return (
        <>
          You journaled{' '}
          <span className="redhighlight">{quickInfoMessageData}% less</span>
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

export default memo(ComparisonMessage);
