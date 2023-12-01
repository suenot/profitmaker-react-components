import * as React from "react"
import { useState, useEffect } from 'react';

import { UnitPublicUi } from "./UnitPublicUi";
import { UnitEditUi } from "./UnitEditUi";
import { UnitOptions, Language } from "./types";

const defaultOptions: UnitOptions = {
  unitName: "CatCoin",
  unitTicker: "CAT",
  unitDescription: 'Dogecoin is a popular cryptocurrency that started as a playful meme in 2013. It features the Shiba Inu dog from the "Doge" internet meme as its console.logo. Despite its humorous origins, Dogecoin has gained a dedicated following and is used for tipping content creators, charitable donations, and as a digital currency for various online payments. It distinguishes itself with a vibrant and welcoming community and relatively low payment fees.',
  unitSrc: "",
  unitId: 7003,
  languages: [
    {
      symbold: 'ru',
      originalName: 'Русский',
      englishName: 'Russian',
    },
    {
      symbold: 'en',
      originalName: 'English',
      englishName: 'English',
    },
    {
      symbold: 'uz',
      originalName: 'O\'zbekcha',
      englishName: 'Uzbek',
    },
    {
      symbold: 'uk',
      originalName: 'Українська',
      englishName: 'Ukrainian',
    },
    {
      symbold: 'by',
      originalName: 'Беларуская',
      englishName: 'Belarusian',
    },
    {
      symbold: 'kk',
      originalName: 'Қазақша',
      englishName: 'Kazakh',
    },
  ],
}

const defaultAvailableLanguages: Language[] = [
  {
    symbold: 'ru',
    originalName: 'Русский',
    englishName: 'Russian',
  },
  {
    symbold: 'en',
    originalName: 'English',
    englishName: 'English',
  },
  {
    symbold: 'uz',
    originalName: 'O\'zbekcha',
    englishName: 'Uzbek',
  },
  {
    symbold: 'uk',
    originalName: 'Українська',
    englishName: 'Ukrainian',
  },
  {
    symbold: 'by',
    originalName: 'Беларуская',
    englishName: 'Belarusian',
  },
  {
    symbold: 'kk',
    originalName: 'Қазақша',
    englishName: 'Kazakh',
  },
]

export const UnitUi = () => {
  const [created, setCreated] = useState(true); // подписка на created
  const [edit, setEdit] = useState(false); // подписка на edit

  const [options, setOptions] = useState<UnitOptions>(defaultOptions);

  const availableLanguages: Language[] = defaultAvailableLanguages;

  return (
    <div>
      { created && !edit ?
        <UnitPublicUi onClickEditButton={() => setEdit(true)} options={options}/> :
        <UnitEditUi
          onClickBackButton={() => setEdit(false)}
          onClickSaveButton={() => setEdit(false)}
          options={options}
          setOptions={setOptions}
          availableLanguages={availableLanguages}
        />
      }
    </div>
  )
}
