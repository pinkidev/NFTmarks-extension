import { createStore } from "solid-js/store";
import { Bookmark } from '../components/molecules/types';
import nftMarksApi from "../api/nftmarks";
let theme: boolean = true;

if ("theme" in localStorage) {
  let savedTheme = localStorage.getItem("theme");
  theme = savedTheme === "dark" ? true : false;
  if (theme) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

interface Blockchain {
  connected: boolean
  chain: string
}

let nftMarks: Bookmark[] = [];
let category: string = 'Default';
let blockchain: Blockchain = {
  connected: false,
  chain: 'ethereum'
}

const [state, setState] = createStore({
  theme,
  nftMarks,
  category,
  blockchain
});

export const useAppState = () => {
  const setTheme = (theme: boolean) => {
    setState(() => {
      if (theme) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", theme ? "dark" : "light");
      return { ...state, theme };
    });
  };

  const setMarks = (nftMarks: Bookmark[]) => {
    setState(() => {
      return { ...state, nftMarks }
    })
  }

  const addMark = async (nftMark: Bookmark) => {
    try {
      const response = await nftMarksApi.addNftMark(nftMark);
      console.log(response);
    } catch(err) {

    }
    setState(() => {
      return {...state, nftMarks: [nftMark, ...state.nftMarks]}
    })
  }

  const setCategory = (category: string) => {
    setState(() => {
      return { ...state, category }
    })
  }

  const setConnected = (connected: boolean) => {
    setState(() => {
      return {
        ...state, blockchain: {...state.blockchain, connected}
      }
    })
  }

  const setBlockchain = (chain: string) => {
    setState(() => {
      return {
        ...state, blockchain: {...state.blockchain, chain }
      }
    })
  }

  return { state, setTheme, setMarks, setCategory, setConnected, setBlockchain, addMark };
};
