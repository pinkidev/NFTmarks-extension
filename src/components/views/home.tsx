import { Component, createEffect, createSignal, Show, onMount } from "solid-js";
import { BookmarkList } from "../organisms/bookmark-list";
import Select from "../atoms/select";
import useContent from "../../use/useContent/useContent";
import Login from "./login";
import { ethers } from 'ethers';
import useSettings from "../../use/useSettings/useSettings";
import nftmarksApi from "../../api/nftmarks-api";


const provider = new ethers.BrowserProvider((window as any).ethereum);

const Home: Component = () => {
  const categories = [{ label: 'Kinky', value: 'Kinky' }, { label: 'Default', value: 'Default' }];
  const { nftMarks, setCategory, category, setMarks} = useContent()
  const { setConnected, connected } = useSettings()


  const isConnected = async () => {
    const accounts = await provider.send('eth_accounts', []);
    if (accounts.length) {
      setConnected(true)
    } else {
      setConnected(false);
    }
  }
  const getUserNftMarks = async () => {
    const marks = await nftmarksApi.getNftMarksByUser('652d5eb3d7e492b02c050f70');
    const parsedMarks = marks.map((mark:string) => JSON.parse(mark));
    setMarks(parsedMarks)
  }

  createEffect(() => { 
    nftMarks()
  })

  onMount(() => {
    isConnected();
    getUserNftMarks();
  })
  
  return (
    <Show when={connected()} fallback={<Login connected={connected} setConnected={setConnected} />}>
      <div class="px-6 relative">
        <Select value={category} setValue={setCategory} name="Category" options={categories} />
        <div class="mt-2">
          <BookmarkList bookmarks={nftMarks()} />
        </div>
      </div>
    </Show>

  );
};

export default Home;
