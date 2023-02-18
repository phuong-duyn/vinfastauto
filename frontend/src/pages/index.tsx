import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useEffect } from 'react'
import CustomHead from '@/components/CustomHead'


export default function Home() {
  useEffect(() => {
    fetch('/api/items/123')
    .then((response) => response.json())
    .then((response) => console.log(response))
  }, [])

  return (
    <>
      <CustomHead title="Hello world" />
      <main className={styles.main}>
        <h1>hello world</h1>
      </main>
    </>
  )
}
