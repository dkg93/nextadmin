import styles from "./pagination.module.css"
const Pagination = () => {
    return (
        <div className={styles.container}>
            <button className={styles.button} disabled>Prvious</button>
            <button className={styles.button}>Next</button>
        </div>
    )
}

export default Pagination