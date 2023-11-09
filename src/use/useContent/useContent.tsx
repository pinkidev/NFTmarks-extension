import { useSelector } from "../../store";

const useContent = () => {
  const { app } = useSelector();
  const appState = () => app.state;
  const nftMarks = () => app.state.nftMarks;
  const category = () => app.state.category
  const setMarks = app.setMarks;
  const addMark = app.addMark;
  const setCategory = app.setCategory

  return {
    category,
    setCategory,
    appState,
    nftMarks,
    setMarks,
    addMark
  };
};

export default useContent;
