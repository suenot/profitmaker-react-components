import * as React from "react"
import { useState, useEffect } from 'react';

import { LanguageListUi } from "./LanguageListUi";

const allLanguages: any[] = []; // your existing logic for defining allLanguages or importing it if it's elsewhere

export const LanguageList = ({defaultData = []}: {defaultData?: any[]}) => {
  const [search, setSearch] = useState<string>('');
  const [data, setData] = useState<any[]>(defaultData);

  useEffect(() => {
    if (!search) {
      setData(defaultData.length > 0 ? defaultData : allLanguages);
      return;
    }
    const filteredData = (defaultData.length > 0 ? defaultData : allLanguages).filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.id.toString().includes(search)
    );

    setData(filteredData);
  }, [search, defaultData, allLanguages]);
  return (
    <LanguageListUi search={search} setSearch={setSearch} data={data} setData={setData}/>
  )
}
