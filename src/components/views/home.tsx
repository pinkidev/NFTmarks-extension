import { Component, createEffect, createSignal, Show } from "solid-js";
import { BookmarkList } from "../organisms/bookmark-list";
import Select from "../atoms/select";
import { useSelector } from "../../store";
import useContent from "../../use/useContent/useContent";
import Login from "./login";

const Home: Component = () => {
  const categories = [{label: 'Kinky', value: 'kinky'}, {label: 'Default', value: 'default'}];
  const { nftMarks, setCategory, category } = useContent()
  const [connected, setConnected] = createSignal(false);

  createEffect(() => {
    nftMarks()
  })

  let bookmarks = nftMarks()
  return (
    <Show when={connected()} fallback={<Login connected={connected} setConnected={setConnected}/>}>
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
