import { MouseEvent, MouseEventHandler } from 'react'
import NewsCard from '../Card'
import styles from './Grid.module.css'

type GridProps = {
  items: Array<object>
}

const handleFav: MouseEventHandler<Element> = (
  event: MouseEvent<HTMLInputElement>
) => {
  console.log(event.target)
}

const Grid: React.FC<GridProps> = ({ items }) => {
  return (
    <div className={styles.main}>
      {items.map((it) => (
        <NewsCard
          key={'some'}
          date="4 hours ago"
          title="Progressive Web Apps with React.js: Part I — Introduction"
          fav={true}
          handleFav={handleFav}
          id="id"
        />
      ))}
    </div>
  )
}

export default Grid
