import { Component, createEffect, Show, onMount } from "solid-js";
import { RowList } from "../organisms/row-list";
import Select from "../atoms/select";
import useContent from "../../use/useContent/useContent";
import Login from "./login";
import { ethers } from 'ethers';
import useSettings from "../../use/useSettings/useSettings";
import bookmarksApi from "../../api/bookmarks-api";
import Loader from "../atoms/loader/loader";
import { BookmarkRow } from "../molecules/bookmark-row";

const provider = new ethers.BrowserProvider((window as any).ethereum);

const Home: Component = () => {
  const categories = [{ label: 'Kinky', value: 'Kinky' }, { label: 'Default', value: 'Default' }];
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
    props.setLoading('bookmarks', true);
    const marks = await bookmarksApi.getBookmarksByUser('652d5eb3d7e492b02c050f70');
    props.setLoading('bookmarks', false);
    const parsedMarks = marks.map((mark: string) => JSON.parse(mark));
    props.setBookmarks(parsedMarks)
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
