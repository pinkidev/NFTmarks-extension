import { useSelector } from "../../store";

const useContent = () => {
  const { app } = useSelector();
  const appState = () => app.state;
  const nftMarks = () => app.state.nftMarks;
  const setMarks = app.setMarks;
  return {
    appState,
    nftMarks,
    setMarks,
  };
};

export default useContent;
