import { createStore } from "solid-js/store";


const [appState, setAppState] = createStore({
  theme: true
});   

export const useAppState = () => {
  const setTheme = (theme: boolean) => {
    setAppState('theme', theme)
  }

  return {appState, setTheme};
}

