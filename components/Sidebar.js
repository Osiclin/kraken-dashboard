import styles from '../styles/Sidebar.module.css'

export default function Sidebar() {
    return(
        <div className={styles.container}>
            <div>
                <div>
                    <h3>Frontend Mentor</h3>
                    <p>Feedback Board</p>
                </div>
            </div>

            <div>
                <div>
                    <span className={styles.active}>All</span>
                    <span>UI</span>
                    <span>UX</span>
                </div>
                <div>
                    <span>Enhancement</span>
                    <span>Bug</span>
                </div>
                <div>
                    <span>Feature</span>
                </div>
            </div>

            <div>
                <div>
                    <h4>Roadmap</h4>
                    <p>View</p>
                </div>
                <div>
                    <ul>
                        <li><span className={styles.flex}><div className={styles.orange}></div>Planned</span><span>2</span></li>
                        <li><span className={styles.flex}><div className={styles.purple}></div>In Progress</span><span>3</span></li>
                        <li><span className={styles.flex}><div className={styles.green}></div>Live</span><span>2</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}