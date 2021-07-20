import { useState, useMemo } from "react";
import CountryContext from "./CountryContext";

const CountryContextProvider = (props) => {
  const [direction, setDirection] = useState();
  const [value, setValue] = useState();
  const [filteredText, setFilteredText] = useState("");
  const { children } = props;

  const countries = useMemo(() => {
    if (props.countries) {
      return props.countries;
    }
  }, [props.countries]);

  const filteredCountries = useMemo(() => {
    if (countries) {
      const filteredCountries = countries.filter(
        (country) =>
          country.name.toLowerCase().includes(filteredText) ||
          country.region.toLowerCase().includes(filteredText) ||
          country.subregion.toLowerCase().includes(filteredText)
      );
      return filteredCountries;
    }
  }, [countries, filteredText]);

  return (
    <CountryContext.Provider
      value={{
        direction,
        countries,
        value,
        filteredCountries,
        filteredText,
        setValue,
        setDirection,
        setFilteredText,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export default CountryContextProvider;
