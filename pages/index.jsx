import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/css/Home.module.css'
import axios from 'axios';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hello World</h1>
    </div>
  )
}


export async function getServerSideProps(){
  const res = await axios.get('http://localhost:3000/api/') 
}