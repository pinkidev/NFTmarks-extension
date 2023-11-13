import { useSelector } from "../../store";
import nftmarksApi from "../../api/nftmarks-api";
import { Bookmark, Nftmark } from "../../components/molecules/types";
import bookmarksApi from "../../api/bookmarks-api";

const useContent = () => {
  const { app } = useSelector();
  const setState = app.setState;
  const nftmarks = () => app.state.nftmarks;
  const category = () => app.state.category
  const bookmarks = () => app.state.bookmarks;
  const loading = () => app.state.loading;


  const setLoading = (type: string, bool: Boolean) => {
    setState(() => {
      return { ...app.state, loading: {...app.state.loading, [type]: bool } }    
    })
  }
  const addBookmark = async (bookmark: Bookmark) => {
    try {
      const response = await bookmarksApi.addBookmark(bookmark);
    } catch (err) {

    }
    setState(() => {
      return { ...app.state, nftMarks: [bookmark, ...app.state.bookmarks] }
    })
  }

  const setCategory = (category: string) => {
    setState(() => {
      return { ...app.state, category }
    })
  }

  const setBookmarks = (bookmarks: Bookmark[]) => {
    setState(() => {
      return { ...app.state, bookmarks }
    })
  }

  const setNftmarks = (nftmarks: Nftmark[]) => {
    setState(() => {
      return { ...app.state, nftmarks }
    })
  }


  // const setLoading = app.setLoading;


  return {
    category,
    setCategory,
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
