import axios from 'axios';
import { apiBase, hash, pubKey } from '../../../lib/marvel';

async function searchById(req, res) {
  try {
    const { id } = req.query
    const data = await axios.get(`${apiBase}characters/${id}?&ts=1&apikey=${pubKey}&hash=${hash}`)
    const {results} = data.data.data
    res.status(200).json({
      list: results
    })
  } catch (error) {
    res.status(404)
    console.error(error);
  }
}

export default searchById