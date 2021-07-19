import axios from 'axios';
import { apiBase, hash, pubKey } from '../../lib/marvel';

export default async function getPersons(req, res) {
  try {
    const data = await axios.get(`${apiBase}characters?&ts=1&apikey=${pubKey}&hash=${hash}`);
    console.log(data);
    res.status(200).json({
      list: data.data.data,
    });
  } catch (error) {
    res.status(404);
    console.error(error);
  }
}
