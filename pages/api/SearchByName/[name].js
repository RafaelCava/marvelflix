import axios from 'axios';
import { apiBase, hash, pubKey } from '../../../lib/marvel';

export default async function handler(req, res) {
  try {
    const { name } = req.query
    const data = await axios.get(`${apiBase}characters?&ts=1&apikey=${pubKey}&hash=${hash}`)
    const finded = data.data.data.results.find(x=> x.name === name)
    res.status(200).json(finded)
  } catch (error) {
    res.status(404)
    console.error(error);
  }
}
