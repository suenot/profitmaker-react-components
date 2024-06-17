import * as React from "react"
import { useState, useEffect } from 'react';

import { WalletListUi } from "./WalletListUi";

const defaultData = [
  {
    id: 20829,
    name: "Перевод за услуги",
    avatar: "",
    amount: 1234567.89,
    unitId: 7003,
    unitTicker: "DOGE",
    unitAvatar: "",
    unitName: "Dogecoin",
    fromId: 1001,
    fromName: "Alice wallet",
    fromAvatar: "",
    toId: 1002,
    toName: "Bob wallet",
    toAvatar: "",
  },
];

export const PaymentsList = () => {
  const [search, setSearch] = useState<string>('');
  const [data, setData] = useState<any[]>(defaultData);

  useEffect(() => {
    if (!search) {
      setData(defaultData);
      return;
    }
    const filteredData = defaultData.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.id.toString().includes(search)
    );

    setData(filteredData);
  }, [search]);
  return (
    <WalletListUi search={search} setSearch={setSearch} data={data} />
  )
}
