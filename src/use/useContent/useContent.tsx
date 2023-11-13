import { useSelector } from "../../store";

const useContent = () => {
  const { app } = useSelector();
  const appState = () => app.state;
  const nftmarks = () => app.state.nftmarks;
  const category = () => app.state.category
  const bookmarks = () => app.state.bookmarks;
  const loading = () => app.state.loading;


  const setNftmarks = app.setNftmarks;
  const setBookmarks = app.setBookmarks;
  const addBookmark = app.addBookmark;
  const setCategory = app.setCategory;
  const setLoading = app.setLoading;


  return {
    category,
    setCategory,
    appState,
    nftmarks,
    setBookmarks,
    setNftmarks,
    addBookmark,
    setLoading,
    bookmarks,
    loading
  };
};

export default useContent;
