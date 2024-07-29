import React, { useRef, useEffect, useState, useMemo } from 'react';
import _ from 'lodash';
// import { observer } from 'mobx-react-lite';
// import { useStore } from '@/stores/main';
import './Orderbook.css'

export const OrderbookUi = ({ data, widgetRef, exchangeId, baseId, quoteId }: {
  data: any,
  widgetRef: any,
  exchangeId: any,
  baseId: any,
  quoteId: any
}) => {
  // const store = useStore();
  const ordersCenterRef = useRef(null);
  const tableRef = useRef(null);
  const [marginTop, setMarginTop] = useState(0);

  // const commonMargin = useMemo(() => {
  //   if (!baseId || !quoteId || !exchangeId) return 0;
  //   const id = `${baseId}/${quoteId}/${exchangeId}`;
  //   const clustersCenter = store?.scalpers?.[id]?.clustersCenter || 0;
  //   const orderBooksCenter = store?.scalpers?.[id]?.orderBooksCenter || 0;
  //   if (clustersCenter === 0 || orderBooksCenter === 0) return 0;
  //   return Math.max(orderBooksCenter, clustersCenter) - orderBooksCenter;
  // }, [baseId, quoteId, exchangeId, store]);

  // const dataLength = useMemo(() => data.length, [data]);

  // const toCenter = () => {
  //   const widget = tableRef.current;
  //   if (!widget) return;

  //   const widgetHeight = widget.offsetHeight;
  //   const top = ordersCenterRef.current.offsetTop;
  //   const scrollTo = top - widgetHeight / 2;

  //   widget.scrollTop = scrollTo;
  // };

  useEffect(() => {
    // toCenter();
  }, [data]);

  const getGradientStyle = ({ percent, side }: { percent: number, side: string}) => {
    const isCenter = false;
    let leftPercent;
    let rightPercent;

    if (isCenter) {
      leftPercent = (100 - percent) / 2;
      rightPercent = 100 - leftPercent;
    } else {
      leftPercent = 0;
      rightPercent = percent;
    }

    const green = 'rgb(38 57 53)';
    const red = '#e88080';
    const color = side === 'asks' ? red : green;

    return {
      background: `
        linear-gradient(
          90deg, rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0) ${leftPercent}%,
          ${color} ${leftPercent}%,
          ${color} ${rightPercent}%,
          rgba(255, 255, 255, 0) ${rightPercent}%,
          rgba(255, 255, 255, 0) 100%
      )`,
    };
  };

  // const calculatePositionOfCenter = useMemo(() => {
  //   if (store.scalpers[`${baseId}/${quoteId}/${exchangeId}`]) {
  //     const spreadPrice = store.scalpers[`${baseId}/${quoteId}/${exchangeId}`].spreadPrice;
  //   }
  //   const rowHeight = store.rowHeight;
  //   const orderbook = _.cloneDeep(data) || {};
  //   const asksN = orderbook?.asks?.length;
  //   if (!asksN) return 0;
  //   const marginTop = asksN * rowHeight;
  //   const id = `${baseId}/${quoteId}/${exchangeId}`;
  //   if (!store.scalpers[id]) store.scalpers[id] = {};
  //   store.scalpers[id].orderBooksCenter = marginTop;
  //   return marginTop;
  // }, [baseId, quoteId, exchangeId, store, data]);

  return (
    <div ref={tableRef} className="orders">
      {/* {JSON.stringify(data)} */}
      {/* <div className="center"></div> */}
      {/* <div className="center" style={{ top: `${calculatePositionOfCenter}px` }}></div> */}
      {/* <div className="orders-n-space" style={{ marginTop: `${commonMargin}px` }}> */}
      <div className="orders-n-space">
        <table className="n-table">
          <tbody>
            {data?.asks.map((item: any, index: any) => (
              <tr
                key={`${index}-asks`}
                style={getGradientStyle({ percent: item.percent, side: 'asks' })}
                className="order"
              >
                <td style={{ background: 'none' }}>
                  {item?.price && item?.price}
                  <div className="percentToSpread">{item?.percentToSpread && item?.percentToSpread.toFixed(3)}%</div>
                </td>
                <td style={{ background: 'none' }}>{item?.amount && item?.amount.toFixed(2)}</td>
              </tr>
            ))}
            <tr ref={ordersCenterRef}></tr>
            {data?.bids.map((item: any, index: any) => (
              <tr
                key={`${index}-bids`}
                style={getGradientStyle({ percent: item.percentSum, side: 'bids' })}
                className="order"
              >
                <td style={{ background: 'none' }}>
                  {item?.price}
                  <div className="percentToSpread">{item?.percentToSpread && item?.percentToSpread.toFixed(3)}%</div>
                </td>
                <td style={{ background: 'none' }}>{item?.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
