import { TradingViewCandles } from './TradingView/Candles';
import ReactStockCharts from './ReactStockCharts';
import useSize from '@react-hook/size';
import { useRef } from 'react';
import data from './data.js';

export const Candles = (props: any) => {
  const widgetRef = useRef(null)
  const [width, height] = useSize(widgetRef)

  const reactStockChartsData = data.map((order) => {
    return {
      'date': new Date(order[0]),
      'open': order[1],
      'high': order[2],
      'low': order[3],
      'close': order[4],
      'volume': order[5],
      'absoluteChange': '',
      'dividend': '',
      'percentChange': '',
      'split': '',
    }
  })

  return (
    <div className="widget" style={{height: '100vh'}} ref={widgetRef}>
      {/* { height && <TradingViewCandles height={height} /> }
       */}
      { height && <ReactStockCharts data={data} type="hybrid" height={height}/> }
    </div>
  );
}
