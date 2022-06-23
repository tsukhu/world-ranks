import Link from 'next/link';
import Image from 'next/image';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from './CountriesTable.module.css';
import { usePaginatedCountries } from './usePaginatedCountries';

const SortArrow = ({ direction }: any) => {
  if (!direction) {
    return <></>;
  }
  if (direction === 'desc') {
    return (
      <div className={styles.heading_arrow}>
        <MdKeyboardArrowDown color="inherit" />
      </div>
    );
  } else {
    return (
      <div className={styles.heading_arrow}>
        <MdKeyboardArrowUp color="inherit" />
      </div>
    );
  }
};

const CountriesTable = () => {
  const {
    t,
    currentList,
    value,
    direction,
    locale,
    fetchMoreData,
    hasMore,
    setValueAndDirection,
  } = usePaginatedCountries();
  return (
    <div className={styles.tableContainer}>
      <InfiniteScroll
        dataLength={currentList.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <div className={styles.heading}>
          <div className={styles.heading_flag}></div>
          <div
            className={styles.heading_name}
            onClick={() => setValueAndDirection('name')}
          >
            <div>{t.name}</div>
            {value === 'name' && <SortArrow direction={direction}></SortArrow>}
          </div>
          <div
            className={styles.heading_population}
            onClick={() => setValueAndDirection('population')}
          >
            <div>{t.population}</div>
            {value === 'population' && (
              <SortArrow direction={direction}></SortArrow>
            )}
          </div>

          <div
            className={styles.heading_area}
            onClick={() => setValueAndDirection('area')}
          >
            <div>
              {`${t.area} (km `}
              <sup style={{ fontSize: '0.5rem' }}>2</sup>
              {')'}
            </div>
            {value === 'area' && <SortArrow direction={direction}></SortArrow>}
          </div>

          <div
            className={styles.heading_gini}
            onClick={() => setValueAndDirection('gini')}
          >
            <div>{t.gini}</div>
            {value === 'gini' && <SortArrow direction={direction}></SortArrow>}
          </div>
        </div>

        {currentList.map((country: any) => {
          return (
            <Link
              href={`/country/${country.alpha3Code}`}
              key={country.name}
              locale={locale}
            >
              <div className={styles.row}>
                <div className={styles.flag}>
                  <Image
                    alt={country.name}
                    src={country.flag}
                    layout="responsive"
                    width="100%"
                    height="100%"
                    objectFit="contain"
                  />
                </div>
                <div className={styles.name}>{country.name}</div>
                <div className={styles.population}>{country.population}</div>
                <div className={styles.area}>{country.area || 0} </div>
                <div className={styles.gini}>{country.gini || 0} %</div>
              </div>
            </Link>
          );
        })}
      </InfiniteScroll>
    </div>
  );
};

export default CountriesTable;
