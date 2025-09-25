// 时间线事件类型
export interface TimelineEvent {
  id: string;
  year: number;
  title: string;
  description: string;
  type: 'milestone' | 'achievement' | 'launch' | 'expansion';
  position: 'above' | 'below'; // 在波浪线上方还是下方
  details?: {
    image?: string;
    additionalInfo?: string;
  };
}

// 时间线数据
export interface TimelineData {
  events: TimelineEvent[];
  startYear: number;
  endYear: number;
  currentYear: number;
}

// 时间线头部组件 Props
export interface TimelineHeaderProps {
  currentYear: number;
  onYearChange?: (year: number) => void;
  className?: string;
}

// 时间线导航组件 Props
export interface TimelineNavigationProps {
  startYear: number;
  endYear: number;
  currentYear: number;
  onYearSelect: (year: number) => void;
  className?: string;
}

// 时间线内容组件 Props
export interface TimelineContentProps {
  events: TimelineEvent[];
  currentYear: number;
  onEventClick?: (event: TimelineEvent) => void;
  className?: string;
}

// 时间线事件组件 Props
export interface TimelineEventProps {
  event: TimelineEvent;
  position: { x: number; y: number };
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

// 时间线波浪线组件 Props
export interface TimelineWaveProps {
  width: number;
  height: number;
  startYear: number;
  endYear: number;
  className?: string;
}
