import { useSelector } from "../../store";

const useSettings = () => {
  const { app } = useSelector();
  const appState = () => app.state;

  return {

  };
};

export default useSettings;
