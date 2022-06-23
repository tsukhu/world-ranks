import { useRouter } from 'next/router';
import { useCallback, useContext, useEffect, useState } from 'react';
import en from '../../../locales/en-US';
import fr from '../../../locales/fr';
import CountryContext from '../CountryContext/CountryContext';

const orderBy = (countries: any, value: any, direction: any) => {
  if (direction === 'asc') {
    if (typeof countries[0][value] === 'string') {
      return [...countries].sort((a, b) =>
        a[value].localeCompare(b[value], 'fr', { ignorePunctuation: false })
      );
    } else return [...countries].sort((a, b) => a[value] - b[value]);
  }

  if (direction === 'desc') {
    if (typeof countries[0][value] === 'string') {
      return [...countries]
        .sort((a, b) =>
          a[value].localeCompare(b[value], 'fr', { ignorePunctuation: false })
        )
        .reverse();
    }
    return [...countries].sort((a, b) => b[value] - a[value]);
  }

  return countries;
};

export const usePaginatedCountries = () => {
  const PER_PAGE = 10;
  const { filteredCountries, value, direction, setDirection, setValue } =
    useContext(CountryContext);

  const [currentPage, setCurrentPage] = useState(0);
  const [currentList, setCurrentList] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [orderedCountries, setOrderedCountries] = useState([]);
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en-US' ? en : fr;

  useEffect(() => {
    console.log(value, direction, filteredCountries);
    const orderedList = orderBy(filteredCountries, value, direction);
    setOrderedCountries(orderedList);
    const currentPageData = orderedList.slice(0, PER_PAGE);
    setCurrentList(currentPageData);
    setCurrentPage(1);
    setHasMore(true);
  }, [filteredCountries, value, direction]);

  const setValueAndDirection = (value: any) => {
    switchDirection();
    setValue(value);
  };

  const switchDirection = () => {
    if (!direction) {
      setDirection('desc');
    } else if (direction === 'desc') {
      setDirection('asc');
    } else if (direction === 'asc') {
      setDirection('desc');
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

  return {
    currentList,
    fetchMoreData,
    hasMore,
    setValueAndDirection,
    currentPage,
    direction,
    value,
    t,
    locale,
  };
};
