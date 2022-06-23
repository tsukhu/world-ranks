import Layout from '../../components/Layout/Layout';
import Maps from '../../components/Maps/Maps';
import styles from './CountryInfo.module.css';
import { useRouter } from 'next/router';
import en from '../../../locales/en-US';
import fr from '../../../locales/fr';

const CountryInfo = ({
  country,
  id,
  error,
}: {
  country: any;
  id: string;
  error: any;
}) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en-US' ? en : fr;
  if (error)
    return (
      <Layout title={id}>
        <div className={styles.overview_panel}> {error} </div>
      </Layout>
    );
  const {
    name,
    region,
    adminregion,
    incomeLevel,
    lendingType,
    capitalCity,
    longitude,
    latitude,
  } = country;

  return (
    <Layout title={name}>
      <div className={styles.container}>
        <div className={styles.container_left}>
          <div className={styles.overview_panel}>
            <div className={styles.overview_panel_map}>
              <Maps longitude={+longitude} latitude={+latitude} />
            </div>

            <h1 className={styles.overview_name}>{name}</h1>
            <div className={styles.overview_region}>{region.value}</div>
          </div>
        </div>
        <div className={styles.container_right}>
          <div className={styles.details_panel}>
            <h4 className={styles.details_panel_heading}>
              {t.worldBankDetails}
            </h4>
            <div className={styles.details_panel_row}>
              <div className={styles.details_panel_label}>{t.capital}</div>
              <div className={styles.details_panel_value}>{capitalCity}</div>
            </div>

            <div className={styles.details_panel_row}>
              <div className={styles.details_panel_label}>{t.incomeLevel}</div>
              <div className={styles.details_panel_value}>
                {incomeLevel.value}
              </div>
            </div>

            <div className={styles.details_panel_row}>
              <div className={styles.details_panel_label}>{t.lendingType}</div>
              <div className={styles.details_panel_value}>
                {lendingType.value}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query }: { query: any }) {
  const { id, name } = query;
  if (id && name) {
    const res = await fetch(
      `http://api.worldbank.org/v2/country/${id}?format=json`
    );

    const country = await res.json();

    if (country[0] && country[0].message) {
      return {
        props: {
          country: {},
          id: id || null,
          error: `World Bank information for ${name} is not available`,
        },
      };
    } else {
      return {
        props: {
          country: country[1][0],
          id: id || null,
          error: false,
        },
      };
    }
  }
}

export default CountryInfo;
