import * as React from "react";
import Layout from "../../components/Layout/Layout";
import CountryForm from "../../components/CountryForm/CountryForm";
import { request, gql } from "graphql-request";
import { useQuery } from "react-query";
import { WeatherQuery_getCityByName } from "../../generated/WeatherQuery";

const endpoint = "https://graphql-weather-api.herokuapp.com/";
import styles from "./Weather.module.css";
const query = gql`
  query WeatherQuery($name: String!) {
    getCityByName(name: $name) {
      id
      name
      weather {
        summary {
          icon
          description
          title
        }
        temperature {
          actual
          feelsLike
          min
          max
        }
      }
    }
  }
`;

const temperatureConverter = (valNum) => {
  valNum = parseFloat(valNum);
  return (valNum - 273.15).toFixed(2);
};

const getWeatherForCity = async (city: string) => {
  try {
    if (!city) return null;
    const { getCityByName } = await request(endpoint, query, {
      name: `${city}`,
    });
    return getCityByName;
  } catch (error) {
    throw new Error(error.message);
  }
};

const useReactQuery = (city: string) => {
  return useQuery<WeatherQuery_getCityByName, Error>(
    ["weather", city],
    () => getWeatherForCity(city),
    {
      // The query will not execute until the city exists
      enabled: !!city,
    }
  );
};

const Weather = () => {
  const [city, setCity] = React.useState();
  const { data, error, isFetching, refetch } = useReactQuery(city);
  React.useEffect(() => {
    if (city) {
      refetch();
    }
  }, [city]);

  console.log(data);
  return (
    <Layout title="World Weather">
      <div className={styles.inputForm}>
        <CountryForm onClick={(e) => setCity(e)} />
        <p className={styles.loading}>{`${isFetching ? "Loading ..." : ""}`}</p>
      </div>
      <div className={styles.weather}>
        {error && <p>Invalid City</p>}
        {!isFetching && !data && !error && <p>No City Provided</p>}
        {data && data.name && (
          <table>
            <thead>
              <tr>
                <th scope="col">City</th>
                <th scope="col">Summary</th>
                <th scope="col">Actual</th>
                <th scope="col">Feels Like</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="City">{data.name}</td>
                <td data-label="Summary">{data.weather.summary.description}</td>
                <td data-label="Actual">{`${temperatureConverter(
                  data.weather.temperature.actual
                )} C`}</td>
                <td data-label="Feels Like">
                  {`${temperatureConverter(
                    data.weather.temperature.feelsLike
                  )} C`}
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </Layout>
  );
};

export default Weather;
