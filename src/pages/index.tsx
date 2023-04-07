import { ChangeEvent, ChangeEventHandler } from 'react'
import Head from 'next/head'
import Header from '@component/components/Header'
import Button from '@component/components/Button'
import Select from '@component/components/Select'
import styles from '@component/styles/Home.module.css'
import Grid from '@component/components/News/Grid'
import { items } from '@component/constants'

const selectOptions = [
  { value: 'angular', name: 'Angular', icon: '/icons/angular.png' },
  { value: 'reactjs', name: 'React', icon: '/icons/react.png' },
  { value: 'vuejs', name: 'Vuejs', icon: '/icons/vue.png' },
]

const handleChange: ChangeEventHandler = (
  event: ChangeEvent<HTMLInputElement>
) => {
  console.log(event.target.value)
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Hacker News</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.buttonWrapper}>
          <Button label="All" />
          <Button label="My faves" />
        </div>
        <Select
          options={selectOptions}
          placeholder="Select your news"
          handleChange={handleChange}
        />
        <Grid items={items} />
      </main>
    </>
  )
}
