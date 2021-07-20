import Head from 'next/head'
// import Image from 'next/image'
import axios from 'axios';
import styles from '../styles/css/Home.module.css';

const Home = ({ list }) => (
  <div className={styles.container}>
    <Head>
      <title>MarvelFlix</title>
      <meta name='viewport' content='minimum-scale=1, initial-scale=1,'/>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Lato:100,100italic,300,300italic,regular,italic,700,700italic,900,900italic" rel="stylesheet" />
    </Head>
    <header className={styles.header}>
      <div className="logo">
        <h1>
          <span>Marvel</span>
          Flix
        </h1>
      </div>
      <h2>Os 100 Melhores personagens da Marvel</h2>
    </header>
    <main className={styles.main}>
      <ul>
        {list.results.map(item => (
          <li>
            <a href={`personagem/${item.id}`}>
              <h1>{ item.name }</h1>
              <img src={`${item.thumbnail.path}/portrait_xlarge.${item.thumbnail.extension}`} alt="imagem person" />
            </a>
          </li>
        ))}
      </ul>
    </main>
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
