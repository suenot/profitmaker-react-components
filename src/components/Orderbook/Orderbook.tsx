import * as React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import demoData from './data';
import { OrderbookUi } from "./OrderbookUi";

type OrderComputed = {
  [key: string]: any;
};

export interface Dictionary<T> {
  [key: string]: T;
}

export const Orderbook = () => {
  const bg = useColorModeValue('#fff', '#181818');

  const containerRef = React.useRef<HTMLDivElement>(null);

  const store = {
    priceStep: 0.01
  }

  const computeData = (data: any) => {
    const priceStep = store.priceStep;
    if (priceStep === 0) return data?.value;

    const firstAsk = data?.value?.asks?.[0]?.price;
    const lastAsk = data?.value?.asks?.[data?.value?.asks?.length - 1]?.price;
    const firstBid = data?.value?.bids?.[0]?.price;
    const lastBid = data?.value?.bids?.[data?.value?.bids?.length - 1]?.price;

    const asksSteps: Dictionary<OrderComputed> = {};
    const asksStepsList = [];
    if (firstAsk !== undefined && lastAsk !== undefined) {
      for (let i = lastAsk; i <= firstAsk; i += priceStep) {
        const priceToFixed = i.toFixed(2);
        asksSteps[priceToFixed] = {
          price: priceToFixed,
          amount: 0,
          total: 0,
        };
        asksStepsList.push(priceToFixed);
      }
    }

    const bidsSteps: Dictionary<OrderComputed> = {};
    const bidsStepsList = [];
    if (firstBid !== undefined && lastBid !== undefined) {
      for (let i = lastBid; i <= firstBid; i += priceStep) {
        const priceToFixed = i.toFixed(2);
        bidsSteps[priceToFixed] = {
          price: priceToFixed,
          amount: 0,
          total: 0,
        };
        bidsStepsList.push(priceToFixed);
      }
    }

    if (data?.value?.asks === undefined || data?.value?.bids === undefined) return data?.value;
    for (const ask of data?.value?.asks) {
      const inStepPrice = asksStepsList.find((orderPrice) => parseFloat(orderPrice) <= ask.price && parseFloat(orderPrice) + priceStep > ask.price);
      if (inStepPrice && asksSteps[inStepPrice]) {
        asksSteps[inStepPrice].amount += ask.amount;
        asksSteps[inStepPrice].total += ask.amount * ask.price;
      }
    }

    for (const bid of data?.value?.bids) {
      const inStepPrice = bidsStepsList.find((orderPrice) => parseFloat(orderPrice) <= bid.price && parseFloat(orderPrice) + priceStep > bid.price);
      if (inStepPrice && bidsSteps[inStepPrice]) {
        bidsSteps[inStepPrice].amount += bid.amount;
        bidsSteps[inStepPrice].total += bid.total;
      }
    }

    let asks = Object.values(asksSteps).sort((a, b) => a.price - b.price);
    let bids = Object.values(bidsSteps).sort((a, b) => a.price - b.price);

    let bidsSum = 0;
    let asksSum = 0;

    bids = bids.map((bid) => {
      bidsSum += bid.amount;
      return {
        ...bid,
        type: 'bid',
        total: Number(bid.total).toFixed(8),
        sum: bidsSum,
        percentToSpread: data?.value?.spread && Math.abs((bid.price - data?.value?.spread) / data?.value?.spread * 100),
      };
    });

    asks = asks.map((ask) => {
      asksSum += ask.amount;
      return {
        ...ask,
        type: 'ask',
        total: Number(ask.total).toFixed(8),
        sum: asksSum,
        percentToSpread: data?.value?.spread && Math.abs((ask.price - data?.value?.spread) / data?.value?.spread * 100),
      };
    });

    bids = bids.map((bid) => {
      bid.percent = (bid.amount / bidsSum) * 100;
      bid.percentSum = bid.sum / bidsSum * 100;
      return bid;
    });

    asks = asks.map((ask) => {
      ask.percent = (ask.amount / asksSum) * 100;
      ask.percentSum = ask.sum / asksSum * 100;
      return ask;
    });

    asks = asks.sort((a, b) => b.price - a.price);
    bids = bids.sort((a, b) => b.price - a.price);

    return {
      ...data?.value,
      asks,
      bids,
    };
  };

  const dataComputed = computeData(demoData);

  return (
    <Box ref={containerRef}>
      <Box maxW='sm' minW='sm' w='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' p='4' bg={bg} maxH='sm' style={{
        overflowY: 'auto'
      }}>
        <OrderbookUi data={demoData} exchangeId='binance' baseId='BTC' quoteId='USDT' widgetRef={containerRef} />
      </Box>
    </Box>
  );
};
