import React from 'react';
import moment from 'moment';

function ComparisonMessage({ monthObj, selectedYear }) {
  const currentMonth = moment().format('M');
  const lastMonth = currentMonth - 1;

  if (monthObj[selectedYear][lastMonth] !== (undefined || 0)) {
    const difference = Math.round(
      (monthObj[selectedYear][currentMonth] /
        monthObj[selectedYear][lastMonth]) *
        100
    );

    if (difference > 100) {
      return (
        <>
          You journaled{' '}
          <span className="greenhighlight">{difference}% MORE</span>
          <br /> this month than the last!
        </>
      );
    } else {
      return (
        <>
          You journaled <span className="redhighlight">{difference}% LESS</span>
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
