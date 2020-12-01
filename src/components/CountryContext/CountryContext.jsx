import { createContext } from "react";

const CountryContext = createContext({
  filteredText: "",
  value: undefined,
  direction: undefined,
  countries: [],
  filteredCountries: [],
  setValue: () => {},
  setDirection: () => {},
  setFilteredCountries: () => {},
  setFilteredText: () => {},
});

export default CountryContext;
