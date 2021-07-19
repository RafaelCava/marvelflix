// import Head from 'next/head'
// import Image from 'next/image'
import axios from 'axios';
import styles from '../styles/css/Home.module.css';

const Home = ({ list }) => (
  <div className={styles.container}>
    <p>{list.autor[0]}</p>
    <p>{list.autor[1]}</p>
    <p>{list.dias[1]}</p>
    <p>{list.dias[0]}</p>
  </div>
);

export default Home;

export async function getSe() {
  const data = await axios.get('http://localhost:3000/api/personagens');

  return {
    props: {
      list: data,
    },
  };
}
