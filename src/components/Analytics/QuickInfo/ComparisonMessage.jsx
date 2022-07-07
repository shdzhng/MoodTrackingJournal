import React, { memo } from 'react';

function ComparisonMessage({ quickInfoMessageData }) {
  if (typeof quickInfoMessageData === 'number') {
    console.log(quickInfoMessageData);

    if (quickInfoMessageData === 0) {
      return (
        <>
          No entries found from <br />
          this/last month to compare :c <br />
        </>
      );
    } else if (quickInfoMessageData > 100) {
      return (
        <>
          AWESOME! You journaled{' '}``
          <span className="greenhighlight">{quickInfoMessageData}% MORE </span>{' '}
          this month compared to last month!
        </>
      );
    }
    {
      return (
        <>
          You journaled{' '}
          <span className="redhighlight">{quickInfoMessageData}% less</span>
          <br /> this month than the last.
        </>
      );
    }
  }
}

export default memo(ComparisonMessage);
