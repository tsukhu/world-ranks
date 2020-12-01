import Layout from "../../components/Layout/Layout";
import Maps from "../../components/Maps/Maps";
import styles from "./CountryInfo.module.css";

const CountryInfo = ({ country }) => {
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

  console.log(country);
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
            <div className={styles.overview_region}>{adminregion.value}</div>
          </div>
        </div>
        <div className={styles.container_right}>
          <div className={styles.details_panel}>
            <h4 className={styles.details_panel_heading}>World Bank Details</h4>
            <div className={styles.details_panel_row}>
              <div className={styles.details_panel_label}>Capital</div>
              <div className={styles.details_panel_value}>{capitalCity}</div>
            </div>

            <div className={styles.details_panel_row}>
              <div className={styles.details_panel_label}>Income Level</div>
              <div className={styles.details_panel_value}>
                {incomeLevel.value}
              </div>
            </div>

            <div className={styles.details_panel_row}>
              <div className={styles.details_panel_label}>Lending Type</div>
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

export async function getServerSideProps({ query }) {
  const { id } = query;
  console.log(id);

  const res = await fetch(
    `http://api.worldbank.org/v2/country/${id}?format=json`
  );

  const country = await res.json();
  return {
    props: {
      country: country[1][0],
    },
  };
}

export default CountryInfo;
