import { useState, useEffect } from "react";
import CountryContext from "./CountryContext";

const CountryContextProvider = (props) => {
  const [direction, setDirection] = useState();
  const [value, setValue] = useState();
  const [filteredText, setFilteredText] = useState("");
  const { children } = props;
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [countries, setCountries] = useState(props.countries || []);

  useEffect(() => {
    if (props.countries) {
      setCountries(props.countries);
    }
  }, [props.countries]);
  
  useEffect(() => {
    if (countries) {
      const filteredCountries = countries.filter(
        (country) =>
          country.name.toLowerCase().includes(filteredText) ||
          country.region.toLowerCase().includes(filteredText) ||
          country.subregion.toLowerCase().includes(filteredText)
      );
      setFilteredCountries(filteredCountries);
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
        setFilteredCountries,
        setFilteredText,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export default CountryContextProvider;
