import Image from 'next/image'
import HackerImg from '../../../public/images/hacker-news.png'
import styles from './Header.module.css'

const Header: React.FC = () => {
  return (
    <header className={styles.main}>
      <Image src={HackerImg} alt="Hackers news" />
    </header>
  )
}

export default Header
