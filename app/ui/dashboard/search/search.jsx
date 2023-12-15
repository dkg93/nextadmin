import { MdSearch } from 'react-icons/md'
import styles from './search.module.css'

const Search = ({ placeholder }) => {
    return (
        <div className={styles.container}>
            <div className={styles.search}>
                <MdSearch />
                <input type="text" placeholder={placeholder} className={styles.input} />
            </div>

        </div>
    )
}

export default Search