import React, { useState, useEffect, useRef } from 'react';

interface TimelineHeaderProps {
  timelineYears: number[];
  className?: string;
}

const TimelineHeader: React.FC<TimelineHeaderProps> = ({
  timelineYears,
  className = ''
}) => {
  
  const currentYear = timelineYears[0];

  



  const HeaderLineComponent = () => {
    return <>
      {timelineYears.map(year => <div key={year} className='w-fit text-white text-2xl bg-blue-400 px-4 py-2 rounded-xl'>
        {year}
      </div>)}
    </>
  }


  return <div className='w-full flex'>
    <HeaderLineComponent />
  </div>
  
};

export default TimelineHeader;