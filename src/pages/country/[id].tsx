import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout/Layout";
import styles from "./Country.module.css";
import en from "../../../locales/en-US";
import fr from "../../../locales/fr";

const getCountry = async (id) => {
  const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${id}`);

  const country = await res.json();
  return country;
};

const Country = ({ country,locale }) => {
  const t = locale === "en-US" ? en : fr;
  const [borders, setBorders] = useState([]);

  const getBorders = async () => {
    const borders = await Promise.all(
      country.borders.map((border) => getCountry(border))
    );

    setBorders(borders);
  };

  useEffect(() => {
    getBorders();
  }, []);

  return (
    <Layout title={country.name}>
      <div className={styles.container}>
        <div className={styles.container_left}>
          <div className={styles.overview_panel}>
            <Link
              href={{
                pathname: "/countryInfo/",
                query: { id: country.alpha3Code, name: country.name },
              }}
              locale={locale}
            >
              <img src={country.flag} alt={country.name}></img>
            </Link>

            <h1 className={styles.overview_name}>{country.name}</h1>
            <div className={styles.overview_region}>{country.region}</div>

            <div className={styles.overview_numbers}>
              <div className={styles.overview_population}>
                <div className={styles.overview_value}>
                  {country.population}
                </div>
                <div className={styles.overview_label}>{t.population}</div>
              </div>
              <div className={styles.overview_area}>
                <div className={styles.overview_value}>{country.area}</div>
                <div className={styles.overview_label}>{t.area}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container_right}>
          <div className={styles.details_panel}>
            <h4 className={styles.details_panel_heading}>{t.details}</h4>
            <div className={styles.details_panel_row}>
              <div className={styles.details_panel_label}>{t.capital}</div>
              <div className={styles.details_panel_value}>
                {country.capital}
              </div>
            </div>

            <div className={styles.details_panel_row}>
              <div className={styles.details_panel_label}>{t.subRegion}</div>
              <div className={styles.details_panel_value}>
                {country.subregion}
              </div>
            </div>

            <div className={styles.details_panel_row}>
              <div className={styles.details_panel_label}>{t.languages}</div>
              <div className={styles.details_panel_value}>
                {country.languages.map(({ name }) => name).join(", ")}
              </div>
            </div>

            <div className={styles.details_panel_row}>
              <div className={styles.details_panel_label}>{t.currencies}</div>
              <div className={styles.details_panel_value}>
                {country.currencies.map(({ name }) => name).join(", ")}
              </div>
            </div>

            <div className={styles.details_panel_row}>
              <div className={styles.details_panel_label}>{t.nativeName}</div>
              <div className={styles.details_panel_value}>
                {country.nativeName}
              </div>
            </div>

            <div className={styles.details_panel_row}>
              <div className={styles.details_panel_label}>{t.gini}</div>
              <div className={styles.details_panel_value}>{country.gini} %</div>
            </div>

            <div className={styles.details_panel_borders}>
              <div className={styles.details_panel_borders_label}>
                {t.neighbourHood}
              </div>
              <div className={styles.details_panel_borders_container}>
                {borders.map(({ flag, name }) => {
                  return (
                    <div
                      className={styles.details_panel_borders_country}
                      key={name}
                    >
                      <Image
                        alt={name}
                        src={flag}
                        layout="responsive"
                        width="100%"
                        height="100%"
                        objectFit="contain"
                      />
                      <div className={styles.details_panel_borders_name}>
                        {name}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Country;

export const getStaticPaths = async ({ locales }) => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");

  const countries = await res.json();

  const paths = locales.map((locale) => countries.map((country) => ({
    params: { id: country.alpha3Code }, locale
  }))).flat(1);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params, locale }) => {
  const country = await getCountry(params.id);
  return {
    props: {
      country,
      locale,
    },
  };
};
