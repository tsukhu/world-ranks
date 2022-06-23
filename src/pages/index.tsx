import { useContext } from 'react';
import { useRouter } from 'next/router';
import type { Country } from '../types/country';
import CountryContext from '../components/CountryContext/CountryContext';
import Layout from '../components/Layout/Layout';
import SearchInput from '../components/SearchInput/SearchInput';
import CountriesTable from '../components/CountriesTable/CountriesTable';
import styles from '../styles/Home.module.css';
import en from '../../locales/en-US';
import fr from '../../locales/fr';

export default function Home({ countries }: { countries: Country[] }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en-US' ? en : fr;
  const { filteredText, setFilteredText } = useContext(CountryContext);

  const onInputChange = (e: any) => {
    e.preventDefault();
    const keyword = e.target.value.toLowerCase();
    setFilteredText(keyword);
  };

  return (
    <Layout>
      <div className={styles.inputContainer}>
        <div className={styles.counts}>
          <div>{t.found}</div>{' '}
          <div className={styles.counts_value}>{countries.length}</div>
          <div>{t.countries}</div>
        </div>
        <div className={styles.input}>
          <SearchInput
            placeholder="Filter"
            onChange={onInputChange}
            aria-label="Filter countries"
            aria-placeholder="Filter"
            value={filteredText}
          />
        </div>
      </div>

      <CountriesTable />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch('https://restcountries.com/v2/all');
  const countries: Country[] = await res.json();

  return {
    props: {
      countries,
    },
  };
};
