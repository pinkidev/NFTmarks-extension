import { createStore } from "solid-js/store";
import { Bookmark, Nftmark } from '../components/molecules/types';
import nftMarksApi from "../api/bookmarks-api";
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

let nftmarks: Nftmark[] = [];
let bookmarks: Bookmark[] = [];
let category: string = 'Default';
let blockchain: Blockchain = {
  connected: false,
  chain: 'ethereum'
}

const [state, setState] = createStore({
  theme,
  nftmarks,
  bookmarks,
  category,
  blockchain,
  loading: {
    nftmarks: null,
    bookmarks: null
  }
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

  const setBookmarks = (bookmarks: Bookmark[]) => {
    setState(() => {
      return { ...state, bookmarks }
    })
  }

  const setNftmarks = (nftmarks: Nftmark[]) => {
    setState(() => {
      return { ...state, nftmarks }
    })
  }

  const setLoading = (type: string, bool: Boolean) => {
    setState(() => {
      return { ...state, loading: {...state.loading, [type]: bool } }    
    })
  }
 
  const addBookmark = async (bookmark: Bookmark) => {
    try {
      const response = await nftMarksApi.addBookmark(bookmark);
    } catch (err) {

    }
    setState(() => {
      return { ...state, nftMarks: [bookmark, ...state.bookmarks] }
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
        ...state, blockchain: { ...state.blockchain, connected }
      }
    })
  }

  const setBlockchain = (chain: string) => {
    setState(() => {
      return {
        ...state, blockchain: { ...state.blockchain, chain }
      }
    })
  }

  return { state, setTheme, setBookmarks, setNftmarks, setLoading, setCategory, setConnected, setBlockchain, addBookmark };
};
