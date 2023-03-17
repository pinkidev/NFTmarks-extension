import { createSignal } from "solid-js";

const useSwitches = () => {
  const [theme, setTheme] = createSignal(true);
  return {
    theme,
    setTheme
  }
}

export default useSwitches;