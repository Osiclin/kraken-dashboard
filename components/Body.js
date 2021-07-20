import { useState, useEffect } from 'react'
import Title from '../components/Title'
import styles from '../styles/Body.module.css'
import ItemCard from './ItemCard'

export default function Body() {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('/api/items')
        .then(res => res.json())
        .then(data => setItems(data))
    }, [])

    return(
        <div className={styles.container}>
            <Title />
            {
                items.map((item, index) => <ItemCard key={index} number={item.number} title={item.title} details={item.details} tag={item.tag} likes={item.likes}/>)
            }
        </div>
    )
}