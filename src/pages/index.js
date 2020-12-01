import { useContext } from "react";
import CountryContext from "../components/CountryContext/CountryContext";
import Layout from "../components/Layout/Layout";
import SearchInput from "../components/SearchInput/SearchInput";
import CountriesTable from "../components/CountriesTable/CountriesTable";
import styles from "../styles/Home.module.css";

export default function Home({ countries }) {
  const { filteredCountries, filteredText, setFilteredText } = useContext(
    CountryContext
  );

  const onInputChange = (e) => {
    e.preventDefault();
    const keyword = e.target.value.toLowerCase();
    setFilteredText(keyword);
  };

  return (
    <Layout>
      <div className={styles.inputContainer}>
        <div className={styles.counts}>
          Found <div className={styles.counts_value}>{countries.length}</div>{" "}
          countries
        </div>
        <div className={styles.input}>
          <SearchInput
            placeholder="Filter by Name, Region or Sub Region"
            onChange={onInputChange}
            aria-label="Filter countries"
            aria-placeholder="Filter by Name, Region or Sub Region"
            value={filteredText}
          />
        </div>
      </div>

      <CountriesTable countries={filteredCountries} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
};
