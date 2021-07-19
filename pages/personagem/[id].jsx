import axios from 'axios';
const personagem = ({list}) => {
  return (
    <div>
      <h1>{list[0].name}</h1>
      <h2>{list[0].description}</h2>
      <img src={`${list[0].thumbnail.path}/detail.${list[0].thumbnail.extension}`} alt={`imagem do ${list[0].name}`} />
      <a href='/'>Inicio</a>
    </div>
  )
}


export default personagem

export async function getServerSideProps(context){
  const {id} = context.params
  const res = await axios.get(`http://localhost:3000/api/SearchById/${id}`)
  return {
    props : {
      list: res.data.list
    }
  }
}