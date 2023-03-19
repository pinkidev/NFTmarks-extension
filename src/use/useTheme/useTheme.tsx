import { useSelector } from "../../store";
import config from "../../../app.config";

const useTheme = () => {
  const { app } = useSelector();
  const appState = () => app.state;
  const theme = () => app.state.theme;
  const setTheme = app.setTheme;
  const darkSecondary = () => config.themes.twDark.secondary;
  const lightSecondary = () => config.themes.twLight.secondary;
  const darkText = () => config.themes.twDark.text;
  const lightText = () => config.themes.twLight.text;
  return {
    appState,
    theme,
    setTheme,
    darkSecondary,
    lightSecondary,
    darkText,
    lightText,
  };
};

export default useTheme;
