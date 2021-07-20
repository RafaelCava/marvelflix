/* eslint-disable no-unused-vars */
import Head from 'next/head';
import axios from 'axios';
import { Button } from '@material-ui/core';

const personagem = ({ list }) => (
  <div>
    <Head>
      <title>{list[0].name}</title>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1," />
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Lato:100,100italic,300,300italic,regular,italic,700,700italic,900,900italic" rel="stylesheet" />
    </Head>
    <h1>{list[0].name}</h1>
    <p>{list[0].description}</p>
    <img src={`${list[0].thumbnail.path}/detail.${list[0].thumbnail.extension}`} alt={`imagem do ${list[0].name}`} />
    <h2>Revistas em Quadrinhos</h2>
    <ul>
      {list[0].comics.items.map((item) => (
        <li>
          <a href="#">{item.name}</a>
        </li>
      ))}
      ;
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
    <Button color="secondary" variant="contained" href="/">Inicio</Button>
  </div>
);

export default personagem;

export async function getStaticProps({ params }) {
  const { id } = params;
  const res = await axios.get(`http://localhost:3000/api/SearchById/${id}`);
  // console.log(res.data.list[0]);
  return {
    props: {
      list: res.data.list,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1011334' } },
      { params: { id: '2' } },
    ],
    fallback: true,
  };
}
