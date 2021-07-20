import Head from 'next/head';
import axios from 'axios';
const personagem = ({list}) => {
  return (
    <div>
    <Head>
      <title>{list[0].name}</title>
    </Head>
      <h1>{list[0].name}</h1>
      <p>{list[0].description}</p>
      <img src={`${list[0].thumbnail.path}/detail.${list[0].thumbnail.extension}`} alt={`imagem do ${list[0].name}`} />
      <h2>Revistas em Quadrinhos</h2>
      <ul>
        {list[0].comics.items.map(item=> (
          <li>
            <a href="#">{item.name}</a>
          </li>
        ))}
      </ul>
      
      <h2>Series</h2>
      
      <ul>
        {list[0].series.items.map(item=> (
          <li>
            <a href="#">{item.name}</a>
          </li>
        ))}
      </ul>

      <h2>Stories</h2>  

      <ul>
        {list[0].stories.items.map(item=> (
          <li>
            <a href="#">{item.name}</a>
          </li>
        ))}
      </ul>

      <h2>Eventos</h2>

      <ul>
        {list[0].events.items.map(item=> (
          <li>
            <a href="#">{item.name}</a>
          </li>
        ))}
      </ul>
      <a href='/'>Inicio</a>
    </div>
  )
}


export default personagem

export async function getServerSideProps(context){
  const {id} = context.params
  const res = await axios.get(`http://localhost:3000/api/SearchById/${id}`)
  // console.log(res.data.list[0]);
  return {
    props : {
      list: res.data.list
    }
  }
}