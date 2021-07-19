import axios from 'axios';
import { apiBase, hash, pubKey } from '../../../lib/marvel';

export default async function handler(req, res) {
  try {
    const data = await axios.get(`${apiBase}characters?&ts=1&apikey=${pubKey}&hash=${hash}`)
    res.status(200).json(data.data.data.results)
  } catch (error) {
    res.status(404)
    console.error(error);
  }
}
