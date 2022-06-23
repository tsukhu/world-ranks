import { createContext } from 'react';

const CountryContext = createContext({
  filteredText: '',
  value: undefined,
  direction: undefined,
  countries: [],
  filteredCountries: [],
  setValue: (val: any) => {},
  setDirection: (val: any) => {},
  setFilteredCountries: (val: any) => {},
  setFilteredText: (val: any) => {},
});

export default CountryContext;
