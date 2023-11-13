import { Component, createEffect, Show, onMount, createSignal } from "solid-js";
import { RowList } from "../organisms/row-list";
import Select from "../atoms/select";
import useContent from "../../actions/content-actions/content-actions";
import Login from "./login";
import { ethers } from 'ethers';
import useSettings from "../../actions/settings-actions/settings-actions";
import bookmarksApi from "../../api/bookmarks-api";
import Loader from "../atoms/loader/loader";
import { BookmarkRow } from "../molecules/bookmark-row";
import { TbFaceIdError } from 'solid-icons/tb'

const provider = new ethers.BrowserProvider((window as any).ethereum);

const Home: Component = () => {
  const categories = [{ label: 'Kinky', value: 'Kinky' }, { label: 'Default', value: 'Default' }];
  const props = useContent();
  const { setConnected, connected } = useSettings();
  const [view, setView] = createSignal('categories')


  const isConnected = async () => {
    const accounts = await provider.send('eth_accounts', []);
    if (accounts.length) {
      setConnected(true)
    } else {
      setConnected(false);
    }
  }
  const getUserBookmarks = async () => {
    if (props.bookmarks().length === 0) {
      props.setLoading('bookmarks', true);
      const marks = await bookmarksApi.getBookmarksByUser('652d5eb3d7e492b02c050f70');
      props.setLoading('bookmarks', false);
      const parsedMarks = marks.map((mark: string) => JSON.parse(mark));
      props.setBookmarks(parsedMarks)
    }
  }

  createEffect(() => {
    // props.bookmarks()
    // props.category()
  });


  onMount(() => {
    isConnected();
    getUserBookmarks();
  })

  return (
    <Show when={connected()} fallback={<Login connected={connected} setConnected={setConnected} />}>
      <div class="px-6 relative">
        <div class="w-full p-1 flex">
          <div onClick={() => setView('categories')}
            class={`w-1/2 mx-1 ${view() === 'categories' ? 'border-b-4' : ''} cursor-pointer border-b-primaryButtonLight dark:border-b-primaryButtonDark rounded-b-md dark:text-textDark text-textLight flex justify-center`}>Categories</div>
          <div onClick={() => setView('collections')}
            class={`w-1/2 mx-1 ${view() === 'collections' ? 'border-b-4' : ''} cursor-pointer border-b-primaryButtonLight dark:border-b-primaryButtonDark rounded-b-md dark:text-textDark text-textLight flex justify-center`}>Collections</div>
        </div>
        <Show when={!props.loading().bookmarks} fallback={<Loader />}>
          <Select value={props.category} setValue={props.setCategory} name="Category" options={categories} />
          <div class="mt-2">
            <RowList RowComponent={BookmarkRow} category={props.category()} list={props.bookmarks()} />
          </div>
        </Show>
      </div>
    </Show>

  );
};

export default Home;
