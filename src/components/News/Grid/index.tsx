import { MouseEventHandler } from 'react'
import { News } from '@component/types/news'
import NewsCard from '../Card'
import styles from './Grid.module.css'

type GridProps = {
  items: Array<News>
  handleFav: MouseEventHandler<HTMLImageElement>
  getNextPage?: () => void
}

const Grid: React.FC<GridProps> = ({ items, handleFav, getNextPage }) => {
  return (
    <div className={styles.main}>
      {items.map((it, index) => (
        <NewsCard
          key={it.id}
          handleFav={handleFav}
          data={it}
          isLast={index === items.length - 1}
          getNextPage={getNextPage}
        />
      ))}
    </div>
  )
}

export default Grid
