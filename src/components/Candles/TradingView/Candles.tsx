import { createChart, ColorType, UTCTimestamp } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';

interface Candlestick {
  time: UTCTimestamp,
  open: number,
  high: number,
  low: number,
  close: number,
  volume: number
}

interface ChartProps {
  height?: number,
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
    height = 500,
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

      // const chart = createChart(chartContainerRef.current, {
      //   width: chartContainerRef.current.clientWidth,
      //   height: 500,
      // });
      // chart.timeScale().fitContent();
      const chart = createChart(chartContainerRef.current, {
        width: chartContainerRef.current.clientWidth,
        height,
        timeScale: {
          tickMarkFormatter: (time: number) => {
            const date = new Date(time * 1000);
            return date.toISOString().substr(11, 8); // format as HH:mm:ss
          },
        },
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

      // modify data to seconds
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
  { time: Math.floor(Date.now() / 1000) as UTCTimestamp, open: 10, high: 10.63, low: 9.49, close: 9.55, volume: 1000 },
  { time: (Math.floor((Date.now()+1000) / 1000)) as UTCTimestamp, open: 9.55, high: 15, low: 9.55, close: 12, volume: 1000 },
  { time: (Math.floor((Date.now()+2000) / 1000)) as UTCTimestamp, open: 12, high: 9.55, low: 8, close: 11, volume: 1000 },
]

export function TradingViewCandles(props: any) {
  return (
    <ChartComponent {...props} data={initialData}></ChartComponent>
  );
}
