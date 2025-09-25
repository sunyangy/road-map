import { useRef, useEffect } from "react";
import TimelineHeader from "./TimelineHeader";
import { useSwipeDistance } from "../../hooks/useSwipeDistance";


const Timeline = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { handleWheel, getSwipeInfo, reset } = useSwipeDistance(50);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener('wheel', handleWheel, { passive: false });
            return () => {
                container.removeEventListener('wheel', handleWheel);
            };
        }
    }, [handleWheel]);

    // 监听滑动完成
    useEffect(() => {
        const interval = setInterval(() => {
            const swipeInfo = getSwipeInfo();
            if (swipeInfo.isComplete) {
                console.log('滑动完成!');
                console.log('距离:', swipeInfo.distance);
                console.log('方向:', swipeInfo.direction);
                
                // 重置，准备下一次滑动
                reset();
            }
        }, 100);

        return () => clearInterval(interval);
    }, [getSwipeInfo, reset]);

    const timelineYears = [1998, 2000, 2004, 2005, 2008, 2010, 2012, 2015, 2018, 2020, 2022, 2025];
    return <div className="w-screen h-screen" ref={containerRef}>
        <TimelineHeader timelineYears={timelineYears} />
    </div>
}

export default Timeline;