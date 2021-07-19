// import Head from 'next/head'
// import Image from 'next/image'
import axios from 'axios';
import styles from '../styles/css/Home.module.css';

const Home = ({ list }) => (
  <div className={styles.container}>
    <ul>
      {list.results.map(item => (
        <li>
          <a href={`personagem/${item.id}`}>
            <h1>{ item.id }</h1>
            <img src={`${item.thumbnail.path}/portrait_xlarge.${item.thumbnail.extension}`} alt="imagem person" />
            <h2>{ item.name }</h2>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Home;

export async function getServerSideProps() {
  const res = await axios.get('http://localhost:3000/api/personagens');
  return {
    props: {
      list: res.data.list.data,
    },
  };
}
