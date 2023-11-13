import { useSelector } from "../../store";

const useContent = () => {
  const { app } = useSelector();
  const appState = () => app.state;
  const nftMarks = () => app.state.nftMarks;
  const category = () => app.state.category
  const loading = () => app.state.loading
  const setMarks = app.setMarks;
  const addMark = app.addMark;
  const setCategory = app.setCategory
  const setLoading = app.setLoading;


  return {
    category,
    setCategory,
    appState,
    nftMarks,
    setMarks,
    addMark,
    setLoading,
    loading
  };
};

export default useContent;
