import { useState, useEffect, useContext, useCallback } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { IconContext } from "react-icons";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import CountryContext from "../CountryContext/CountryContext";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "./CountriesTable.module.css";
import en from "../../../locales/en-US";
import fr from "../../../locales/fr";

const orderBy = (countries, value, direction) => {
  if (direction === "asc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? 1 : -1));
  }

  if (direction === "desc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? -1 : 1));
  }

  return countries;
};

const SortArrow = ({ direction }) => {
  if (!direction) {
    return <></>;
  }
  if (direction === "desc") {
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
  const PER_PAGE = 4;
  const { filteredCountries, value, direction, setDirection, setValue } =
    useContext(CountryContext);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentList, setCurrentList] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [orderedCountries, setOrderedCountries] = useState([]);
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en-US" ? en : fr;
  useEffect(() => {
    const orderedList = orderBy(filteredCountries, value, direction);
    setOrderedCountries(orderedList);
    const currentPageData = orderedList.slice(0, PER_PAGE);
    setCurrentList(currentPageData);
    setCurrentPage(1);
    setHasMore(true);
  }, [filteredCountries, value, direction]);

  const setValueAndDirection = useCallback((value: any) => {
    switchDirection();
    setValue(value);
  }, []);

  const switchDirection = () => {
    if (!direction) {
      setDirection("desc");
    } else if (direction === "desc") {
      setDirection("asc");
    } else if (direction === "asc") {
      setDirection("desc");
    } else {
      setDirection(null);
    }
  };

  const fetchMoreData = () => {
    if (currentList.length >= orderedCountries.length) {
      setHasMore(false);
      return;
    }
    addNextPage();
  };

  const addNextPage = () => {
    const offset = currentPage * PER_PAGE;
    const currentPageData = orderedCountries.slice(offset, offset + PER_PAGE);
    setCurrentList((items) => items.concat(currentPageData));
    setCurrentPage(currentPage + 1);
  };

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
            onClick={() => setValueAndDirection("name")}
          >
            <div>{t.name}</div>
            {value === "name" && <SortArrow direction={direction}></SortArrow>}
          </div>
          <div
            className={styles.heading_population}
            onClick={() => setValueAndDirection("population")}
          >
            <div>{t.population}</div>
            {value === "population" && (
              <SortArrow direction={direction}></SortArrow>
            )}
          </div>

          <div
            className={styles.heading_area}
            onClick={() => setValueAndDirection("area")}
          >
            <div>
              {`${t.area} (km `}
              <sup style={{ fontSize: "0.5rem" }}>2</sup>
              {")"}
            </div>
            {value === "area" && <SortArrow direction={direction}></SortArrow>}
          </div>

          <div
            className={styles.heading_gini}
            onClick={() => setValueAndDirection("gini")}
          >
            <div>{t.gini}</div>
            {value === "gini" && <SortArrow direction={direction}></SortArrow>}
          </div>
        </div>

        {currentList.map((country) => {
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
