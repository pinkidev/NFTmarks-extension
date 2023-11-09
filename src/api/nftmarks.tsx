import { Bookmark } from "../components/molecules/types"
import axios from 'axios';
const url = 'http://localhost:9000/nftmark';

const addNftMark = async (nftMark: Bookmark) => {
  const response = await axios.post(url, nftMark);
  return response;
}


export default {
  addNftMark
}