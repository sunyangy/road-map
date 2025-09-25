import { useState } from "react";
import Timeline from "./timeline/Timeline";


const RoadMap = () => {

  const timelineYears = [1998, 2000, 2004, 2005, 2008, 2010, 2012, 2015, 2018, 2020, 2022, 2025];

  
  return (
    <div className="w-screen h-screen">

        <Timeline />
    </div>
  );
};

export default RoadMap;

