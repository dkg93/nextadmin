import Image from 'next/image';
import styles from './rightbar.module.css';
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
    return (
        <div className={styles.container} >
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image className={styles.bg} src="/astronaut.png" alt="" fill />
                </div>
                <div className={styles.texts}>
                    <span className={styles.notification}>
                        Available Now
                    </span>
                    <h3 className={styles.title}>How to use the new version of the admin dashboard?</h3>
                    <span className={styles.subtitle}>Takes 4 minutes to learn</span>
                    <p className={styles.desc}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        {/* It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. */}
                    </p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled /> Watch
                    </button>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.texts}>
                    <span className={styles.notification}>
                        Coming Soon
                    </span>
                    <h3 className={styles.title}>
                        New server actions are available, partial pre-redering is comming.
                    </h3>
                    <span className={styles.subtitle}>Boost your productivity</span>
                    <p className={styles.desc}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industrys standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book.
                        {/* It has survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially unchanged. */}
                    </p>
                    <button className={styles.button}>
                        <MdReadMore /> Learn
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Rightbar