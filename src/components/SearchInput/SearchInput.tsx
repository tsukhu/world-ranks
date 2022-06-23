import { MdSearch } from 'react-icons/md';
import styles from './SearchInput.module.css';

const SearchInput = ({ ...rest }) => {
  return (
    <div className={styles.wrapper}>
      <MdSearch color="inherit" />
      <input className={styles.input} {...rest} aria-label="Search Country" />
    </div>
  );
};

export default SearchInput;
