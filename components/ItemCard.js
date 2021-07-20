import styles from '../styles/ItemCard.module.css'

export default function ItemCard(props) {
    return(
        <div className={styles.container}>
            <div>
                <div className={styles.number}>
                    <div>
                        <p className={styles.arrow}>&and;</p>
                        <p className={styles.numb}>{props.number}</p>
                    </div>
                </div>
                <div>
                    <h4>{props.title}</h4>
                    <p className={styles.details}>{props.details}</p>
                    <span className={styles.tag}>{props.tag}</span>
                </div>
            </div>
            <div>
                <div className={styles.circle}></div>
                <p>{props.likes}</p>
            </div>
        </div>
    )
}