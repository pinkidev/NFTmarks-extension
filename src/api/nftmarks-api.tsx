import { Bookmark } from "../components/molecules/types"
import axios from 'axios';
const url = 'http://localhost:9000/nftmark';

const addNftMark = async (nftMark: Bookmark) => {
  const response = await axios.post(url, nftMark);
  return response;
}

const getNftMarks = async () => {
  const response = await axios.post(url);
  return response;
}

const getNftMarksByUser = async (userId: string) => {
  const response = await axios.get(url+'s/user', { params: { userId } });
  return response.data;
}


export default {
  addNftMark,
  getNftMarksByUser
}