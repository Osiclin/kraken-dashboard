import styles from '../styles/Title.module.css'

export default function Title() {
    return(
        <div className={styles.container}>
            <div>
                <div className={styles.badge}>
                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="grey"><g><rect fill="none" height="24" width="24"/></g><g><path d="M17,10.43V2H7v8.43c0,0.35,0.18,0.68,0.49,0.86l4.18,2.51l-0.99,2.34l-3.41,0.29l2.59,2.24L9.07,22L12,20.23L14.93,22 l-0.78-3.33l2.59-2.24l-3.41-0.29l-0.99-2.34l4.18-2.51C16.82,11.11,17,10.79,17,10.43z M13,12.23l-1,0.6l-1-0.6V3h2V12.23z"/></g></svg>
                </div>
                <div>
                    <h4>6 Suggestions</h4>
                </div>
                <div>
                    <span className={styles.sort}>Sort By :</span>
                    <select>
                        <option value="most upvoted">Most Upvotes</option>
                    </select>
                </div>
            </div>
            <div className={styles.button}>+ Add Feedback</div>
        </div>
    )
}