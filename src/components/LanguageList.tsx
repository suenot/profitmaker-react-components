import * as React from "react"
import { useState, useEffect } from 'react';

import { LanguageListUi } from "./LanguageListUi";

const defaultData: any[] = [];

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
    <LanguageListUi search={search} setSearch={setSearch} data={data} setData={()=>{}}/>
  )
}
