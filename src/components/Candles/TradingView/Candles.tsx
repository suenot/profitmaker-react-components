import { createChart, ColorType } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';

interface Candlestick {
  time: { year: number, month: number, day: number },
  open: number,
  high: number,
  low: number,
  close: number,
  volume: number
}

interface ChartProps {
  data: Candlestick[],
  colors?: {
    upColor?: string,
    downColor?: string,
    borderDownColor?: string,
    borderUpColor?: string,
    wickDownColor?: string,
    wickUpColor?: string,
  }
}

export const ChartComponent: React.FC<ChartProps> = props => {
  const {
    data,
    colors: {
      upColor = '#4bffb5',
      downColor = '#ff4976',
      borderDownColor = '#ff4976',
      borderUpColor = '#4bffb5',
      wickDownColor = '#838ca1',
      wickUpColor = '#838ca1',
    } = {},
  } = props;

  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(
    () => {
      if (!chartContainerRef.current) return;

      const handleResize = () => {
        chart.applyOptions({ width: chartContainerRef.current!.clientWidth });
      };

      const chart = createChart(chartContainerRef.current, {
        width: chartContainerRef.current.clientWidth,
        height: 500,
      });
      chart.timeScale().fitContent();

      const candleSeries = chart.addCandlestickSeries({
        upColor,
        downColor,
        borderDownColor,
        borderUpColor,
        wickDownColor,
        wickUpColor,
      });
      candleSeries.setData(data);

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);

        chart.remove();
      };
    },
    [data, upColor, downColor, borderDownColor, borderUpColor, wickDownColor, wickUpColor]
  );

  return (
    <div
      ref={chartContainerRef}
    />
  );
};

const initialData: Candlestick[] = [
  { time: { year: 2022, month: 1, day: 18 }, open: 10, high: 10.63, low: 9.49, close: 9.55, volume: 1000 }
]

export function Candles(props: any) {
  return (
    <ChartComponent {...props} data={initialData}></ChartComponent>
  );
}
