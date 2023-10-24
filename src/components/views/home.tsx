import { Component, createEffect, createSignal, Show, onMount } from "solid-js";
import { BookmarkList } from "../organisms/bookmark-list";
import Select from "../atoms/select";
import { useSelector } from "../../store";
import useContent from "../../use/useContent/useContent";
import Login from "./login";
import { ethers } from 'ethers';


const provider = new ethers.BrowserProvider((window as any).ethereum);

const Home: Component = () => {
  const categories = [{ label: 'Kinky', value: 'kinky' }, { label: 'Default', value: 'default' }];
  const { nftMarks, setCategory, category, setConnected, connected } = useContent()


  const isConnected = async () => {
    const accounts = await provider.send('eth_accounts', []);
    if (accounts.length) {
      setConnected(true)
    } else {
      setConnected(false);
    }
  }

  createEffect(() => {
    nftMarks()
  })

  onMount(() => {
    isConnected();
  })

  let bookmarks = nftMarks()
  return (
    <Show when={connected()} fallback={<Login connected={connected} setConnected={setConnected} />}>
      <div class="px-6 relative">
        <Select value={category} setValue={setCategory} name="Category" options={categories} />
        <div class="mt-2">
          <BookmarkList bookmarks={bookmarks} />
        </div>
      </div>
    </Show>

  );
};

export default Home;
