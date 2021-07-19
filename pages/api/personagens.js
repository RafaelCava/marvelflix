import axios from 'axios';
import { apiBase, hash, pubKey } from '../../lib/marvel';

export default async (req, res) => {
  try {
    const data = await axios.get(`${apiBase}characters?orderBy=name&limit=100&ts=1&apikey=${pubKey}&hash=${hash}`);
    res.status(200).json({
      list: data.data
    });
  } catch (error) {
    res.status(404);
    console.error(error);
  }
}
