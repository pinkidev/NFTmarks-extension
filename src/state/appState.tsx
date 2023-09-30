import { createStore } from "solid-js/store";
import { Bookmark } from '../components/molecules/types'

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

let nftMarks: Bookmark[] = [];
let category: string = 'Default';

const [state, setState] = createStore({
  theme,
  nftMarks,
  category
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

  const setCategory = (category: string) => {
    setState(() => {
      return { ...state, category }
    })
  }

  return { state, setTheme, setMarks, setCategory };
};
