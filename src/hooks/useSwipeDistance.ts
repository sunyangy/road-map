import { useRef, useEffect } from 'react';

interface SwipeDistance {
  distance: number;
  direction: 'up' | 'down' | 'left' | 'right' | 'none';
  isComplete: boolean;
}

export const useSwipeDistance = (threshold: number = 50) => {
  const accumulatedDelta = useRef({ x: 0, y: 0 });
  const isTracking = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const reset = () => {
    accumulatedDelta.current = { x: 0, y: 0 };
    isTracking.current = false;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const getSwipeInfo = (): SwipeDistance => {
    const { x, y } = accumulatedDelta.current;
    const totalDistance = Math.sqrt(x * x + y * y);
    
    let direction: 'up' | 'down' | 'left' | 'right' | 'none' = 'none';
    
    if (totalDistance >= threshold) {
      const absX = Math.abs(x);
      const absY = Math.abs(y);
      
      if (absY > absX) {
        direction = y > 0 ? 'down' : 'up';
      } else {
        direction = x > 0 ? 'right' : 'left';
      }
    }

    return {
      distance: totalDistance,
      direction,
      isComplete: totalDistance >= threshold
    };
  };

  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    
    // 开始追踪
    if (!isTracking.current) {
      isTracking.current = true;
      accumulatedDelta.current = { x: 0, y: 0 };
    }
    
    // 累积滑动距离
    accumulatedDelta.current.x += e.deltaX;
    accumulatedDelta.current.y += e.deltaY;
    
    // 重置超时
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // 设置超时，如果 200ms 内没有新的滑动事件，认为滑动结束
    timeoutRef.current = setTimeout(() => {
      isTracking.current = false;
    }, 200);
  };

  return {
    handleWheel,
    getSwipeInfo,
    reset
  };
}; 