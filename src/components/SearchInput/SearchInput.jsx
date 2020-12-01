import { MdSearch } from "react-icons/md";
import { IconContext } from "react-icons";
import styles from "./SearchInput.module.css";

const SearchInput = ({ ...rest }) => {
  return (
    <IconContext.Provider value={{ style: { fontSize: "1.5em" } }}>
        <div className={styles.wrapper}>
          <MdSearch color="inherit" />
          <input className={styles.input} {...rest} />
        </div>
    </IconContext.Provider>
  );
};

export default SearchInput;
