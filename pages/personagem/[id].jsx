import Head from 'next/head';
import axios from 'axios';
import styles from '../../styles/css/Personagens.module.css';

const personagem = ({ list }) => (
  <div>
    <Head>
      <title>{list[0].name}</title>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1," />
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Lato:100,100italic,300,300italic,regular,italic,700,700italic,900,900italic" rel="stylesheet" />
    </Head>
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.image_hero}>
          <img src={`${list[0].thumbnail.path}/detail.${list[0].thumbnail.extension}`} alt={`imagem do ${list[0].name}`} />
        </div>
        <div className={styles.texto_hero}>
          <h1>{list[0].name}</h1>
          <p>{list[0].description}</p>
        </div>
      </section>
      <section className={styles.sobre}>
        <h2>Revistas em Quadrinhos</h2>
        <ul>
          {list[0].comics.items.map((item) => (
            <li key={list[0].comics.items.indexOf(item)}>
              <a href="#">{item.name}</a>
            </li>
          ))}
        </ul>

        <h2>Series</h2>

        <ul>
          {list[0].series.items.map((item) => (
            <li>
              <a href="#">{item.name}</a>
            </li>
          ))}
        </ul>

        <h2>Stories</h2>

        <ul>
          {list[0].stories.items.map((item) => (
            <li>
              <a href="#">{item.name}</a>
            </li>
          ))}
        </ul>

        <h2>Eventos</h2>

        <ul>
          {list[0].events.items.map((item) => (
            <li>
              <a href="#">{item.name}</a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  </div>
);

export default personagem;

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await axios.get(`http://localhost:3000/api/SearchById/${id}`);
  return {
    props: {
      list: res.data.list,
    },
    revalidate: 10,
  };
}
