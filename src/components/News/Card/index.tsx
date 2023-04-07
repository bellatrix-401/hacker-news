import { MouseEventHandler } from 'react'
import Image from 'next/image'
import styles from './Card.module.css'

type CardProps = {
  date: string
  title: string
  fav: boolean
  id: string
  handleFav: MouseEventHandler<HTMLImageElement>
}

const Card: React.FC<CardProps> = ({ date, title, fav, handleFav, id }) => {
  return (
    <div className={styles.main}>
      <div className={styles.info}>
        <div className={styles.date}>
          <Image src="/icons/clock.svg" alt="Date" width={16} height={16} />
          <span>{date}</span>
        </div>
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.fav}>
        <Image
          id={id}
          src={fav ? '/icons/fav-filled.svg' : '/icons/fav.svg'}
          alt="Favorite"
          width={24}
          height={22}
          onClick={handleFav}
        />
      </div>
    </div>
  )
}

export default Card
