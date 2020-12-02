import { MdSearch } from "react-icons/md";
import { IconContext } from "react-icons";
import styles from "./SearchInput.module.css";

const SearchInput = ({ ...rest }) => {
  return (
    <div className={styles.wrapper}>
      <IconContext.Provider value={{ style: { fontSize: "1.5em" } }}>
        <MdSearch color="inherit" />
      </IconContext.Provider>
      <input className={styles.input} {...rest} />
    </div>
  );
};

export default SearchInput;
