import * as React from "react"
import { useState, useEffect } from 'react';

import { PortfolioListUi } from "./PortfolioListUi";

const defaultData = [
  {
    id: 30829,
    name: "Кадетский фонд",
    avatar: "",
  }
];

export const LanguageList = () => {
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
    <PortfolioListUi search={search} setSearch={setSearch} data={data} setData={()=>{}}/>
  )
}
