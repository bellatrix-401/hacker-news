import { MouseEventHandler, useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './Card.module.css'
import { News } from '@component/types/news'

type CardProps = {
  data: News
  isLast: boolean
  getNextPage?: () => void
  handleFav: MouseEventHandler<HTMLImageElement>
}

const Card: React.FC<CardProps> = ({
  data,
  isLast,
  getNextPage,
  handleFav,
}) => {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cardRef?.current || !getNextPage) return

    const observer = new IntersectionObserver(([entry]) => {
      if (isLast && entry.isIntersecting) {
        observer.unobserve(entry.target)
        getNextPage()
      }
    })

    observer.observe(cardRef.current)
  }, [isLast])

  return (
    <a href={data.url} target="_blank">
      <div className={styles.main} ref={cardRef}>
        <div className={styles.info}>
          <div className={styles.date}>
            <Image src="/icons/clock.svg" alt="Date" width={16} height={16} />
            <span>
              {data.date} by {data.author}
            </span>
          </div>
          <span className={styles.title}>{data.title}</span>
        </div>
        <div className={styles.fav}>
          <Image
            id={data.id}
            src={data.fav ? '/icons/fav-filled.svg' : '/icons/fav.svg'}
            alt="Favorite"
            width={24}
            height={22}
            onClick={handleFav}
          />
        </div>
      </div>
    </a>
  )
}

export default Card
