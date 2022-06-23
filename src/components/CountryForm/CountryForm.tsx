import * as React from 'react';
import styles from './CountryForm.module.css';

const CountryForm = ({ onClick, ...rest }: any) => {
  const [input, setInput] = React.useState('');
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        {...rest}
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="Enter the City"
      />
      <button className={styles.btn} onClick={() => onClick(input)}>
        Get Weather
      </button>
    </div>
  );
};

export default CountryForm;
