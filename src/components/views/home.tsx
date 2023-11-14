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
import { Bookmark } from "../molecules/types";

const provider = new ethers.BrowserProvider((window as any).ethereum);

const Home: Component = () => {
  const categories = [{ label: 'Kinky', value: 'Kinky' }, { label: 'Default', value: 'Default' }];
  const collections = [{ label: 'NFT Research 2023', value: 'NFT Research 2023' }, { label: 'Inception', value: 'Inception' }];

  const props = useContent();
  const { setConnected, connected } = useSettings();


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

      const collections = parsedMarks.filter((mark: Bookmark) => mark.IS_COLLECTION);
      const bookmarks = parsedMarks.filter((mark: Bookmark) => !mark.IS_COLLECTION);

      props.setBookmarks(bookmarks);
      props.setCollections(collections);
    }
  }

  onMount(() => {
    isConnected();
    getUserBookmarks();
  })

  return (
    <Show when={connected()} fallback={<Login connected={connected} setConnected={setConnected} />}>
      <div class="px-6 relative">
        <div class="w-full p-1 flex">
          <div onClick={() => props.setMarksView('categories')}
            class={`w-1/2 mx-1 ${props.marksView() === 'categories' ? 'border-b-4' : ''} cursor-pointer border-b-primaryButtonLight dark:border-b-primaryButtonDark rounded-b-md dark:text-textDark text-textLight flex justify-center`}>Categories</div>
          <div onClick={() => props.setMarksView('collections')}
            class={`w-1/2 mx-1 ${props.marksView() === 'collections' ? 'border-b-4' : ''} cursor-pointer border-b-primaryButtonLight dark:border-b-primaryButtonDark rounded-b-md dark:text-textDark text-textLight flex justify-center`}>Collections</div>
        </div>
        <Show when={!props.loading().bookmarks} fallback={<Loader />}>
          {props.marksView() === 'categories' ? <>
            <Select value={props.category()} setValue={props.setCategory} name="Category" options={categories} />
            <div class="mt-2">
              <RowList filterKey="CATEGORY" RowComponent={BookmarkRow} filter={props.category()} list={props.bookmarks()} />
            </div>
          </> :
            <>
              <Select value={props.collection()} setValue={props.setCollection} name="Collection" options={collections} />
              <div class="mt-2">
                <RowList filterKey="COLLECTION" RowComponent={BookmarkRow} filter={props.collection()} list={props.collections()} />
              </div>
            </>}
        </Show>
      </div>
    </Show>
  );
};

export default Home;
